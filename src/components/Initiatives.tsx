import { Database, FileSearch, GraduationCap, Megaphone, ShieldCheck, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const Initiatives = () => {
  const initiatives = [
    {
      icon: FileSearch,
      title: "Independent Investigations",
      description:
        "We investigate reports of alleged corruption and service delivery failures, focusing on cases with the most severe impact on society.",
      action: "Report Concerns",
    },
    {
      icon: Megaphone,
      title: "Exposure",
      description:
        "We partner with mainstream and community media to ensure corruption and service delivery failures are exposed to the public.",
      action: "Speak Up",
    },
    {
      icon: Users2,
      title: "Mobilization",
      description:
        "We build campaigns that involve the public, community groups, and trade unions to stand against corruption.",
      action: "Join Campaigns",
    },
    {
      icon: GraduationCap,
      title: "Safety and Education",
      description:
        "Through the CODESA ONE model, we advocate for schools where children arrive to learn, not to survive.",
      action: "Protect Learners",
    },
    {
      icon: Database,
      title: "School Oversight Database",
      description:
        "VIA is building a data-driven response to track dropout rates, pregnancy trends, service delivery failures, safety risks, and schools in need of support.",
      action: "Track Issues",
    },
    {
      icon: ShieldCheck,
      title: "Human Rights Protection",
      description:
        "We hand investigative findings to relevant authorities, monitor case progress, and work to protect the beneficiaries of public services.",
      action: "Create Accountability",
    },
  ];

  return (
    <section id="initiatives" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              VIA turns community complaints into action through investigation,
              exposure, mobilization, education, and direct accountability.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {initiatives.map((initiative, index) => (
            <ScrollReveal key={initiative.title} delay={index * 100}>
              <div className="bg-card rounded-xl p-8 card-elevated flex flex-col h-full">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <initiative.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{initiative.title}</h3>
                    <p className="text-muted-foreground mb-4">{initiative.description}</p>
                    <Button variant="link" className="p-0 h-auto text-primary" asChild>
                      <a href="#contact">{initiative.action} -&gt;</a>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
