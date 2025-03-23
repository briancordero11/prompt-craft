import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function EnterpriseSponsorPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Enterprise Sponsor</h1>
          <p className="mt-2 text-gray-600">Strategic partnership for industry leaders</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Enterprise Tier</CardTitle>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-extrabold text-gray-900">$2,000</span>
              <span className="ml-1 text-xl font-medium text-gray-500">per month</span>
            </div>
            <CardDescription className="mt-2">For large organizations and industry leaders</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-700">Everything in Partner tier</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-700">Premium logo placement</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-700">Custom integration options</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-700">Quarterly strategy meetings</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-700">Custom challenge creation</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-700">White-label options</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-700">Dedicated account manager</p>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/become-sponsor">Contact Us</Link>
            </Button>
          </CardFooter>
        </Card>

        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Enterprise Solutions</h2>
          <p className="text-gray-700 mb-4">
            Our Enterprise tier offers a comprehensive strategic partnership for organizations looking to leverage
            prompt engineering at scale. With premium branding, custom integrations, and white-label options, you can
            seamlessly incorporate PromptCraft into your ecosystem.
          </p>
          <p className="text-gray-700 mb-4">
            Enterprise sponsors receive dedicated account management and regular strategy meetings to ensure your
            organization gets maximum value from the partnership. You'll also have the ability to create custom
            challenges tailored to your industry or specific use cases.
          </p>
          <p className="text-gray-700">
            Contact us today to discuss how an Enterprise sponsorship can help your organization lead in the AI space!
          </p>
        </div>
      </div>
    </div>
  )
}

