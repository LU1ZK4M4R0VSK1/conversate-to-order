import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Send } from "lucide-react";

const conversation = [
  { from: "customer", text: "Oi! Quero pedir uma pizza grande de pepperoni 🍕", delay: 0 },
  { from: "ai", text: "Olá! 😊 Uma pizza grande de pepperoni, anotado! Mais alguma coisa?", delay: 1200 },
  { from: "customer", text: "Coloca uma Coca 2L e um pão de alho", delay: 2400 },
  { from: "ai", text: "Perfeito! Seu pedido:\n• 1x Pizza Grande Pepperoni\n• 1x Coca-Cola 2L\n• 1x Pão de Alho\n\nTotal: R$89,90\nEntrega ou retirada?", delay: 3600 },
  { from: "customer", text: "Entrega na Rua das Flores 123", delay: 5000 },
  { from: "ai", text: "Tudo certo! ✅ Entregando na Rua das Flores 123. Pagamento na entrega ou Pix?", delay: 6200 },
];

const DemoSection = () => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    if (visibleMessages >= conversation.length) return;
    const nextDelay = visibleMessages === 0 ? 500 : conversation[visibleMessages].delay - conversation[visibleMessages - 1].delay;
    const timer = setTimeout(() => setVisibleMessages((v) => v + 1), nextDelay);
    return () => clearTimeout(timer);
  }, [visibleMessages, started]);

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Veja em ação
          </h2>
          <p className="text-muted-foreground text-lg">Acompanhe a KamaTech cuidando de um pedido real.</p>
        </motion.div>

        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => !started && setStarted(true)}
        >
          <div className="bg-card rounded-2xl border border-border shadow-card-lg overflow-hidden">
            <div className="bg-secondary px-5 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center text-xs font-bold text-primary-foreground">
                KT
              </div>
              <div>
                <div className="text-sm font-semibold text-secondary-foreground">KamaTech IA</div>
                <div className="text-xs text-secondary-foreground/70">Online</div>
              </div>
            </div>

            <div className="p-4 space-y-3 min-h-[320px] bg-muted/30">
              {conversation.slice(0, visibleMessages).map((msg, i) => (
                <motion.div
                  key={i}
                  className={`flex ${msg.from === "customer" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`${msg.from === "customer" ? "chat-bubble-customer" : "chat-bubble-ai"} text-sm max-w-[80%] whitespace-pre-line`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {started && visibleMessages < conversation.length && (
                <div className="flex justify-start">
                  <div className="chat-bubble-ai text-sm px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-primary-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-primary-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-primary-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-border p-3 flex items-center gap-2 bg-card">
              <div className="flex-1 bg-muted rounded-full px-4 py-2 text-xs text-muted-foreground">
                Digite uma mensagem...
              </div>
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <Send className="w-4 h-4 text-secondary-foreground" />
              </div>
            </div>
          </div>

          {visibleMessages >= conversation.length && (
            <motion.div
              className="mt-4 bg-card rounded-2xl border-2 border-primary/20 p-5 shadow-elevated"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                ✨ Pedido Gerado Automaticamente
              </div>
              <div className="space-y-2 text-sm">
                {[
                  ["Pedido", "#287"],
                  ["Itens", "Pizza Pepperoni G, Coca-Cola 2L, Pão de Alho"],
                  ["Total", "R$89,90"],
                  ["Endereço", "Rua das Flores 123"],
                  ["Status", "Aguardando confirmação de pagamento"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <span className="text-muted-foreground">{k}</span>
                    <span className="font-medium text-foreground">{v}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
