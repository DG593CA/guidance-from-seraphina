import { motion } from "framer-motion";

export function Biography() {
  return (
    <section className="py-24 border-t border-primary/10 bg-black/20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-[60px]" />
            <div className="relative aspect-[3/4] rounded-full overflow-hidden border-2 border-primary/30">
              <img 
                src="/seraphina.png" 
                alt="Crystal Sage Portrait" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-serif text-primary">Who is Crystal Sage?</h2>
            <div className="space-y-4 font-serif text-lg leading-relaxed text-foreground/80">
              <p>
                Crystal Sage is a gifted psychic medium and compassionate spiritual guide with a rare ability to bridge the gap between this world and the next. She has spent decades lovingly helping people reconnect with those they've lost — family, friends, and cherished animal companions.
              </p>
              <p>
                Whether you are longing to hear from a parent, a partner, a child, or a beloved pet who has crossed over, Crystal Sage holds space for your grief with tenderness and grace. She believes no bond of love is ever truly broken — only transformed.
              </p>
              <p>
                Through her work, thousands have found closure, comfort, and a renewed sense of peace — knowing their loved ones are never truly far away. Crystal Sage offers this sanctuary as a place where you can feel held, heard, and gently guided toward healing.
              </p>
            </div>
            
            <div className="pt-6">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png" 
                alt="Signature" 
                className="h-12 opacity-40 invert brightness-0 sepia hue-rotate-[40deg] saturate-200" 
                style={{ filter: "invert(80%) sepia(40%) saturate(1000%) hue-rotate(5deg) brightness(110%) contrast(100%)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
