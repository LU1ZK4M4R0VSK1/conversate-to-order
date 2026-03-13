import { motion } from "framer-motion";
import { BookOpen, Settings, Mic, BarChart3 } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Your menu or catalog", description: "AI knows every product you sell." },
  { icon: Settings, title: "Business rules", description: "Custom logic for hours, areas, and limits." },
  { icon: Mic, title: "Brand voice", description: "Replies that sound like your team." },
  { icon: BarChart3, title: "Interaction patterns", description: "Learns from real customer conversations." },
];

const DifferentialSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            A digital brain{" "}
            <span className="text-gradient">trained for your business</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            KamaTech creates natural conversations instead of robotic chatbot responses.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="flex items-start gap-4 bg-card rounded-2xl border border-border p-6 shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-1">{f.title}</h3>
                <p className="text-xs text-muted-foreground">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
