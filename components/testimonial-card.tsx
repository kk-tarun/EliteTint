import { Star, StarHalf } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  vehicle: string
  quote: string
  rating: number
}

export function TestimonialCard({ name, vehicle, quote, rating }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-5 w-5 fill-[#9a7d2e] text-[#9a7d2e]" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-5 w-5 fill-[#9a7d2e] text-[#9a7d2e]" />)
    }

    return stars
  }

  return (
    <Card className="bg-white border-none shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex mb-4">{renderStars(rating)}</div>
        <p className="text-[#333333] mb-6 italic">"{quote}"</p>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[#9a7d2e]/20 flex items-center justify-center text-[#9a7d2e] font-bold">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-[#0a0a0a]">{name}</p>
            <p className="text-sm text-[#666666]">{vehicle}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

