import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function CommunitySponsorPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Community Sponsor</h1>
          <p className="mt-2 text-gray-600">Support our mission and join our community of sponsors</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Community Tier</CardTitle>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-extrabold text-gray-900">$100</span>
              <span className="ml-1 text-xl font-medium text-gray-500">per month</span>
            </div>
            <CardDescription className="mt-2">Perfect for individuals and small businesses</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-700">Logo on website</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-700">Social media mention</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-700">Community forum badge</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-700">Early access to new features</p>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/become-sponsor">Become a Community Sponsor</Link>
            </Button>
          </CardFooter>
        </Card>

        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Why Become a Community Sponsor?</h2>
          <p className="text-gray-700 mb-4">
            As a Community Sponsor, you'll be supporting our mission to improve prompt engineering skills worldwide.
            Your contribution helps us develop new features, create educational content, and maintain our platform.
          </p>
          <p className="text-gray-700 mb-4">
            Community Sponsors are recognized on our website and social media, giving you visibility within our growing
            community of AI enthusiasts and professionals.
          </p>
          <p className="text-gray-700">
            Join our community of sponsors today and help shape the future of prompt engineering education!
          </p>
        </div>
      </div>
    </div>
  )
}

