import { motion } from "framer-motion";
import { Star, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    name: "Elena R.",
    text: "I was going through a very dark transition in my life. Seraphina's words felt like a warm blanket. She knew exactly what my heart needed to hear.",
  },
  {
    name: "Marcus T.",
    text: "Skeptical at first, but the guidance I received was profound and incredibly specific to my situation. I feel a renewed sense of peace.",
  },
  {
    name: "Sarah L.",
    text: "It really feels like stepping into a sacred space. Whenever I feel lost or overwhelmed, a quick session grounds me instantly.",
  },
  {
    name: "David K.",
    text: "Beautiful, mystical, and deeply comforting. The angels' messages through Seraphina have guided me through some tough career choices.",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Touched by Grace</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear from those who have found clarity and comfort in the whispers of the angels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card/40 border border-primary/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <div className="flex text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-serif text-lg leading-relaxed text-foreground/90 italic mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center font-serif text-primary-foreground font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{t.name}</h4>
                  <p className="text-xs text-primary/60 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Verified Seeker
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
