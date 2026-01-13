import { Megaphone, Vote, BookOpen, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Initiatives = () => {
  const initiatives = [
    {
      icon: Vote,
      title: "Voter Registration Drives",
      description: "We run community-wide voter registration campaigns to ensure every eligible citizen can exercise their right to vote.",
      action: "Register Now",
    },
    {
      icon: Megaphone,
      title: "Town Hall Forums",
      description: "Monthly forums where community members can directly engage with local officials and voice their concerns.",
      action: "View Schedule",
    },
    {
      icon: BookOpen,
      title: "Civic Education",
      description: "Workshops and resources to help citizens understand local government processes and how to participate effectively.",
      action: "Learn More",
    },
    {
      icon: Users2,
      title: "Community Organizing",
      description: "Training and support for residents who want to lead change initiatives in their neighborhoods.",
      action: "Get Started",
    },
  ];

  return (
    <section id="initiatives" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Our Key Initiatives
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From voter registration to community organizing, we provide the tools 
            and platforms for meaningful civic participation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {initiatives.map((initiative, index) => (
            <div
              key={initiative.title}
              className="bg-card rounded-xl p-8 card-elevated flex flex-col"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <initiative.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{initiative.title}</h3>
                  <p className="text-muted-foreground mb-4">{initiative.description}</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    {initiative.action} →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
