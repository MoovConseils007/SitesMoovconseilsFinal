import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const advantages = [
  {
    title: "Technologies de pointe",
    description:
      "React, IA, Cloud, automatisation — nous utilisons les mêmes outils que les géants de la tech pour des résultats exceptionnels.",
  },
  {
    title: "Tarifs imbattables",
    description:
      "Jusqu'à 40% moins cher que la concurrence française, sans jamais sacrifier la qualité. Plus de budget pour votre croissance.",
  },
  {
    title: "Accompagnement 360°",
    description:
      "De la stratégie à l'exécution, un interlocuteur unique qui pilote votre projet de bout en bout.",
  },
  {
    title: "Résultats mesurables",
    description:
      "Chaque action est traquée, chaque euro investi est optimisé. Dashboards temps réel et reporting transparent.",
  },
  {
    title: "Agilité & Réactivité",
    description:
      "Structure légère = décisions rapides. Nous nous adaptons à vos besoins, pas l'inverse.",
  },
  {
    title: "Expertise multiculturelle",
    description:
      "Une équipe internationale qui comprend les marchés francophones et au-delà. Perspectives uniques, résultats globaux.",
  },
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Pourquoi Nous Choisir
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Votre avantage{" "}
              <span className="text-gradient">concurrentiel</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              MoovConseils n'est pas une agence comme les autres. Nous combinons
              l'expertise technique de pointe avec une approche business pragmatique
              pour des résultats qui dépassent vos objectifs.
            </p>
            <a
              href="#devis"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold glow-primary hover:opacity-90 transition-opacity no-underline"
            >
              Parlons de votre projet
            </a>
          </motion.div>

          {/* Right - Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl bg-glass border-glow"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-2 text-sm">
                  {adv.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {adv.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
