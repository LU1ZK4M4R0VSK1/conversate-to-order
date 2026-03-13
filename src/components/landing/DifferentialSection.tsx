import { motion } from "framer-motion";
import { BookOpen, Settings, Mic, BarChart3 } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Seu cardápio ou catálogo", description: "A IA conhece cada produto que você vende." },
  { icon: Settings, title: "Regras do negócio", description: "Lógica personalizada para horários, áreas e limites." },
  { icon: Mic, title: "Tom da marca", description: "Respostas que soam como sua equipe." },
  { icon: BarChart3, title: "Padrões de interação", description: "Aprende com conversas reais dos seus clientes." },
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
            Um cérebro digital{" "}
            <span className="text-gradient">treinado para o seu negócio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A KamaTech cria conversas naturais em vez de respostas robóticas de chatbot.
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
