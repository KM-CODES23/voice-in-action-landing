import { Users, Target, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We believe that lasting change comes from grassroots movements and engaged citizens working together.",
    },
    {
      icon: Target,
      title: "Action-Oriented",
      description: "We turn conversations into concrete actions that create measurable impact in our local community.",
    },
    {
      icon: Heart,
      title: "Inclusive Advocacy",
      description: "Every voice matters. We ensure all community members have a seat at the table.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Empowering Citizens to Shape Their Future
            </h2>
            <p className="text-lg text-muted-foreground">
              Voice In Action is a nonpartisan grassroots organization dedicated to 
              increasing civic engagement and ensuring every community member has the 
              power to influence local policy and decision-making.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 150}>
              <div className="bg-card rounded-xl p-8 card-elevated h-full">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
