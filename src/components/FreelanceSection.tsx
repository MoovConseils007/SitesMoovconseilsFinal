import { motion } from "framer-motion";
import { useState } from "react";
import { Users, Send, CheckCircle2, Loader2, Mail, Percent, Briefcase } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const FreelanceSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const mailtoLink = `mailto:contact@moovconseils.com?subject=${encodeURIComponent(
        `Candidature Freelance – ${name}`
      )}&body=${encodeURIComponent(
        `Nom : ${name}\nEmail : ${email}\nTéléphone : ${phone}\n\nMessage :\n${message}`
      )}`;
      window.open(mailtoLink, "_blank");
      setSubmitted(true);
    } catch {
      toast({ title: "Erreur", description: "Veuillez réessayer.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const advantages = [
    { icon: Percent, title: "Commission attractive", desc: "À partir de 10% sur chaque affaire conclue" },
    { icon: Briefcase, title: "100% Freelance", desc: "Travaillez à votre rythme, sans contrainte" },
    { icon: Users, title: "Accompagnement", desc: "Outils et support pour réussir vos missions" },
  ];

  if (submitted) {
    return (
      <section id="freelance" className="relative py-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center p-12 rounded-3xl bg-glass border-glow"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-display text-3xl font-bold mb-4">Candidature envoyée !</h3>
          <p className="text-muted-foreground text-lg">
            Merci pour votre intérêt. Notre équipe reviendra vers vous rapidement.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="freelance" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-radial-hero opacity-20" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Rejoignez-nous
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Travailler{" "}
            <span className="text-gradient">avec nous</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nous recherchons des commerciaux et apporteurs d'affaires en freelance.
            Rejoignez notre réseau et développez vos revenus avec une commission attractive.
          </p>
        </motion.div>

        {/* Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {advantages.map((adv) => (
            <div
              key={adv.title}
              className="p-6 rounded-2xl bg-glass border-glow text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                <adv.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{adv.title}</h3>
              <p className="text-sm text-muted-foreground">{adv.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl bg-glass border-glow space-y-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Contactez-nous à{" "}
              <a href="mailto:contact@moovconseils.com" className="text-primary hover:underline">
                contact@moovconseils.com
              </a>
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
              placeholder="Email *"
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
              className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors md:col-span-2"
            />
            <textarea
              placeholder="Parlez-nous de vous et de votre expérience..."
              rows={4}
              maxLength={2000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors md:col-span-2 resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-sm text-muted-foreground">
              Commission à partir de <span className="text-primary font-semibold">10%</span> • 100% Freelance
            </p>
            <button
              type="submit"
              disabled={loading}
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg glow-primary hover:opacity-90 transition-all disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              {loading ? "Envoi..." : "Postuler maintenant"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default FreelanceSection;
