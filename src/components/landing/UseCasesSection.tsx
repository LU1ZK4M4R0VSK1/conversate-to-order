import { motion } from "framer-motion";
import { UtensilsCrossed, Truck, Store, Stethoscope, Scissors, Wrench } from "lucide-react";

const cases = [
  { icon: UtensilsCrossed, title: "Restaurants" },
  { icon: Truck, title: "Delivery businesses" },
  { icon: Store, title: "Local stores" },
  { icon: Stethoscope, title: "Clinics" },
  { icon: Scissors, title: "Beauty salons" },
  { icon: Wrench, title: "Service providers" },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Built for businesses that sell via WhatsApp
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              className="bg-card rounded-2xl border border-border p-5 text-center shadow-card hover:shadow-elevated hover:border-primary/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <c.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-semibold text-foreground">{c.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
