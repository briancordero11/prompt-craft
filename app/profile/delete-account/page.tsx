"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2, AlertTriangle } from "lucide-react"

export default function DeleteAccountPage() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [confirmation, setConfirmation] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (status === "unauthenticated") {
    router.push("/login")
    return null
  }

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    )
  }

  const handleDeleteAccount = async () => {
    if (confirmation !== "delete my account") {
      setError("Please type 'delete my account' to confirm")
      return
    }

    setIsDeleting(true)
    setError(null)

    try {
      // In a real app, this would be an API call to delete the user account
      // For this demo, we'll just simulate a delay and sign out
      await new Promise((resolve) => setTimeout(resolve, 1500))

      await signOut({ redirect: false })
      router.push("/?deleted=true")
    } catch (error) {
      console.error("Error deleting account:", error)
      setError("Failed to delete account. Please try again.")
      setIsDeleting(false)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-md">
      <Card className="border-red-200">
        <CardHeader className="bg-red-50">
          <CardTitle className="text-red-700 flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5" />
            Delete Account
          </CardTitle>
          <CardDescription>This action cannot be undone</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Deleting your account will permanently remove all your data, including game history, scores, and
              achievements.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <p className="text-gray-700">
              To confirm deletion of your account <strong>{session?.user?.email}</strong>, please type{" "}
              <strong>delete my account</strong> below:
            </p>

            <div className="grid gap-2">
              <Label htmlFor="confirmation">Confirmation</Label>
              <Input
                id="confirmation"
                value={confirmation}
                onChange={(e) => setConfirmation(e.target.value)}
                placeholder="delete my account"
                className="border-red-200 focus:ring-red-500"
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDeleteAccount}
            disabled={isDeleting || confirmation !== "delete my account"}
          >
            {isDeleting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              "Delete Account"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

