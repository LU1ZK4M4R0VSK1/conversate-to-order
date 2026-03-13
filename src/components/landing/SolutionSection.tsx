import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const SolutionSection = () => {
  return (
    <section id="solucao" className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            A KamaTech organiza tudo{" "}
            <span className="text-gradient">automaticamente</span>
          </h2>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-card rounded-2xl border border-border p-5 shadow-card mb-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">J</div>
              <span className="text-sm font-semibold text-foreground">Cliente — João</span>
            </div>
            <div className="bg-muted rounded-xl px-4 py-3 text-sm text-foreground">
              "Me manda um hambúrguer e uma coca no mesmo endereço de sempre"
            </div>
          </div>

          <div className="flex justify-center my-2">
            <div className="bg-gradient-cta w-10 h-10 rounded-full flex items-center justify-center shadow-elevated">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>

          <div className="bg-card rounded-2xl border-2 border-primary/20 p-6 shadow-elevated">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <ArrowDown className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Pedido Gerado pela IA</span>
              </div>
              <span className="px-3 py-1 bg-secondary/15 text-secondary text-xs font-semibold rounded-full">✓ Pronto</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                ["Pedido", "#142"],
                ["Cliente", "João"],
                ["Itens", "Hambúrguer, Coca-Cola"],
                ["Pagamento", "Pix"],
                ["Endereço", "Salvo"],
                ["Status", "Confirmado ✓"],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col">
                  <span className="text-muted-foreground text-xs">{label}</span>
                  <span className="font-semibold text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
