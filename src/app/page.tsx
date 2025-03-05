import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import Brief from "@/components/Brief"
import ServicesSection from "@/components/Services"
import ProjectsSection from "@/components/Projects"
import ServicesBasedProjects from "@/components/ServicesBasedProjects"
import VisionMissionSection from "@/components/VisionMission"
import WhyUsSection from "@/components/WhyUs"
import TeamSection from "@/components/TeamSection"
import TestimonialsSection from "@/components/Testimonials"
import CeoMessage from "@/components/CeoMessage"
import ContactSection from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Brief/>
      <VisionMissionSection/>
      <CeoMessage/>
      <ServicesSection/>
      <ServicesBasedProjects/>
      <ProjectsSection />
      <TeamSection/>
      <WhyUsSection/>
      <TestimonialsSection/>
      <ContactSection/>
      <Footer/>
    </main>
  )
}

