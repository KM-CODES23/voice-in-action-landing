import { ArrowRight, Eye, Heart, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "./ui/button";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Eye,
      title: "OUR VISION",
      description:
        "To foster public trust, improve service delivery, and promote integrity within institutions so we can build a more just and accountable society.",
    },
    {
      icon: Target,
      title: "OUR MISSION",
      description:
        "To resolve service delivery complaints and ensure fair treatment through independent, impartial, and professional investigations.",
    },
    {
      icon: Heart,
      title: "OUR VALUES",
      description:
        "VIA is guided by impartiality, fairness, accessibility, independence, professionalism, and accountability in every investigation and community interaction.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mt-4 mb-6">
              An Independent Voice for Justice and Accountability
            </h2>
            <p className="text-lg text-muted-foreground">
              Voice In Action (VIA) is a non-profit, independent organization
              founded in 2025 in Carletonville by the Khutsong community. VIA
              serves as an impartial investigator for service delivery
              complaints and issues affecting local residents.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              We act as a watchdog to ensure government agencies and officials
              are held accountable, promoting administrative justice, fairness,
              and transparency.
            </p>

            <Button variant="link" size="xl" asChild>
              <RouterLink to="/about-us" className="flex items-center gap-2">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </RouterLink>
            </Button>
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
