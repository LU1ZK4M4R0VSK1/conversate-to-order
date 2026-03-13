import { motion } from "framer-motion";
import { AlertTriangle, Clock, MessageSquareX } from "lucide-react";

const problems = [
  {
    icon: MessageSquareX,
    title: "Lost orders",
    description: "Too many messages arrive at once and orders slip through the cracks.",
    chat: [
      { from: "customer", text: "I want 2 pizzas please" },
      { from: "customer", text: "Hello?? Anyone there?" },
      { from: "customer", text: "Forget it, I'll order elsewhere" },
    ],
  },
  {
    icon: Clock,
    title: "Slow responses",
    description: "Customers give up when they don't get a quick reply.",
    chat: [
      { from: "customer", text: "Hi, do you deliver to downtown?" },
      { from: "business", text: "Sorry for the delay! Yes we do." },
      { from: "customer", text: "Already ordered from someone else 😕" },
    ],
  },
  {
    icon: AlertTriangle,
    title: "Confusing messages",
    description: "Unstructured chats require manual organization every time.",
    chat: [
      { from: "customer", text: "the usual but no onion and add fries and the juice from last time" },
      { from: "business", text: "Which juice? And was the usual the chicken or beef?" },
    ],
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 bg-background">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            The chaos of selling through WhatsApp
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Sound familiar? These problems cost you real revenue every day.
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
