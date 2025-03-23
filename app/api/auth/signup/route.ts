import { NextResponse } from "next/server";
import { signUp } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    console.log("➡️ /api/auth/signup route called");
    const { name, email, password } = await request.json();
    console.log("➡️ Received signup data:", { name, email, password });

    if (!name || !email || !password) {
      console.error("❌ Missing required fields");
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    const user = await signUp({ name, email, password });
    console.log("✅ /api/auth/signup created user:", user);

    return NextResponse.json(user, { status: 201 });
  } catch (error: any) {
    console.error("❌ /api/auth/signup error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
