import { Eye, Target, Heart, ArrowRight, Link } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "./ui/button";
import AboutUs from "../pages/AboutUs";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Eye,
      title: "OUR VISION",
      description: "Our vision is to foster public trust, improve service delivery, and promote integrity within institutions to build a more just and accountable society.",
    },
    {
      icon: Target,
      title: "OUR MISSION",
      description: "Our mission is to resolve service delivery complaints and ensure fair treatment by providing independent, impartial, and professional investigations. We aim to promote good governance, accountability, and the protection of human rights across all communities.",
    },
    {
      icon: Heart,
      title: "OUR VALUES",
      description: "Voice in Action is guided by the core values of impartiality, fairness, accessibility, independence, and professionalism. We are committed to addressing issues affecting all communities, in accordance with the law, regardless of race, background, or social status.",
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
              Voice in action is an independent office who investigates complaints against organizations, typically government agencies, public bodies or specific private industries to promote fairness, accountability, framework and administrative justice. 

              </p>
              <p className="text-lg text-muted-foreground">
                We act as an impartial watchdog, stepping in when internal complaint processes fail. By relying on community reports, we hold institutions and leaders accountable, promote ethical governance, and protect public interest.
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
