export function TrustBadges() {
  const badges = [
    {
      icon: (
        <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
      ),
      title: "A free gift",
      description: "Your first reading is completely complementary.",
    },
    {
      icon: (
        <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      ),
      title: "A Guiding Presence",
      description: "Compassionate, non-judgmental spiritual support.",
    },
    {
      icon: (
        <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      ),
      title: "Total discretion",
      description: "Your energy and questions remain entirely private.",
    },
  ];

  return (
    <div className="py-16 max-w-4xl mx-auto w-full px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {badges.map((badge, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-500">
              {badge.icon}
            </div>
            <h4 className="font-serif text-lg text-foreground mb-2">{badge.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{badge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
