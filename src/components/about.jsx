const pillars = [
  {
    title: "The best coffee",
    text: "Single-origin beans from small farms, roasted in-house and brewed to order.",
  },
  {
    title: "Delicious food",
    text: "A short, seasonal menu made fresh every morning to go with each cup.",
  },
  {
    title: "Cozy space",
    text: "Warm light, long tables, and enough room to read, work, or simply sit.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col gap-12 mt-24 mb-20 scroll-mt-24 md:mt-40 md:mb-32 md:gap-20"
    >
      <div className="flex flex-col gap-6 md:flex-row md:justify-between md:gap-12">
        <h2 className="text-4xl md:text-6xl md:w-1/2 leading-none font-heading font-bold text-primary">
          Small batches, slow mornings, and a table for everyone.
        </h2>
        <div className="flex flex-col gap-4 md:w-2/5 md:pt-2">
          <p className="text-base md:text-lg leading-relaxed font-body font-normal text-accent">
            We roast our beans every week and brew them the way we like to
            drink them: simple, balanced, and fresh.
          </p>
          <p className="text-base md:text-lg leading-relaxed font-body font-normal text-accent/80">
            What started as a corner roastery is now a place where neighbours
            meet, work, and stay a little longer than planned.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 md:gap-12">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="border-t border-accent/50 py-5 md:pb-0"
          >
            <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">
              {pillar.title}
            </h3>
            <p className="mt-2 text-sm md:text-base leading-relaxed font-body font-normal text-accent/80">
              {pillar.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
