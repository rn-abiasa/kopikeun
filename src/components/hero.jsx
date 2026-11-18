import kedai from "../assets/kedai.webp";

export default function Hero() {
  return (
    <section className="flex flex-col gap-10 mt-20 md:mt-28 md:gap-14">
      <div>
        <p className="text-5xl md:text-7xl lg:text-8xl leading-none font-heading font-bold text-primary">
          SEVEN SEEDS COFFEE ROASTERS
        </p>
        <div className="border-t border-accent/50 flex justify-between items-center py-2 mt-5">
          <span className="text-xs md:text-sm font-body font-normal text-primary">
            THE BEST COFFEE
          </span>
          <span className="text-xs md:text-sm font-body font-normal text-primary">
            DELICIOUS FOOD
          </span>
          <span className="text-xs md:text-sm font-body font-normal text-primary">
            COZY SPACE
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-12">
        <div className="md:w-1/5">
          <h1 className="text-3xl lg:text-5xl font-heading font-bold text-primary text-center md:text-left">
            WELCOME
          </h1>
          <p className="text-xs md:text-sm font-body font-normal text-accent/80 text-center md:text-left">
            114 Berkeley Street, Carlton, VIC, 3050
          </p>
        </div>
        <img
          src={kedai}
          alt="Seven Seeds Coffee Roasters"
          className="md:w-3/5 md:aspect-4/3 md:object-cover"
        />
        <div className="md:w-1/5">
          <h1 className="text-3xl lg:text-5xl font-heading font-bold text-primary text-center md:text-right">
            EAT HOME
          </h1>
          <p className="text-xs md:text-sm font-body font-normal text-accent/80 text-center md:text-right">
            114 Berkeley Street, Carlton, VIC, 3050
          </p>
        </div>
      </div>
    </section>
  );
}
