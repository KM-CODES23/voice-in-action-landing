import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Handshake, HeartHandshake, Users } from "lucide-react";
import Teammembers from "@/assets/team.png";
const groups = [
  {
    icon: Users,
    title: "Founder, Board and Committee Members",
    description:
      "VIA is led by community-minded people committed to justice, accountability, and the protection of residents' rights.",
  },
  {
    icon: HeartHandshake,
    title: "Volunteers",
    description:
      "Volunteers go through applications, interviews, training, certification, monthly meetings, and continuing education.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description:
      "The presentation identifies SECTION27 as a partner in the work of protecting education, rights, and accountability.",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Founder, Board and Committee Members</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              VIA is built through leadership, partnerships, and trained volunteers who stand with communities against corruption and failed service delivery.
            </p>
          </ScrollReveal>
        </div>
      </section>
<section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <img src={Teammembers} alt="VIA Team" className="rounded-lg shadow-lg mx-auto" />
          </ScrollReveal>
        </div>
</section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {groups.map((group, index) => (
              <ScrollReveal key={group.title} delay={index * 100}>
                <div className="bg-card rounded-xl p-8 card-elevated h-full">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <group.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-3">{group.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{group.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-foreground mb-4">The One Ruler Law</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
              VIA believes real change starts at the roots: parents take responsibility, communities reject criminals instead of glorifying them, institutions become active again, elders correct and teach the youth, and values of discipline and self-worth are restored.
            </p>
            <a
              href="mailto:info.voiceinaction@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
