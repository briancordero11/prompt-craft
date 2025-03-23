"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AvatarCircles } from "@/components/avatar-circles"

const sponsorTiers = [
  {
    name: "Community",
    price: "$100",
    period: "per month",
    description: "Support our mission",
    features: ["Logo on website", "Social media mention", "Community forum badge", "Early access to new features"],
    cta: "Learn More",
    link: "/sponsors/community",
    popular: false,
  },
  {
    name: "Partner",
    price: "$500",
    period: "per month",
    description: "Grow with us",
    features: [
      "Everything in Community",
      "Medium-sized logo placement",
      "Monthly newsletter feature",
      "Dedicated support channel",
      "Co-marketing opportunities",
      "API access",
    ],
    cta: "Learn More",
    link: "/sponsors/partner",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$2,000",
    period: "per month",
    description: "Strategic partnership",
    features: [
      "Everything in Partner",
      "Premium logo placement",
      "Custom integration options",
      "Quarterly strategy meetings",
      "Custom challenge creation",
      "White-label options",
      "Dedicated account manager",
    ],
    cta: "Learn More",
    link: "/sponsors/enterprise",
    popular: false,
  },
]

// Mock data for avatar circles
const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
]

export function Sponsors() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Sponsors</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Join our growing community of sponsors
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Support PromptCraft and help us build the future of prompt engineering education.
          </p>
        </div>

        <div className="mt-10 mb-16">
          <div className="flex flex-col items-center justify-center">
            <AvatarCircles numPeople={99} avatarUrls={avatars} />
            <p className="mt-6 text-lg text-gray-600">
              Join these amazing companies and individuals supporting our mission
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sponsorTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex flex-col h-full ${tier.popular ? "border-indigo-500 shadow-lg" : ""}`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                  {tier.period && <span className="ml-1 text-xl font-medium text-gray-500">{tier.period}</span>}
                </div>
                <CardDescription className="mt-2">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${tier.popular ? "bg-indigo-600 hover:bg-indigo-700" : ""}`}
                  variant={tier.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href={tier.link}>{tier.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="px-8 py-3" asChild>
            <Link href="/become-sponsor">Become a Sponsor</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

