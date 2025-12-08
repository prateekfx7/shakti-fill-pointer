const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 opacity-0 animate-fade-up">
          AI-powered digital twin.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 opacity-0 animate-fade-up delay-100">
          Real-time substation health intelligence.
        </p>

        <div className="max-w-4xl mx-auto opacity-0 animate-scale-in delay-200">
          <div className="relative rounded-2xl overflow-hidden border border-border bg-card aspect-video">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
