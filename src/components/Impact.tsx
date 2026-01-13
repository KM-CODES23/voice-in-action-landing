const Impact = () => {
  const stats = [
    { value: "15,000+", label: "Voters Registered" },
    { value: "48", label: "Town Halls Hosted" },
    { value: "200+", label: "Active Volunteers" },
    { value: "12", label: "Policy Wins" },
  ];

  return (
    <section id="impact" className="py-24 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Impact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-4 mb-6">
            Making a Real Difference
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Together, we have achieved remarkable milestones in strengthening our 
            local democracy and empowering our community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
