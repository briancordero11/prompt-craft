"use client"

import { Marquee } from "@/components/ui/marquee"

type SponsorProps = {
  name: string
  logo: string
  website: string
}

const sponsors: SponsorProps[] = [
  {
    name: "Acme Inc",
    logo: "/placeholder.svg?height=60&width=120",
    website: "#",
  },
  {
    name: "Globex",
    logo: "/placeholder.svg?height=60&width=120",
    website: "#",
  },
  {
    name: "Initech",
    logo: "/placeholder.svg?height=60&width=120",
    website: "#",
  },
  {
    name: "Umbrella Corp",
    logo: "/placeholder.svg?height=60&width=120",
    website: "#",
  },
  {
    name: "Stark Industries",
    logo: "/placeholder.svg?height=60&width=120",
    website: "#",
  },
  {
    name: "Wayne Enterprises",
    logo: "/placeholder.svg?height=60&width=120",
    website: "#",
  },
  {
    name: "Cyberdyne Systems",
    logo: "/placeholder.svg?height=60&width=120",
    website: "#",
  },
  {
    name: "Oscorp",
    logo: "/placeholder.svg?height=60&width=120",
    website: "#",
  },
]

const SponsorCard = ({ name, logo, website }: SponsorProps) => {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center h-24 w-48 mx-4 bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
    >
      <img src={logo || "/placeholder.svg"} alt={name} className="max-h-full max-w-full" />
    </a>
  )
}

export function SponsorsMarquee() {
  return (
    <div className="py-8 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Sponsors</h2>
          <p className="mt-2 text-xl font-medium text-gray-900">Trusted by leading companies around the world</p>
        </div>

        <div className="relative">
          <Marquee pauseOnHover className="[--duration:30s] py-4" fade>
            {sponsors.map((sponsor) => (
              <SponsorCard key={sponsor.name} {...sponsor} />
            ))}
          </Marquee>

          <div className="mt-6 text-center">
            <a href="/become-sponsor" className="text-indigo-600 font-medium hover:text-indigo-500">
              Become a sponsor →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

