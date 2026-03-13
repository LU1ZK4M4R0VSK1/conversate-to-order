import { motion } from "framer-motion";
import { MessageCircle, Brain, ClipboardList, CheckCircle } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Cliente envia mensagem", description: "Uma mensagem chega no WhatsApp normalmente." },
  { icon: Brain, title: "IA entende o pedido", description: "Nossa IA interpreta a intenção, itens e contexto." },
  { icon: ClipboardList, title: "Sistema extrai os detalhes", description: "Itens, endereço e pagamento são estruturados." },
  { icon: CheckCircle, title: "Equipe recebe pedido organizado", description: "Sua equipe recebe um pedido limpo e pronto." },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">Como funciona</h2>
          <p className="text-muted-foreground text-lg">Quatro passos simples. Zero trabalho manual.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="relative bg-card rounded-2xl border border-border p-6 text-center shadow-card hover:shadow-elevated transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="absolute -top-3 left-6 bg-primary text-primary-foreground w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold">
                {i + 1}
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-2">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-sm">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
