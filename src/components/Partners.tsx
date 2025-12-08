import { Square, Circle, Triangle } from "lucide-react";

const partners = [
  { name: "PowerGen", icon: Square },
  { name: "GridSync", icon: Circle },
  { name: "UtilTech", icon: Triangle },
  { name: "SmartSub", icon: Square },
];

const Partners = () => {
  return (
    <section id="partners" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="flex items-center gap-3 text-muted-foreground opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <partner.icon className="h-4 w-4" />
              <span className="text-sm font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
