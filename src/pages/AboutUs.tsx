import { Heart, Scale, ShieldCheck, Target, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logo from "@/assets/logo-removebg-preview.png";

const AboutUs = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Independence",
      description: "Operating without fear or favor, free from the influence of government or private industry.",
    },
    {
      icon: Scale,
      title: "Impartiality and Fairness",
      description: "Treating all parties with equity and assessing facts strictly on evidence and the law.",
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Ensuring our services are easy to use, responsive, and communicated in plain language.",
    },
    {
      icon: Heart,
      title: "Professionalism and Accountability",
      description: "Maintaining high standards in every investigation and ensuring public resources serve the people.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center items-center">
          <ScrollReveal>
            <img src={logo} alt="Voice In Action" className="h-12 w-auto mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Voice In Action</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Independent investigations, public accountability, and community protection for Carletonville and Khutsong.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mt-4 mb-6">
                An Independent Voice for Justice and Accountability
              </h2>
              <p className="text-lg text-muted-foreground">
                Voice In Action (VIA) is a non-profit, independent organization founded in 2025 in Carletonville by the Khutsong community. VIA serves as an impartial investigator for service delivery complaints and issues affecting local residents.
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                We act as a watchdog to ensure government agencies and officials are held accountable, promoting administrative justice, fairness, and transparency.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ScrollReveal>
              <div id="mission" className="bg-card rounded-xl p-8 card-elevated h-full">
                <Target className="w-10 h-10 text-primary mb-5" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Mission</span>
                <h3 className="text-2xl font-bold text-foreground mt-3 mb-4">Accountability Without Fear or Favor</h3>
                <p className="text-muted-foreground">
                  Our mission is to resolve service delivery complaints and ensure fair treatment by providing independent, impartial, and professional investigations. We aim to promote good governance, accountability, and the protection of human rights across all communities.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div id="vision" className="bg-card rounded-xl p-8 card-elevated h-full">
                <ShieldCheck className="w-10 h-10 text-primary mb-5" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Vision</span>
                <h3 className="text-2xl font-bold text-foreground mt-3 mb-4">A Just, Transparent, and Accountable Society</h3>
                <p className="text-muted-foreground">
                  Our vision is to foster public trust, improve service delivery, and promote integrity within institutions to build a more just and accountable society.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Core Values</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">How VIA Shows Up</h2>
              <p className="text-lg text-muted-foreground">
                Voice In Action is committed to addressing issues affecting all communities, in accordance with the law, regardless of race, background, or social status.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="bg-card rounded-xl p-6 card-elevated h-full">
                  <value.icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
