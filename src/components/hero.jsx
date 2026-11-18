import kedai from "../assets/kopikeun_bg.png";

export default function Hero() {
  return (
    <section
      style={{ backgroundImage: `url(${kedai})` }}
      className="relative flex min-h-svh flex-col justify-end bg-cover bg-center px-7 pb-10 pt-28 md:px-12 md:pb-14"
    >
      {/* Overlay gelap di bagian bawah supaya teks mudah dibaca */}
      <div className="absolute inset-0 bg-linear-to-t from-heading/70 via-heading/10 to-transparent" />

      <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
        <h1 className="text-5xl md:w-3/5 md:text-7xl lg:text-8xl leading-none font-heading font-bold text-background">
          SEVEN SEEDS COFFEE ROASTERS
        </h1>
        <div className="flex flex-col items-start gap-6 md:w-1/3">
          <p className="text-base md:text-lg leading-relaxed font-body font-normal text-background/90">
            We roast our beans every week and brew them the way we like to
            drink them: simple, balanced, and fresh.
          </p>
          <a
            href="#menu"
            className="bg-background px-6 py-3 font-body text-sm font-medium text-primary transition-colors duration-300 hover:bg-accent hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background md:px-8 md:py-4 md:text-base"
          >
            Explore the menu
          </a>
        </div>
      </div>
    </section>
  );
}
