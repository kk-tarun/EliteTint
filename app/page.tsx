import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AppointmentForm } from "@/components/appointment-form";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f7f5]">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f7f5]/90 backdrop-blur-sm border-b border-[#e0ddd7]">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-[#0a0a0a]">
              ELITE TINT
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#about"
              className="text-sm font-medium text-[#0a0a0a] hover:text-[#9a7d2e] transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-[#0a0a0a] hover:text-[#9a7d2e] transition-colors"
            >
              Services
            </Link>
            <Link
              href="#benefits"
              className="text-sm font-medium text-[#0a0a0a] hover:text-[#9a7d2e] transition-colors"
            >
              Benefits
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-[#0a0a0a] hover:text-[#9a7d2e] transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-[#0a0a0a] hover:text-[#9a7d2e] transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Link href="/#appointment">
            <Button className="bg-[#9a7d2e] text-white hover:bg-[#7a6324]">
              Book Now
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center min-h-screen bg-[#f8f7f5] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Luxury tinted car"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 to-[#0a0a0a]/60" />
          </div>
          <div className="container relative z-10 px-4 md:px-6 flex flex-col items-start max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
              Premium Car Tinting{" "}
              <span className="text-[#9a7d2e]">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-[#e0ddd7] mb-8 max-w-2xl">
              Elevate your driving experience with our premium window tinting
              solutions. Exceptional quality, superior protection, and unmatched
              elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#appointment">
                <Button className="bg-[#9a7d2e] text-white hover:bg-[#7a6324] px-8 py-6 text-lg">
                  Book Your Appointment
                </Button>
              </Link>
              <Link href="/#services">
                <Button
                  variant="outline"
                  className="border-white text-white hover:text-[#fff] px-8 py-6 text-lg"
                  style={{ background: "transparent" }}
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="flex items-center justify-center min-h-screen bg-[#f8f7f5] py-20"
        >
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 text-sm font-medium text-[#9a7d2e] bg-[#9a7d2e]/10 rounded-full">
                  About Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a0a0a]">
                  Crafting Excellence in{" "}
                  <span className="text-[#9a7d2e]">Automotive Tinting</span>
                </h2>
                <p className="text-[#333333] text-lg">
                  With over a decade of experience, Elite Tint has established
                  itself as the premier destination for automotive window
                  tinting. We combine cutting-edge technology with meticulous
                  craftsmanship to deliver results that exceed expectations.
                </p>
                <p className="text-[#333333] text-lg">
                  Our commitment to quality is unwavering. We use only the
                  finest materials, ensuring durability, UV protection, and a
                  flawless finish that enhances both the aesthetics and
                  functionality of your vehicle.
                </p>
                <div className="pt-4">
                  <Button className="bg-[#0a0a0a] text-white hover:bg-[#333333]">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Tinting professional at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="flex items-center justify-center min-h-screen bg-[#0a0a0a] py-20"
        >
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 text-sm font-medium text-[#9a7d2e] bg-[#9a7d2e]/10 rounded-full mb-4">
                Our Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">
                Premium Tinting{" "}
                <span className="text-[#9a7d2e]">Solutions</span>
              </h2>
              <p className="text-[#e0ddd7] text-lg max-w-2xl mx-auto">
                We offer a comprehensive range of high-quality tinting services
                tailored to your specific needs and preferences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Ceramic Tint"
                description="Superior heat rejection and clarity with no signal interference. Our premium option for maximum performance."
                icon="shield"
                price="From $349"
              />
              <ServiceCard
                title="Carbon Tint"
                description="Excellent heat rejection with a rich, matte black finish. Perfect balance of performance and value."
                icon="zap"
                price="From $249"
              />
              <ServiceCard
                title="Dyed Tint"
                description="Affordable privacy solution with a classic look. Great for those primarily seeking style and basic UV protection."
                icon="eye"
                price="From $199"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id="benefits"
          className="flex items-center justify-center min-h-screen bg-[#f8f7f5] py-20"
        >
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 text-sm font-medium text-[#9a7d2e] bg-[#9a7d2e]/10 rounded-full mb-4">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a0a0a] mb-4">
                The <span className="text-[#9a7d2e]">Benefits</span> of
                Professional Tinting
              </h2>
              <p className="text-[#333333] text-lg max-w-2xl mx-auto">
                Window tinting is more than just aesthetics. Discover the many
                advantages our premium tinting solutions offer.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white border-none shadow-md">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-[#9a7d2e]/10 flex items-center justify-center mb-4">
                    <svg
                      className="h-6 w-6 text-[#9a7d2e]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">
                    UV Protection
                  </h3>
                  <p className="text-[#333333]">
                    Blocks up to 99% of harmful UV rays, protecting your skin
                    and interior from sun damage.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-md">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-[#9a7d2e]/10 flex items-center justify-center mb-4">
                    <svg
                      className="h-6 w-6 text-[#9a7d2e]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">
                    Heat Reduction
                  </h3>
                  <p className="text-[#333333]">
                    Significantly reduces interior heat, improving comfort and
                    reducing air conditioning costs.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-md">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-[#9a7d2e]/10 flex items-center justify-center mb-4">
                    <svg
                      className="h-6 w-6 text-[#9a7d2e]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">
                    Privacy & Security
                  </h3>
                  <p className="text-[#333333]">
                    Enhances privacy while deterring theft by limiting
                    visibility into your vehicle.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-md">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-[#9a7d2e]/10 flex items-center justify-center mb-4">
                    <svg
                      className="h-6 w-6 text-[#9a7d2e]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">
                    Glare Reduction
                  </h3>
                  <p className="text-[#333333]">
                    Minimizes harsh sunlight and headlight glare, improving
                    visibility and driving safety.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Appointment Form Section */}
        <section
          id="appointment"
          className="flex items-center justify-center min-h-screen bg-[#0a0a0a] py-20"
        >
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 text-sm font-medium text-[#9a7d2e] bg-[#9a7d2e]/10 rounded-full">
                  Book Your Service
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
                  Ready to <span className="text-[#9a7d2e]">Transform</span>{" "}
                  Your Vehicle?
                </h2>
                <p className="text-[#e0ddd7] text-lg">
                  Schedule your appointment today and experience the difference
                  of professional window tinting. Our expert technicians are
                  ready to provide you with exceptional service and results.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#9a7d2e]/10 flex items-center justify-center">
                      <svg
                        className="h-5 w-5 text-[#9a7d2e]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white">Lifetime Warranty</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#9a7d2e]/10 flex items-center justify-center">
                      <svg
                        className="h-5 w-5 text-[#9a7d2e]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white">Same-Day Service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#9a7d2e]/10 flex items-center justify-center">
                      <svg
                        className="h-5 w-5 text-[#9a7d2e]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white">Certified Technicians</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#9a7d2e]/10 flex items-center justify-center">
                      <svg
                        className="h-5 w-5 text-[#9a7d2e]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white">Premium Materials</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <AppointmentForm />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="flex items-center justify-center min-h-screen bg-[#f8f7f5] py-20"
        >
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 text-sm font-medium text-[#9a7d2e] bg-[#9a7d2e]/10 rounded-full mb-4">
                Testimonials
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a0a0a] mb-4">
                What Our <span className="text-[#9a7d2e]">Clients</span> Say
              </h2>
              <p className="text-[#333333] text-lg max-w-2xl mx-auto">
                Don't just take our word for it. Hear from our satisfied
                customers about their experience with Elite Tint.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                name="Michael Thompson"
                vehicle="Tesla Model 3"
                quote="The ceramic tint has made a huge difference in keeping my Tesla cool during summer. The installation was flawless and the service was exceptional."
                rating={5}
              />
              <TestimonialCard
                name="Sarah Johnson"
                vehicle="BMW X5"
                quote="I'm extremely pleased with the quality of work. The tint looks perfect and the heat reduction is noticeable. Highly recommend their premium service."
                rating={5}
              />
              <TestimonialCard
                name="David Martinez"
                vehicle="Audi Q7"
                quote="Professional service from start to finish. The team was knowledgeable and helped me choose the right tint for my needs. Couldn't be happier with the results."
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="flex items-center justify-center min-h-screen bg-[#0a0a0a] py-20"
        >
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 text-sm font-medium text-[#9a7d2e] bg-[#9a7d2e]/10 rounded-full">
                  Get In Touch
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
                  Visit Our <span className="text-[#9a7d2e]">Studio</span>
                </h2>
                <p className="text-[#e0ddd7] text-lg">
                  We're conveniently located in the heart of the city. Drop by
                  for a consultation or contact us to learn more about our
                  services.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-[#9a7d2e]" />
                    <span className="text-white">
                      123 Luxury Drive, Suite 100, Metropolis, CA 90210
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#9a7d2e]" />
                    <span className="text-white">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#9a7d2e]" />
                    <span className="text-white">info@elitetint.com</span>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Business Hours
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-[#e0ddd7]">
                    <div>Monday - Friday</div>
                    <div>9:00 AM - 6:00 PM</div>
                    <div>Saturday</div>
                    <div>10:00 AM - 4:00 PM</div>
                    <div>Sunday</div>
                    <div>Closed</div>
                  </div>
                </div>
              </div>
              <div className="h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                <iframe
                  src="about:blank"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="bg-gray-200"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#333333] py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">ELITE TINT</h3>
              <p className="text-[#e0ddd7]">
                Premium automotive window tinting services for discerning
                clients who demand excellence.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="text-[#e0ddd7] hover:text-[#9a7d2e] transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-[#e0ddd7] hover:text-[#9a7d2e] transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#benefits"
                    className="text-[#e0ddd7] hover:text-[#9a7d2e] transition-colors"
                  >
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-[#e0ddd7] hover:text-[#9a7d2e] transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-[#e0ddd7] hover:text-[#9a7d2e] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[#e0ddd7] hover:text-[#9a7d2e] transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-[#e0ddd7] hover:text-[#9a7d2e] transition-colors"
                  >
                    Warranty Information
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Connect</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-[#e0ddd7] hover:text-[#9a7d2e] transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-[#e0ddd7] hover:text-[#9a7d2e] transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858-.182-.466-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-[#e0ddd7] hover:text-[#9a7d2e] transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-[#333333] mt-8 pt-8 text-center">
            <p className="text-sm text-[#e0ddd7]">
              &copy; {new Date().getFullYear()} Elite Tint. All rights reserved.
              Professional window tinting services.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
