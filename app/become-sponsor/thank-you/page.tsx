import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-md mx-auto text-center">
        <Card>
          <CardHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl">Thank You!</CardTitle>
            <CardDescription>Your sponsorship request has been submitted</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              We've received your sponsorship request and our team will review it shortly. We'll be in touch within 1-2
              business days to discuss next steps.
            </p>
            <p className="text-gray-700">
              In the meantime, feel free to explore PromptCraft and see what we're building.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center space-x-4">
            <Button asChild>
              <Link href="/">Return Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/play/easy">Try PromptCraft</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

