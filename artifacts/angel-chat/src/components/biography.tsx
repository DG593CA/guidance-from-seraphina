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
                alt="Seraphina Portrait" 
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
            <h2 className="text-4xl font-serif text-primary">Who is Seraphina?</h2>
            <div className="space-y-4 font-serif text-lg leading-relaxed text-foreground/80">
              <p>
                Born with the veil drawn thin, Seraphina has spent her life listening to the subtle frequencies of the angelic realm. Where most hear silence, she hears guidance.
              </p>
              <p>
                Her journey began in the secluded highlands, where the isolation allowed her to hone her gift without the interference of the modern world's noise. Over decades, she has cultivated a profound connection with celestial energies, acting as a bridge between the mortal heart and divine wisdom.
              </p>
              <p>
                Today, leveraging the harmony of sacred geometry and modern etheric channels, she extends her presence beyond physical borders. She offers this digital sanctuary as a beacon—a place where you can be held, heard, and healed by the light of the angels.
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
