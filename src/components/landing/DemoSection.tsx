import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Send } from "lucide-react";

const conversation = [
  { from: "customer", text: "Hi! I'd like to order a large pepperoni pizza 🍕", delay: 0 },
  { from: "ai", text: "Hey! 😊 One large pepperoni pizza, got it! Anything else?", delay: 1200 },
  { from: "customer", text: "Add a 2L Coke and garlic bread", delay: 2400 },
  { from: "ai", text: "Perfect! That's:\n• 1x Large Pepperoni Pizza\n• 1x 2L Coca-Cola\n• 1x Garlic Bread\n\nTotal: R$89.90\nDelivery or pickup?", delay: 3600 },
  { from: "customer", text: "Delivery to Rua das Flores 123", delay: 5000 },
  { from: "ai", text: "All set! ✅ Delivering to Rua das Flores 123. Payment on delivery or Pix?", delay: 6200 },
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
            See it in action
          </h2>
          <p className="text-muted-foreground text-lg">Watch KamaTech handle a real order conversation.</p>
        </motion.div>

        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => !started && setStarted(true)}
        >
          <div className="bg-card rounded-2xl border border-border shadow-card-lg overflow-hidden">
            {/* Header */}
            <div className="bg-secondary px-5 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center text-xs font-bold text-primary-foreground">
                KT
              </div>
              <div>
                <div className="text-sm font-semibold text-secondary-foreground">KamaTech AI</div>
                <div className="text-xs text-secondary-foreground/70">Online</div>
              </div>
            </div>

            {/* Chat body */}
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

            {/* Input */}
            <div className="border-t border-border p-3 flex items-center gap-2 bg-card">
              <div className="flex-1 bg-muted rounded-full px-4 py-2 text-xs text-muted-foreground">
                Type a message...
              </div>
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <Send className="w-4 h-4 text-secondary-foreground" />
              </div>
            </div>
          </div>

          {/* Generated order appears after conversation */}
          {visibleMessages >= conversation.length && (
            <motion.div
              className="mt-4 bg-card rounded-2xl border-2 border-primary/20 p-5 shadow-elevated"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                ✨ Auto-Generated Order
              </div>
              <div className="space-y-2 text-sm">
                {[
                  ["Order", "#287"],
                  ["Items", "Large Pepperoni, 2L Coca-Cola, Garlic Bread"],
                  ["Total", "R$89.90"],
                  ["Address", "Rua das Flores 123"],
                  ["Status", "Awaiting payment confirmation"],
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
