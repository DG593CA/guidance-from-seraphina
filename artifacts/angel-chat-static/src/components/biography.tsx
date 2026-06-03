export function Biography() {
  return (
    <section className="py-24 border-t border-primary/10 bg-black/20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-[60px]" />
            <div className="relative aspect-[3/4] rounded-full overflow-hidden border-2 border-primary/30">
              <img
                src={`${import.meta.env.BASE_URL}seraphina.png`}
                alt="Seraphina Portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-serif text-primary">Who is Seraphina?</h2>
            <div className="space-y-4 font-serif text-lg leading-relaxed text-foreground/80">
              <p>
                Born with the veil drawn thin, Seraphina has spent her life listening to the subtle frequencies of the angelic realm. Where most hear silence, she hears guidance.
              </p>
              <p>
                Her journey began in the secluded highlands, where the isolation allowed her to hone her gift without the interference of the modern world's noise. Over decades, she has cultivated a profound connection with celestial energies, acting as a bridge between the mortal heart and divine wisdom.
              </p>
              <p>
                Today, leveraging the harmony of sacred geometry and modern etheric channels, she extends her presence beyond physical borders. She offers this digital sanctuary as a beacon — a place where you can be held, heard, and healed by the light of the angels.
              </p>
            </div>
            <div className="pt-4">
              <a
                href="/"
                className="inline-block bg-primary/10 border border-primary/30 text-primary font-serif px-7 py-3 rounded-full text-sm hover:bg-primary/20 transition-colors"
              >
                Begin Your Free Reading →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
