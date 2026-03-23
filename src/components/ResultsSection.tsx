import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Award } from "lucide-react";

const results = [
  {
    icon: TrendingUp,
    metric: "+400%",
    label: "ROI Marketing",
    detail: "Retour sur investissement moyen de nos campagnes",
  },
  {
    icon: Users,
    metric: "100%",
    label: "Clients Satisfaits",
    detail: "Chaque projet livré dépasse les attentes",
  },
  {
    icon: Target,
    metric: "-40%",
    label: "vs Concurrence",
    detail: "Tarifs compétitifs sans compromis sur la qualité",
  },
  {
    icon: Award,
    metric: "3x",
    label: "Plus Rapide",
    detail: "Livraison accélérée grâce à nos process optimisés",
  },
];

const ResultsSection = () => {
  return (
    <section id="results" className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 bg-radial-hero opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Résultats Prouvés
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Les chiffres{" "}
            <span className="text-gradient">parlent d'eux-mêmes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, i) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-8 rounded-2xl bg-glass border-glow"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <result.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="font-display text-5xl font-bold text-primary glow-text mb-2">
                {result.metric}
              </div>
              <div className="font-semibold text-foreground text-lg mb-2">
                {result.label}
              </div>
              <p className="text-muted-foreground text-sm">{result.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
