"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export function AppointmentForm() {
  const [date, setDate] = useState<Date>()
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-xl font-bold text-[#0a0a0a]">Book Your Appointment</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="John Doe" required className="border-[#e0ddd7]" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="(555) 123-4567" required className="border-[#e0ddd7]" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" placeholder="john@example.com" required className="border-[#e0ddd7]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="vehicle">Vehicle Make & Model</Label>
          <Input id="vehicle" placeholder="Tesla Model 3" required className="border-[#e0ddd7]" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="year">Vehicle Year</Label>
          <Input id="year" placeholder="2023" required className="border-[#e0ddd7]" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service Type</Label>
        <Select>
          <SelectTrigger className="border-[#e0ddd7]">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ceramic">Ceramic Tint</SelectItem>
            <SelectItem value="carbon">Carbon Tint</SelectItem>
            <SelectItem value="dyed">Dyed Tint</SelectItem>
            <SelectItem value="consultation">Consultation Only</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Preferred Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal border-[#e0ddd7]",
                !date && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Select a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Special Requests</Label>
        <Textarea
          id="message"
          placeholder="Any special requests or questions?"
          className="min-h-[100px] border-[#e0ddd7]"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-[#9a7d2e] hover:bg-[#7a6324] text-white"
        disabled={formStatus === "submitting"}
      >
        {formStatus === "submitting"
          ? "Submitting..."
          : formStatus === "success"
            ? "Appointment Requested!"
            : "Request Appointment"}
      </Button>

      {formStatus === "success" && (
        <p className="text-sm text-green-600 text-center">
          Thank you! We'll contact you shortly to confirm your appointment.
        </p>
      )}

      {formStatus === "error" && (
        <p className="text-sm text-red-600 text-center">
          There was an error submitting your request. Please try again.
        </p>
      )}

      <p className="text-xs text-center text-[#666666]">
        By submitting this form, you agree to our{" "}
        <a href="#" className="text-[#9a7d2e] hover:underline">
          Terms & Conditions
        </a>{" "}
        and{" "}
        <a href="#" className="text-[#9a7d2e] hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  )
}

