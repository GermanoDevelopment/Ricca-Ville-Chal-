import { Header } from "@/components/organisms/header"
import { HeroSection } from "@/components/organisms/hero-section"
import { AboutSection } from "@/components/organisms/about-section"
import { AccommodationsSection } from "@/components/organisms/accommodations-section"
import { LeisureAreaSection } from "@/components/organisms/leisure-area-section"
import { CapacityRulesSection } from "@/components/organisms/capacity-rules-section"
import { ImportantInfoSection } from "@/components/organisms/important-info-section"
import { TestimonialsSection } from "@/components/organisms/testimonials-section"
import { GallerySection } from "@/components/organisms/gallery-section"
import { LocationSection } from "@/components/organisms/location-section"
import { ContactSection } from "@/components/organisms/contact-section"
import { Footer } from "@/components/organisms/footer"
import { FloatingContact } from "@/components/molecules/floating-contact"
import { ScrollToTop } from "@/components/molecules/scroll-to-top"

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AccommodationsSection />
        <LeisureAreaSection />
        <CapacityRulesSection />
        <ImportantInfoSection />
        <TestimonialsSection />
        <GallerySection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContact />
      <ScrollToTop />
    </div>
  )
}
