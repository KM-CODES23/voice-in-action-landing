import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const CTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="bg-card rounded-2xl p-8 md:p-12 card-elevated max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Make Your Voice Heard?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of engaged citizens who are shaping the future of our 
              community. Whether you have 5 minutes or 5 hours, there is a way for you to contribute.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Become a Volunteer
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                <Mail className="w-5 h-5" />
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTA;
