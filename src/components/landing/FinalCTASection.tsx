import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section id="cta" className="py-24 bg-background">
      <div className="container">
        <motion.div
          className="max-w-2xl mx-auto text-center bg-gradient-cta rounded-3xl p-12 sm:p-16 shadow-card-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-4">
            Ready to stop losing orders on WhatsApp?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Transform your conversations into organized sales with KamaTech.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-4 rounded-xl text-base font-semibold hover:bg-card/90 transition-colors shadow-elevated"
          >
            Schedule a Demo <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
