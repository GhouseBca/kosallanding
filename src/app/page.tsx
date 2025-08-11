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
import { MeshGradientComponent } from "@/components/mesh-gradient";

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
          <SmoothCursor />
       </div> 
  );
}
