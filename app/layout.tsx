import type React from "react";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/components/auth/auth-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ClientEffects } from "@/components/ClientEffects"; // Keeps the client-side effect
import "./globals.css";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PromptCraft - Master the Art of Prompt Engineering",
  description:
    "Practice describing images with precision and learn to craft the perfect prompts for AI image generation.",
  generator: "v0.dev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-100`}>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </AuthProvider>
        <Suspense fallback={null}>
          <ClientEffects /> {/* Prevent hydration issues */}
        </Suspense>
      </body>
    </html>
  );
}
