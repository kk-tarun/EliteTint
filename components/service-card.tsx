import { Shield, Zap, Eye } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
  icon: "shield" | "zap" | "eye"
  price: string
}

export function ServiceCard({ title, description, icon, price }: ServiceCardProps) {
  const Icon = icon === "shield" ? Shield : icon === "zap" ? Zap : Eye

  return (
    <Card className="bg-[#111111] border-none shadow-lg overflow-hidden transition-all duration-300 hover:translate-y-[-5px]">
      <div className="p-1 bg-gradient-to-r from-[#9a7d2e] to-[#d4af37]" />
      <CardContent className="p-6 pt-8">
        <div className="h-12 w-12 rounded-full bg-[#9a7d2e]/10 flex items-center justify-center mb-6">
          <Icon className="h-6 w-6 text-[#9a7d2e]" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-[#e0ddd7] mb-4">{description}</p>
        <div className="text-[#9a7d2e] font-bold text-lg">{price}</div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-white text-[#0a0a0a] hover:bg-[#e0ddd7]">Learn More</Button>
      </CardFooter>
    </Card>
  )
}

