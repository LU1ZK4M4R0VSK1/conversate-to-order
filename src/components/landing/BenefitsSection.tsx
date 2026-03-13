import { motion } from "framer-motion";
import { Clock, ShieldCheck, Zap, Heart, MessageSquare, Users } from "lucide-react";

const benefits = [
  { icon: Clock, title: "24/7 automatic responses", description: "Never miss a customer, even at 3 AM." },
  { icon: ShieldCheck, title: "No lost orders", description: "Every message becomes a tracked order." },
  { icon: Zap, title: "Faster service", description: "Instant replies and order processing." },
  { icon: Heart, title: "Less operational stress", description: "Your team focuses on what matters." },
  { icon: MessageSquare, title: "Instant customer replies", description: "Customers get acknowledged right away." },
  { icon: Users, title: "Team focuses on production", description: "Less time chatting, more time creating." },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Benefits that impact your bottom line
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-elevated transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <b.icon className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground text-sm mb-1">{b.title}</h3>
              <p className="text-xs text-muted-foreground">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
