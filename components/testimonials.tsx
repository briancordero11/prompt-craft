"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "UI/UX Designer",
    content:
      "PromptCraft helped me improve my prompt writing skills dramatically. Now I can get exactly what I want from AI image generators on the first try!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Sarah Chen",
    role: "Content Creator",
    content:
      "The feedback system is incredible. I can see exactly where my descriptions are lacking and how to improve them. My content quality has improved so much.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Michael Rodriguez",
    role: "Marketing Director",
    content:
      "We use PromptCraft as a team training tool. It's helped our entire marketing department communicate more effectively with our design AI tools.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Jamie Taylor",
    role: "Indie Game Developer",
    content:
      "The competitive aspect is addictive! I find myself constantly trying to beat my high scores, and my prompt skills have improved tremendously.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function Testimonials() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What our users are saying
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-grow">
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </div>
                <div className="mt-6 flex items-center">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

