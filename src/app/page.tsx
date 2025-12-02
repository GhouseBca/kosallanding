import Hero from "@/components/Hero";
import AboutUsSection from "@/components/AboutUsSection";
import SolutionsSection from "@/components/SolutionsSection";
import OurServices from "@/components/OurServices";
import WhyChooseKosal from "@/components/WhyChooseKosal";
import LadderAcademySection from "@/components/LadderAcademySection";
import AccelerateSection from "@/components/CTACard";
import ContactSection from "@/components/ContactSection";
import Fotter from "@/components/Fotter";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUsSection />
      <SolutionsSection />
      <OurServices />
      <WhyChooseKosal />
      <LadderAcademySection />
      <AccelerateSection />
      <ContactSection />
      <Fotter />
      <div className="hidden lg:block">
        <SmoothCursor />
      </div>
    </>
  );
}