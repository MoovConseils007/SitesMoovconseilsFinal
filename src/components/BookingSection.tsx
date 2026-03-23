import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const BookingSection = () => {
  return (
    <section id="booking" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-radial-hero opacity-20" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Rendez-vous
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Réservez un{" "}
            <span className="text-gradient">appel gratuit</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choisissez un créneau qui vous convient. 30 minutes pour discuter de
            votre projet, sans engagement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-glass border-glow overflow-hidden"
        >
          <iframe
            src="https://cal.com/moovconseils?embed=true&theme=dark&hideEventTypeDetails=1&layout=month_view"
            className="w-full border-0"
            style={{ height: "480px", colorScheme: "dark" }}
            title="Réserver un rendez-vous avec MoovConseils"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="https://cal.com/moovconseils"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <Calendar className="w-4 h-4" />
            Ouvrir le calendrier dans un nouvel onglet
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
