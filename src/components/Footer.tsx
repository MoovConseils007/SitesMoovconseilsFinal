import moovLogo from "@/assets/moov-logo.png";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.76 1.52V6.8a4.86 4.86 0 0 1-1-.11z" />
  </svg>
);

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/moovconseils/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61582580453699", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/moov-conseils-0842133b5", label: "LinkedIn" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@moovconseils?is_from_webapp=1&sender_device=pc", label: "TikTok" },
  { icon: Twitter, href: "https://x.com/MoovConseils", label: "X (Twitter)" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display text-xl font-bold">
          <img src={moovLogo} alt="MoovConseils" className="w-7 h-7 rounded-md" />
          <span><span className="text-gradient">Moov</span><span className="text-foreground">Conseils</span></span>
        </div>

        <div className="flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Tarifs</a>
          <a href="#clients" className="hover:text-foreground transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          © 2025 MoovConseils. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
