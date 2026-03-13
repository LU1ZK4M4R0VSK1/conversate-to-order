import { motion } from "framer-motion";
import { Clock, ShieldCheck, Zap, Heart, MessageSquare, Users } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Respostas automáticas 24/7", description: "Nunca perca um cliente, mesmo às 3 da manhã." },
  { icon: ShieldCheck, title: "Nenhum pedido perdido", description: "Toda mensagem vira um pedido rastreado." },
  { icon: Zap, title: "Atendimento mais rápido", description: "Respostas e processamento instantâneos." },
  { icon: Heart, title: "Menos estresse operacional", description: "Sua equipe foca no que realmente importa." },
  { icon: MessageSquare, title: "Respostas instantâneas", description: "Clientes recebem confirmação na hora." },
  { icon: Users, title: "Equipe focada na produção", description: "Menos tempo no chat, mais tempo produzindo." },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Benefícios que impactam seu faturamento
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
