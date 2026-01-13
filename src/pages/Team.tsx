import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const teamMembers = [
  {
    name: "Thandi Mokoena",
    role: "Executive Director",
    bio: "A passionate advocate for civic rights with over 15 years of experience in community organizing and policy reform.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Sipho Ndlovu",
    role: "Programs Manager",
    bio: "Leads our community initiatives and ensures impactful delivery of voter education programs across all regions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Nomsa Dlamini",
    role: "Communications Director",
    bio: "Shapes our public voice and manages outreach strategies to amplify community stories and campaigns.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Bongani Khumalo",
    role: "Field Coordinator",
    bio: "Connects directly with communities, organizing grassroots campaigns and volunteer networks.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Lerato Mabaso",
    role: "Policy Research Lead",
    bio: "Drives evidence-based advocacy through rigorous research and analysis of local governance issues.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Mandla Sithole",
    role: "Youth Engagement Officer",
    bio: "Inspires the next generation of civic leaders through educational workshops and mentorship programs.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Ayanda Zulu",
    role: "Volunteer Coordinator",
    bio: "Manages our incredible volunteer network and ensures every helping hand finds meaningful impact.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Themba Mahlangu",
    role: "Finance & Operations",
    bio: "Keeps our organization running smoothly while ensuring transparent and accountable financial practices.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face"
  }
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our Team
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Dedicated individuals working together to strengthen democracy and empower communities across South Africa.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 100}>
                <div className="bg-card rounded-xl overflow-hidden card-elevated group h-full">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Join Our Movement
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              We're always looking for passionate individuals who share our vision for a more engaged and empowered citizenry.
            </p>
            <a 
              href="#contact" 
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
