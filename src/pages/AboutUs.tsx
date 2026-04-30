import { Users, Target, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import logo from "@/assets/logo-removebg-preview.png";

const AboutUs = () => {
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
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center items-center">
          <ScrollReveal>
            <img src={logo} alt="Voice In Action" className="h-12 w-auto mx-auto" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Us
            </h1>
            
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
              Voice in Action (VIA) is a non-profit, independent organization founded in 2025 in Carletonville by the Khutsong community. We investigate service delivery failures, corruption, and misconduct affecting communities—particularly where government agencies and public officials are involved.
              </p>
              <p className="text-lg text-muted-foreground">
                We act as an impartial watchdog, stepping in when internal complaint processes fail. By relying on community reports, we hold institutions and leaders accountable, promote ethical governance, and protect public interest.
              </p>


            
          </div>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Mission</span>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mt-4 mb-6">
              Our Mission: Accountability Without Fear or Favor
            </h2>
            <p className="text-lg text-muted-foreground">
              Our mission is to resolve service delivery complaints and ensure fair treatment by providing independent, impartial, and professional investigations. We aim to promote good governance, accountability, and the protection of human rights across all communities.
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Vision</span>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mt-4 mb-6">
              Our Vision: A Just, Transparent, and Accountable Society
            </h2>
            <p className="text-lg text-muted-foreground">
              Our vision is to foster public trust, improve service delivery, and promote integrity within institutions to build a more just and accountable society.
            </p>
            <p className="text-lg text-muted-foreground">
              Voice in Action is guided by the core values of impartiality, fairness, accessibility, independence, and professionalism. We are committed to addressing issues affecting all communities, in accordance with the law, regardless of race, background, or social status.
            </p>
            <p className="text-lg text-muted-foreground">
              Voice In Action strives to ensure that custodians of public resources act responsibly and in the best interests of the public. We work to reduce opportunities for corruption, hold those who engage in corrupt activities accountable, and protect the beneficiaries of public and essential services.
            </p>
          </div>
        </ScrollReveal>

       
      </div>
    </section>
    </div>
  );
};

export default AboutUs;
