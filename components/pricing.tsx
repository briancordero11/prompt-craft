"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for beginners",
    features: ["Basic game modes", "10 challenges per day", "Basic feedback", "Public leaderboard access"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "per month",
    description: "For serious prompt engineers",
    features: [
      "All game modes",
      "Unlimited challenges",
      "Detailed feedback & analytics",
      "Industry-specific challenges",
      "Personal progress tracking",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    popular: true,
  },
  {
    name: "Team",
    price: "$49.99",
    period: "per month",
    description: "For organizations",
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Team leaderboards",
      "Custom challenge creation",
      "Team analytics dashboard",
      "API access",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Choose the perfect plan for you
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Whether you're just starting out or looking to master prompt engineering, we have a plan for you.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col h-full ${plan.popular ? "border-indigo-500 shadow-lg" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="ml-1 text-xl font-medium text-gray-500">{plan.period}</span>}
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? "bg-indigo-600 hover:bg-indigo-700" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

