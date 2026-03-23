import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2, FileText, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const services = [
  "Site Vitrine",
  "Application Web",
  "Application Mobile",
  "Marketing Digital / SEO",
  "Automatisation IA",
  "Refonte de Site",
  "E-Commerce",
  "Identité Visuelle / Branding",
];

const budgets = [
  "< 2 000 €",
  "2 000 – 5 000 €",
  "5 000 – 10 000 €",
  "10 000 – 20 000 €",
  "+ 20 000 €",
];

const DevisSection = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      toast({ title: "Sélectionnez au moins un service", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("submit-devis", {
        body: { name, email, phone, company, services: selectedServices, budget, message },
      });

      if (error) throw error;
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      toast({ title: "Erreur lors de l'envoi", description: "Veuillez réessayer.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="devis" className="relative py-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center p-12 rounded-3xl bg-glass border-glow"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-display text-3xl font-bold mb-4">
            Demande envoyée !
          </h3>
          <p className="text-muted-foreground text-lg">
            Merci pour votre confiance. Notre équipe vous recontacte sous 24h
            avec une proposition personnalisée.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="devis" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-radial-hero opacity-30" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Devis Gratuit
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Obtenez votre{" "}
            <span className="text-gradient">devis complet</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            En 2 minutes, décrivez votre projet et recevez une estimation
            détaillée sous 24h. Sans engagement.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl bg-glass border-glow space-y-10"
        >
          {/* Step 1: Services */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                1
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Quels services vous intéressent ?
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {services.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => toggleService(s)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedServices.includes(s)
                      ? "bg-primary text-primary-foreground glow-primary"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Budget */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                2
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Quel est votre budget estimé ?
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {budgets.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBudget(b)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    budget === b
                      ? "bg-primary text-primary-foreground glow-primary"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Contact info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                3
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Vos coordonnées
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nom complet *"
                required
                maxLength={200}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Email professionnel *"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
              <input
                type="tel"
                placeholder="Téléphone *"
                required
                maxLength={20}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
              <input
                type="text"
                placeholder="Entreprise"
                maxLength={200}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors md:col-span-2"
              />
              <textarea
                placeholder="Décrivez brièvement votre projet..."
                rows={4}
                maxLength={2000}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors md:col-span-2 resize-none"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="w-4 h-4" />
              <span>Réponse détaillée sous 24h • Sans engagement</span>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg glow-primary hover:opacity-90 transition-all disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              {loading ? "Envoi en cours..." : "Recevoir mon devis"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default DevisSection;
