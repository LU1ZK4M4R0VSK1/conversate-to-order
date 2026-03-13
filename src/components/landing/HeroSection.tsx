import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-hero overflow-hidden">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              AI-Powered WhatsApp Sales
            </span>
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Turn your WhatsApp into an{" "}
            <span className="text-gradient">intelligent sales system.</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            KamaTech uses AI to understand customer messages and automatically organize them into structured orders.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-all shadow-elevated"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Hero Visual - WhatsApp to Order transformation */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-card rounded-2xl shadow-card-lg border border-border p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              {/* WhatsApp Chat Side */}
              <div className="bg-muted rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">WhatsApp Chat</span>
                </div>
                <div className="flex justify-end">
                  <div className="chat-bubble-customer max-w-[80%] text-sm">
                    Hi! I want to order a burger and a coke 🍔
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="chat-bubble-customer max-w-[80%] text-sm">
                    Same address as last time, pay with Pix
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="chat-bubble-ai max-w-[80%] text-sm">
                    Got it, João! ✅ Your order: 1x Burger + 1x Coca-Cola. Delivering to your saved address. Pix payment confirmed. Estimated delivery: 35 min!
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                <div className="bg-gradient-cta w-10 h-10 rounded-full flex items-center justify-center shadow-elevated">
                  <ArrowRight className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Structured Order Side */}
              <div className="bg-card rounded-xl border border-border p-5 space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Structured Order</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-foreground">Order #142</span>
                    <span className="px-2.5 py-0.5 bg-secondary/15 text-secondary text-xs font-semibold rounded-full">Confirmed</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Customer</span>
                      <span className="font-medium text-foreground">João Silva</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Items</span>
                      <span className="font-medium text-foreground">Burger, Coca-Cola</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Payment</span>
                      <span className="font-medium text-foreground">Pix</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Address</span>
                      <span className="font-medium text-foreground">Saved ✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
