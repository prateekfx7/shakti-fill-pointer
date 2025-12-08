const CTA = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-0 animate-fade-up">
          Experience real-time grid intelligence.
        </h2>
        <p className="text-muted-foreground mb-8 opacity-0 animate-fade-up delay-100">
          Transform your substation
          <br />
          operations—see SHAKTI in
          <br />
          action today.
        </p>
        <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background transition-all duration-300 opacity-0 animate-fade-up delay-200">
          Book a Demo
        </button>
      </div>
    </section>
  );
};

export default CTA;
