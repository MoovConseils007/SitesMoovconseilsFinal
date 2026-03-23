import { motion } from "framer-motion";
import { Globe, Smartphone, FileText, Search, BarChart3, Building2 } from "lucide-react";

const plans = [
  {
    category: "WEB",
    icon: Globe,
    items: [
      {
        name: "Site Vitrine",
        price: "500 € à 3 000 €",
        features: ["Présence en ligne essentielle", "Design responsive", "Formulaire de contact"],
      },
      {
        name: "Site Multi-menu",
        price: "1 800 € à 5 000 €",
        features: ["Architecture complexe", "Contenu dynamique", "Optimisation SEO de base"],
      },
      {
        name: "Site Personnalisé",
        price: "À partir de 5 000 €",
        features: ["Fonctionnalités sur-mesure", "Design exclusif", "Intégrations API"],
        highlight: true,
      },
    ],
  },
  {
    category: "MOBILE",
    icon: Smartphone,
    items: [
      {
        name: "Application Mobile",
        price: "Min. 10 000 € (Sur devis)",
        features: ["iOS & Android", "Expérience native", "Notifications push"],
      },
    ],
  },
  {
    category: "CONSEIL",
    icon: FileText,
    items: [
      {
        name: "Business Plan",
        price: "Forfait : 1 500 €",
        features: ["Dossier financier complet", "Étude de marché incluse", "Format investisseur"],
      },
      {
        name: "Études Stratégiques",
        price: "À partir de 2 500 €",
        features: ["Analyse de marché", "Analyse concurrentielle", "Étude de faisabilité"],
      },
    ],
  },
  {
    category: "DIGITAL",
    icon: Search,
    items: [
      {
        name: "Logiciels & Marketing",
        price: "Sur devis",
        features: ["SEO/SEA/Ads", "Outils CRM/ERP", "Stratégie d'acquisition"],
      },
    ],
  },
  {
    category: "ENTREPRISE",
    icon: Building2,
    items: [
      {
        name: "Création & Pilotage",
        price: "Sur devis",
        features: ["Immatriculation", "Tableaux de bord", "Optimisation process"],
      },
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Tarifs
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Des offres <span className="text-gradient">transparentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des solutions adaptées à chaque budget, sans surprise. Chaque projet est unique, nos tarifs aussi.
          </p>
        </motion.div>

        <div className="space-y-12">
          {plans.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <group.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {group.category}
                </h3>
              </div>

              <div className={`grid gap-6 ${group.items.length === 1 ? "md:grid-cols-1 max-w-md" : group.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                {group.items.map((plan, pi) => (
                  <div
                    key={plan.name}
                    className={`relative p-6 rounded-2xl bg-glass border-glow flex flex-col ${plan.highlight ? "ring-2 ring-primary" : ""}`}
                  >
                    {plan.highlight && (
                      <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                        Populaire
                      </span>
                    )}
                    <h4 className="font-display font-bold text-foreground text-lg mb-2">
                      {plan.name}
                    </h4>
                    <p className="text-primary font-bold text-xl mb-4">{plan.price}</p>
                    <ul className="space-y-2 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-primary mt-0.5">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#devis"
                      className="mt-6 inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity glow-primary no-underline"
                    >
                      Demander un devis
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
