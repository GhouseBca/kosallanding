import Hero from "@/components/Hero";
import Fotter from "@/components/Fotter";
import ContactSection from "@/components/ContactSection";
import LadderAcademySection from "@/components/LadderAcademySection";
import AccelerateSection from "@/components/CTACard";
import WhyChooseKosal from "@/components/WhyChooseKosal";
import OurServices from "@/components/OurServices";
import SolutionsSection from "@/components/SolutionsSection";
import AboutUsSection from "@/components/AboutUsSection";

// If you still see JSX/React type errors, ensure 'next-env.d.ts' exists in your project root. This file is required for Next.js TypeScript projects to recognize JSX types.
export default function Home() {
  return (
    
       <div>
          <Hero/>
          <AboutUsSection />
          <SolutionsSection />
          <OurServices />
          <WhyChooseKosal />
          <LadderAcademySection />
          <AccelerateSection />
          <ContactSection />
          <Fotter/>
       </div> 
  );
}
