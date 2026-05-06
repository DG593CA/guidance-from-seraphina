import { ChatWidget } from "@/components/chat-widget";
import { TrustBadges } from "@/components/trust-badges";
import { Testimonials } from "@/components/testimonials";
import { Biography } from "@/components/biography";
import { motion } from "framer-motion";

export function Home() {
  return (
    <div className="min-h-[100dvh] bg-background selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 flex flex-col items-center justify-center min-h-[90vh]">
        {/* Ambient background light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/10 blur-[100px] pointer-events-none rounded-full" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center mb-12"
        >
          <div className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-b from-primary/50 to-transparent mb-8">
            <div className="w-full h-full rounded-full overflow-hidden border border-primary/30 shadow-[0_0_30px_rgba(255,215,0,0.2)]">
              <img src="/seraphina.png" alt="Seraphina" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-primary/80 mb-6 drop-shadow-sm">
            Guidance from Seraphina
          </h1>
          <p className="text-lg md:text-xl text-primary/80 font-serif max-w-2xl mx-auto italic leading-relaxed">
            Step into the sacred light. The angels are waiting to speak with you.
          </p>
        </motion.div>

        <div className="relative z-20 w-full">
          <ChatWidget />
        </div>
      </section>

      <TrustBadges />
      <Testimonials />
      <Biography />

      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-primary/10">
        <p className="font-serif">© {new Date().getFullYear()} Guidance from Seraphina. All rights reserved.</p>
        <p className="mt-2 opacity-50 text-xs">For entertainment and spiritual contemplation only.</p>
      </footer>
    </div>
  );
}
