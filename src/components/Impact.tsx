import ScrollReveal from "@/components/ScrollReveal";

const Impact = () => {
  const impactAreas = [
    {
      title: "Restoring Administrative Justice",
      description:
        "VIA investigates cases where internal government complaint mechanisms have failed, acting as a last resort for residents seeking fairness.",
    },
    {
      title: "Bridging the Gap",
      description:
        "We provide an independent and impartial investigation service that is accessible to all communities, regardless of race or background.",
    },
    {
      title: "Promoting Integrity",
      description:
        "By handing investigative findings to relevant authorities, we help ensure those who act corruptly are held accountable.",
    },
    {
      title: "Systemic Improvement",
      description:
        "We identify patterns of failure in government agencies and work to resolve disputes fairly between people and organizations.",
    },
  ];

  return (
    <section id="impact" className="py-24 hero-gradient">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Impact</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-4 mb-6">
              Turning Complaints Into Solutions
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              VIA serves as a bridge between the residents of Carletonville and
              the institutions that serve them. By acting as a watchdog, we
              transform complaints into solutions and restore public trust.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactAreas.map((area, index) => (
            <ScrollReveal key={area.title} delay={index * 100}>
              <div className="h-full rounded-xl bg-primary-foreground/10 border border-primary-foreground/15 p-6">
                <div className="text-accent font-bold text-lg mb-3">
                  {area.title}
                </div>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
