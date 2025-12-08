import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Features from "@/components/Features";
import ProblemStatement from "@/components/ProblemStatement";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <ProblemStatement />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
