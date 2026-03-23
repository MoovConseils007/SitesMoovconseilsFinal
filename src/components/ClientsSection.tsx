import { motion } from "framer-motion";
import { ExternalLink, UtensilsCrossed, Pill, Stethoscope, Shirt } from "lucide-react";

const clients = [
  {
    name: "La Cucina di Nini",
    category: "RESTAURATION ITALIENNE",
    icon: UtensilsCrossed,
    description:
      "Une vitrine digitale gourmande pour un restaurant italien authentique. Le site met en avant l'identité culinaire, permet la réservation de tables et présente les menus.",
    tags: ["Menu Digital", "Réservation", "Galerie Plats", "Identité Visuelle"],
    url: "https://lacucinadenini.moovconseils.com",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    name: "PharMamoov",
    category: "LIVRAISON PHARMACEUTIQUE",
    icon: Pill,
    description:
      "Plateforme complète de pharmacie en ligne. Offre la livraison la moins chère du marché et un service ultra-rapide avec paiement sécurisé.",
    tags: ["Livraison low-cost", "Livraison rapide", "Paiement sécurisé"],
    url: "https://pharmamoov.fr",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    name: "VetoExpress",
    category: "SANTÉ ANIMALE",
    icon: Stethoscope,
    description:
      'Le "Doctolib" du monde animalier. Une solution SaaS permettant aux propriétaires d\'animaux de trouver un vétérinaire, de consulter les disponibilités et de prendre rendez-vous.',
    tags: ["Prise de RDV", "Profils Vétérinaires", "Rappels Auto", "SaaS"],
    url: null,
    urlLabel: "Site en cours de construction",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "VinFlem",
    category: "MODE VINTAGE",
    icon: Shirt,
    description:
      "Plateforme simplifiant la revente de vêtements vintage. Des collecteurs professionnels viennent à domicile récupérer les articles.",
    tags: ["Revente Vintage", "Collecte Domicile", "Photos Pro", "Tarif 2€/art"],
    url: "https://vinflem.com",
    color: "from-purple-500/20 to-pink-500/20",
  },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Nos <span className="text-gradient">réalisations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des projets concrets qui démontrent notre expertise. Chaque client est unique, chaque solution aussi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl bg-glass border-glow overflow-hidden"
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${client.color}`} />

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <client.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {client.name}
                      </h3>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {client.category}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {client.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {client.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {client.url ? (
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:opacity-80 transition-opacity"
                  >
                    Voir le site <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-muted-foreground text-sm italic">
                    {client.urlLabel}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
