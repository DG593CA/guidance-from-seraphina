import { Gift, Heart, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function TrustBadges() {
  const badges = [
    {
      icon: Gift,
      title: "A free gift",
      description: "Your first reading is completely complementary."
    },
    {
      icon: Heart,
      title: "A Guiding Presence",
      description: "Compassionate, non-judgmental spiritual support."
    },
    {
      icon: ShieldCheck,
      title: "Total discretion",
      description: "Your energy and questions remain entirely private."
    }
  ];

  return (
    <div className="py-16 max-w-4xl mx-auto w-full px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {badges.map((badge, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-500">
              <badge.icon className="w-7 h-7 text-primary" />
            </div>
            <h4 className="font-serif text-lg text-foreground mb-2">{badge.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{badge.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
