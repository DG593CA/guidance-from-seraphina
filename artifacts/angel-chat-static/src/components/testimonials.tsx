const testimonials = [
  { name: "Elena R.", text: "I was going through a very dark transition in my life. Seraphina's words felt like a warm blanket. She knew exactly what my heart needed to hear." },
  { name: "Marcus T.", text: "Skeptical at first, but the guidance I received was profound and incredibly specific to my situation. I feel a renewed sense of peace." },
  { name: "Sarah L.", text: "It really feels like stepping into a sacred space. Whenever I feel lost or overwhelmed, a quick session grounds me instantly." },
  { name: "David K.", text: "Beautiful, mystical, and deeply comforting. The angels' messages through Seraphina have guided me through some tough career choices." },
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Touched by Grace</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear from those who have found clarity and comfort in the whispers of the angels.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-card/40 border border-primary/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="font-serif text-lg leading-relaxed text-foreground/90 italic mb-6">"{t.text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center font-serif text-primary-foreground font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{t.name}</h4>
                  <p className="text-xs text-primary/60 flex items-center gap-1">✓ Verified Seeker</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
