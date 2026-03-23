import { motion } from "framer-motion";
import { Zap, BarChart3, Code2, Bot, Palette, Shield, Briefcase, GraduationCap } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Marketing 3.0",
    description:
      "Stratégies data-driven, SEO avancé, publicité programmatique et growth hacking pour maximiser votre acquisition.",
  },
  {
    icon: Code2,
    title: "Développement sur-mesure",
    description:
      "Applications web et mobiles taillées pour vos besoins. Stack moderne, performances optimales, scalabilité garantie.",
  },
  {
    icon: Bot,
    title: "Automatisation IA",
    description:
      "Chatbots, workflows automatisés, analyse prédictive. L'intelligence artificielle au service de votre productivité.",
  },
  {
    icon: Palette,
    title: "Design & UX",
    description:
      "Interfaces qui convertissent. Chaque pixel est pensé pour guider vos utilisateurs vers l'action.",
  },
  {
    icon: Zap,
    title: "Performance digitale",
    description:
      "Audit, optimisation et monitoring continu. Vos plateformes tournent à pleine puissance, toujours.",
  },
  {
    icon: Shield,
    title: "Conseil stratégique",
    description:
      "Accompagnement de A à Z dans votre transformation numérique. Roadmap, formation, pilotage de projets.",
  },
  {
    icon: Briefcase,
    title: "Création d'entreprise",
    description:
      "De l'idée au lancement : business plan, formalités juridiques, identité de marque et présence digitale. On vous accompagne de A à Z.",
  },
  {
    icon: GraduationCap,
    title: "Formation & Coaching",
    description:
      "Montée en compétences de vos équipes sur les outils digitaux, l'IA et le marketing. Sessions personnalisées et suivi continu.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Nos Expertises
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Des solutions qui{" "}
            <span className="text-gradient">font la différence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un écosystème complet de services digitaux pour propulser votre entreprise au sommet.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group relative p-8 rounded-2xl bg-glass border-glow hover:border-primary/50 transition-all duration-500 cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:glow-primary transition-all duration-500">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
