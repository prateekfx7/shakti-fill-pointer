import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="w-full py-16 lg:py-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-muted rounded-xl p-6 lg:p-14 gap-8 items-center opacity-0 animate-fade-up">
          <div>
            <Badge>Get started</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-semibold">
              Experience real-time grid intelligence
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              Transform your substation operations—see SHAKTI in action today.
              Get predictive maintenance and actionable analytics for your grid.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="gap-4" variant="outline" size="lg">
              Contact Us <PhoneCall className="w-4 h-4" />
            </Button>
            <Button className="gap-4" size="lg">
              Say hello<MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
