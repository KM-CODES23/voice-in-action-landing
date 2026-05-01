import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "How We Work", href: "#initiatives" },
    { label: "Our Impact", href: "#impact" },
    { label: "Get Involved", href: "#contact" },
  ];

  const resources = [
    { label: "Service Delivery Complaints", href: "#initiatives" },
    { label: "Anti-Corruption Action", href: "#impact" },
    { label: "CODESA ONE Model", href: "#initiatives" },
    { label: "School Safety Oversight", href: "#initiatives" },
  ];

  return (
    <footer id="contact" className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="mb-4">
              <img src={logo} alt="Voice In Action" className="h-16 w-auto bg-white rounded-lg p-2" />
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Speak up. Act now. Stop corruption.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Focus Areas</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>U10 Congo Hostel,<br />Sompane Rd, Khutsong,<br />Carletonville, South Africa</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 shrink-0" />
                <span>Phone/WhatsApp</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:info.voiceinaction@gmail.com" className="hover:text-primary-foreground transition-colors">
                  info.voiceinaction@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            (c) {new Date().getFullYear()} Voice In Action. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            made by KM-CODES
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Operating hours: Monday - Friday, 08:00 AM - 04:30 PM
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
