import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Shader Animation Background */}
      <ShaderAnimation />

      <div className="flex flex-col items-center justify-center gap-y-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center gap-y-4 bg-background/0 px-4">
          {/* Spark badge */}
          <button className="group relative grid overflow-hidden rounded-full px-2 py-1 shadow-[0_1000px_0_0_hsl(0_0%_15%)_inset] transition-colors duration-200 mx-auto opacity-0 animate-fade-up">
            <span>
              <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-[1px] rounded-full bg-background transition-colors duration-200 group-hover:bg-muted" />
            <span className="z-10 py-0.5 text-sm text-foreground flex items-center">
              <span className="px-2 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-muted-foreground text-[9px] font-medium mr-2 text-primary-foreground">
                NEW
              </span>
              Discover what's trending now
            </span>
          </button>

          {/* Main heading with blur effect */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center !leading-tight max-w-4xl mx-auto opacity-0 animate-fade-up delay-100">
            <span className="animate-text-blur-in">AI-powered</span>{" "}
            <span className="animate-text-blur-in" style={{ animationDelay: "100ms" }}>
              digital twin
            </span>{" "}
            <span className="animate-text-blur-in" style={{ animationDelay: "200ms" }}>
              for
            </span>{" "}
            <span className="animate-text-blur-in" style={{ animationDelay: "300ms" }}>
              substations
            </span>
          </h1>

          <p className="max-w-xl mx-auto mt-2 text-base lg:text-lg text-center text-muted-foreground opacity-0 animate-fade-up delay-200">
            Real-time substation health intelligence. Transform your grid operations with predictive maintenance and actionable analytics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center mt-8 gap-5 z-20 opacity-0 animate-fade-up delay-300">
  <a href="https://ai-project-engine.vercel.app/" className="flex items-center gap-2 group">
    <InteractiveHoverButton 
      text="Dashboard" 
      className="w-40 h-12 text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300" 
    />
  </a>

  <a href="#features" className="flex items-center gap-2 group">
    <Button 
      size="lg" 
      variant="outline" 
      className="rounded-full h-12 px-6 text-base border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300"
    >
      Explore Features
      <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform duration-300" />
    </Button>
  </a>
</div>


          {/* Hero Video */}
          <div className="relative rounded-xl lg:rounded-[32px] border border-border p-2 backdrop-blur-lg mt-10 max-w-4xl mx-auto opacity-0 animate-scale-in delay-400">
            <div className="absolute top-1/8 left-1/2 -z-10 bg-gradient-to-r from-primary/30 to-muted-foreground/30 w-1/2 lg:w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[4rem] lg:blur-[10rem] animate-image-glow"></div>
            <div className="hidden lg:block absolute -top-1/8 left-1/2 -z-20 bg-primary/40 w-1/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem] animate-image-glow"></div>

            <div className="rounded-lg lg:rounded-[22px] border border-border bg-card overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover aspect-video"
              >
                <source src="/videos/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Gradient overlay */}
          <div className="bg-gradient-to-t from-background to-transparent absolute bottom-0 inset-x-0 w-full h-1/2 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
