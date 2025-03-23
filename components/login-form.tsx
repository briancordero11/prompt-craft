"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Github, Loader2 } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    setError(null);

    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    setIsLoading(false);

    if (!result?.ok) {
      setError("Invalid email or password");
      return;
    }

    router.refresh();
    router.push("/dashboard");
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    setError(null);

    try {
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch {
      setError("An error occurred with Google sign in");
    }
    setIsGoogleLoading(false);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>Sign in to your account to track your progress and compete on the leaderboard</CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <Label>Email</Label>
            <Input type="email" {...register("email")} disabled={isLoading} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <Label>Password</Label>
            <Input type="password" {...register("password")} disabled={isLoading} />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Sign In"}
            </Button>
          </div>
        </form>
        <Button variant="outline" onClick={handleGoogleSignIn} disabled={isGoogleLoading} className="w-full mt-4">
          {isGoogleLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Sign in with Google"}
        </Button>
      </CardContent>
    </Card>
  );
}

