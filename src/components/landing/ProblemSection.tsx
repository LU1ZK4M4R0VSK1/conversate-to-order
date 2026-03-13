import { motion } from "framer-motion";
import { AlertTriangle, Clock, MessageSquareX } from "lucide-react";

const problems = [
  {
    icon: MessageSquareX,
    title: "Pedidos perdidos",
    description: "Muitas mensagens chegam ao mesmo tempo e pedidos se perdem no meio.",
    chat: [
      { from: "customer", text: "Quero 2 pizzas por favor" },
      { from: "customer", text: "Oi?? Tem alguém aí?" },
      { from: "customer", text: "Deixa pra lá, vou pedir em outro lugar" },
    ],
  },
  {
    icon: Clock,
    title: "Respostas lentas",
    description: "Clientes desistem quando não recebem resposta rápida.",
    chat: [
      { from: "customer", text: "Oi, vocês entregam no centro?" },
      { from: "business", text: "Desculpa a demora! Sim, entregamos." },
      { from: "customer", text: "Já pedi em outro lugar 😕" },
    ],
  },
  {
    icon: AlertTriangle,
    title: "Mensagens confusas",
    description: "Conversas sem estrutura exigem organização manual toda vez.",
    chat: [
      { from: "customer", text: "o de sempre mas sem cebola e com batata e o suco de da outra vez" },
      { from: "business", text: "Qual suco? E o de sempre é o de frango ou carne?" },
    ],
  },
];

const ProblemSection = () => {
  return (
    <section id="problema" className="py-24 bg-background">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            O caos de vender pelo WhatsApp
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Parece familiar? Esses problemas custam receita real todos os dias.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              className="bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-elevated transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <problem.icon className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="font-bold text-foreground">{problem.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-5">{problem.description}</p>
              <div className="bg-muted rounded-xl p-3 space-y-2">
                {problem.chat.map((msg, j) => (
                  <div key={j} className={`flex ${msg.from === "customer" ? "justify-end" : "justify-start"}`}>
                    <div className={`${msg.from === "customer" ? "chat-bubble-customer" : "bg-card border border-border rounded-2xl rounded-br-sm px-3 py-2"} text-xs max-w-[85%]`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
