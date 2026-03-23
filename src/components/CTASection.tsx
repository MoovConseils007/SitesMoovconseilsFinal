import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-radial-hero" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <div className="p-12 md:p-16 rounded-3xl bg-glass border-glow relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-glow-secondary/10 rounded-full blur-3xl animate-pulse-glow" />

          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Prêt à{" "}
              <span className="text-gradient">dominer</span>
              <br />
              votre marché ?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Discutons de votre projet. Premier audit gratuit, sans engagement.
              Votre succès digital commence ici.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="mailto:contact@moovconseils.com"
                className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg glow-primary hover:opacity-90 transition-all"
              >
                <Mail className="w-5 h-5" />
                Contactez-nous
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#booking"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-glass border-glow text-foreground font-medium text-lg hover:bg-secondary transition-colors no-underline"
              >
                <Phone className="w-5 h-5" />
                Réserver un appel
              </a>
            </div>

            <p className="text-muted-foreground text-sm">
              ✦ Audit gratuit ✦ Sans engagement ✦ Réponse sous 24h
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
