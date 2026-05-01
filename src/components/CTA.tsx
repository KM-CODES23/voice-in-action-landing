import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const CTA = () => {
  const steps = ["Professional application and interview process", "Training on residents' rights and complaint resolution", "Monthly meetings and continuing education"];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="bg-card rounded-2xl p-8 md:p-12 card-elevated max-w-4xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get Involved</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              Volunteer or Support VIA
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              VIA is looking for dedicated individuals with a passion for
              justice and community rights. Volunteers visit residents, listen
              to concerns, and help resolve local issues with ongoing support.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8 text-left">
              {steps.map((step) => (
                <div key={step} className="rounded-xl bg-secondary p-4 text-sm text-muted-foreground">
                  {step}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="mailto:info.voiceinaction@gmail.com">
                  Volunteer With VIA
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="mailto:info.voiceinaction@gmail.com">
                  <Mail className="w-5 h-5" />
                  Email VIA
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTA;
