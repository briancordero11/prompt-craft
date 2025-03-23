import { db } from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export type GameDifficulty = "easy" | "medium" | "hard" | "challenge";

export interface GameImage {
  id: string;
  url: string;
  idealPrompt?: string;
  difficulty: GameDifficulty;
  category?: string;
}

export interface GameScore {
  score: number;
  feedback: string;
  missingElements: string[];
  idealPrompt: string;
}

export interface GameSession {
  id: string;
  images: GameImage[];
  currentRound: number;
  totalRounds: number;
  scores: number[];
  difficulty: GameDifficulty;
  timeLimit: number;
}

export const DIFFICULTY_TIME_LIMITS = {
  easy: 120,
  medium: 90,
  hard: 60,
  challenge: 30,
};

export const ROUNDS_PER_GAME = 5;

/**
 * Creates a new game session with the specified difficulty
 */
export async function createGameSession(difficulty: GameDifficulty): Promise<GameSession> {
  console.log("📌 createGameSession called with difficulty:", difficulty);

  // Get user session
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    console.error("❌ No user session found!");
    throw new Error("User not authenticated");
  }

  const userId = session.user.id;
  console.log("✅ User ID found:", userId);

  try {
    // Fetch images matching the difficulty level
    const images = await db.image.findMany({
      where: { difficulty },
      take: ROUNDS_PER_GAME,
      orderBy: { id: "asc" },
    });

    if (!images.length) {
      throw new Error("No images found");
    }

    // Create game session
    const gameSession = await db.gameSession.create({
      data: {
        userId,
        difficulty,
        currentRound: 0,
        totalRounds: ROUNDS_PER_GAME,
        scores: { create: [] },
        timeLimit: DIFFICULTY_TIME_LIMITS[difficulty],
        gameSessionImages: {
          create: images.map((img) => ({
            image: { connect: { id: img.id } },
          })),
        },
      },
    });    

    // Fetch the session with images separately
    const gameSessionWithImages = await db.gameSession.findUnique({
      where: { id: gameSession.id },
      include: { 
        gameSessionImages: {
          include: {
            image: true
          }
        },
        scores: true
      },
    });

    if (!gameSessionWithImages) {
      throw new Error("Failed to retrieve the game session with images");
    }

    console.log("✅ Game session created:", gameSessionWithImages);

    return {
      id: gameSessionWithImages.id,
      images: gameSessionWithImages.gameSessionImages.map(gsi => gsi.image) as GameImage[],
      currentRound: gameSessionWithImages.currentRound,
      totalRounds: gameSessionWithImages.totalRounds,
      scores: gameSessionWithImages.scores as unknown as number[],
      difficulty: gameSessionWithImages.difficulty as GameDifficulty,
      timeLimit: gameSessionWithImages.timeLimit,
    };
  } catch (error) {
    console.error("❌ Error in createGameSession:", error);
    throw new Error("Failed to create game session");
  }
}

/**
 * Evaluates a user's prompt against the ideal prompt
 */
export async function evaluatePrompt(imageId: string, userPrompt: string): Promise<GameScore> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }

  const userId = session.user.id;
  console.log("✅ Evaluating prompt for user:", userId);

  const image = await db.image.findUnique({
    where: {
      id: imageId,
    },
  });

  if (!image) {
    throw new Error("Image not found");
  }

  const idealPrompt = image.idealPrompt || "";
  const score = calculateScore(userPrompt, idealPrompt);
  const missingElements = getMissingElements(userPrompt, idealPrompt);
  const feedback = generateFeedback(score, missingElements);

  const gameSession = await db.gameSession.findFirst({
    where: {
      userId,
      gameSessionImages: {
        some: {
          imageId
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  if (!gameSession) {
    throw new Error("Game session not found");
  }

  await db.score.create({
    data: {
      score,
      userPrompt,
      userId,
      imageId,
      gameSessionId: gameSession.id,
    },
  });

  return {
    score,
    feedback,
    missingElements,
    idealPrompt,
  };
}

/**
 * Calculates a similarity score between user prompt and ideal prompt
 */
function calculateScore(userPrompt: string, idealPrompt: string): number {
  const userWords = new Set(userPrompt.toLowerCase().split(/\s+/));
  const idealWords = new Set(idealPrompt.toLowerCase().split(/\s+/));

  let matches = 0;
  idealWords.forEach((word) => {
    if (userWords.has(word)) matches++;
  });

  const coverage = matches / idealWords.size;
  const precision = matches / userWords.size;
  const f1 = (2 * (precision * coverage)) / (precision + coverage || 1);

  return Math.round(f1 * 100);
}

/**
 * Identifies key elements missing from the user's prompt
 */
function getMissingElements(userPrompt: string, idealPrompt: string): string[] {
  const userWords = new Set(userPrompt.toLowerCase().split(/\s+/));
  const idealWords = idealPrompt.toLowerCase().split(/\s+/);
  return idealWords.filter((word) => word.length > 3 && !userWords.has(word)).slice(0, 3);
}

/**
 * Generates feedback based on score and missing elements
 */
function generateFeedback(score: number, missingElements: string[]): string {
  const missingElementsText = missingElements.join(", ");

  if (score >= 90) {
    return "Excellent! Your description captures all the key elements perfectly.";
  } else if (score >= 70) {
    return `Good job! You identified most key elements. The ideal prompt also included: "${missingElementsText}".`;
  } else if (score >= 50) {
    return `Nice start! You captured some elements, but missed: "${missingElementsText}". Try to be more detailed in your descriptions.`;
  } else {
    return `Keep practicing! Your description missed key elements like: "${missingElementsText}". Remember to describe all visible objects, colors, and atmosphere.`;
  }
}

export async function getLeaderboard(difficulty?: GameDifficulty, limit: number = 10) {
  // Implementation here
}
