import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
// Temporarily disable Google authentication until credentials are added
// import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import { compare, hash } from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/error",
  },
  providers: [
    // Temporarily disable Google authentication until credentials are added
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("📌 Authorizing user:", credentials?.email);
        if (!credentials?.email || !credentials?.password) {
          console.error("❌ Missing email or password");
          return null;
        }
        try {
          const user = await db.user.findUnique({
            where: { email: credentials.email },
          });
          if (!user || !user.password) {
            console.error("❌ User not found or missing password:", credentials.email);
            return null;
          }
          const isPasswordValid = await compare(credentials.password, user.password);
          if (!isPasswordValid) {
            console.error("❌ Invalid password for user:", credentials.email);
            return null;
          }
          console.log("✅ User authorized:", user.email);
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
          };
        } catch (error) {
          console.error("❌ Error during authentication:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      console.log("📌 Creating session for user:", token.email);
      return {
        ...session,
        user: {
          id: token.id as string,
          name: (token.name as string) || session.user?.name,
          email: (token.email as string) || session.user?.email,
          image: (token.picture as string) || session.user?.image,
        },
      };
    },
    async jwt({ token, user }) {
      console.log("📌 Processing JWT for user:", token.email);
      try {
        const dbUser = await db.user.findFirst({
          where: { email: token.email },
        });
        if (!dbUser && user) {
          console.log("🔍 User not found in DB, using session user:", user.email);
          token.id = user.id;
          token.name = user.name;
          token.email = user.email;
          token.picture = user.image;
        } else if (dbUser) {
          console.log("✅ User found in DB:", dbUser.email);
          token.id = dbUser.id;
          token.name = dbUser.name;
          token.email = dbUser.email;
          token.picture = dbUser.image;
        }
      } catch (error) {
        console.error("❌ Error fetching user from DB:", error);
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

/**
 * Helper function to sign up a new user manually.
 * This function creates a user record with a hashed password.
 */
export async function signUp({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  console.log("➡️ signUp called with:", { name, email });
  
  // Check if user already exists
  const existingUser = await db.user.findUnique({
    where: { email },
  });
  if (existingUser) {
    console.error("❌ User already exists:", email);
    throw new Error("User already exists");
  }

  // Hash the provided password
  const hashedPassword = await hash(password, 12);
  console.log("➡️ Hashed password:", hashedPassword);

  // Create the user record
  const user = await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  console.log("✅ User created:", user);

  return user;
}
