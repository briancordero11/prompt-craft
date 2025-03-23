import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PartnerSponsorPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Partner Sponsor</h1>
          <p className="mt-2 text-gray-600">Grow with us and reach our community of prompt engineers</p>
        </div>

        <Card className="mb-8 border-indigo-500 shadow-lg">
          <CardHeader>
            <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                Popular
              </span>
            </div>
            <CardTitle className="text-2xl">Partner Tier</CardTitle>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-extrabold text-gray-900">$500</span>
              <span className="ml-1 text-xl font-medium text-gray-500">per month</span>
            </div>
            <CardDescription className="mt-2">Ideal for growing companies and startups</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-700">Everything in Community tier</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-700">Medium-sized logo placement</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-700">Monthly newsletter feature</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-700">Dedicated support channel</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-700">Co-marketing opportunities</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-700">API access</p>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700" asChild>
              <Link href="/become-sponsor">Become a Partner</Link>
            </Button>
          </CardFooter>
        </Card>

        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Partner Benefits</h2>
          <p className="text-gray-700 mb-4">
            As a Partner Sponsor, you'll enjoy enhanced visibility and marketing opportunities within our community.
            Your brand will be featured prominently on our platform and in our communications.
          </p>
          <p className="text-gray-700 mb-4">
            Partners receive dedicated support and access to our API, allowing you to integrate PromptCraft's
            capabilities into your own products or services. You'll also have opportunities for co-marketing initiatives
            to reach our growing user base.
          </p>
          <p className="text-gray-700">
            Join our Partner program today and establish your brand as a leader in the AI and prompt engineering space!
          </p>
        </div>
      </div>
    </div>
  )
}

