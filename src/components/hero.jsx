import kedai from "../assets/kedai.webp";

export default function Hero() {
  return (
    <section className="flex flex-col gap-10 mt-20">
      <div>
        <p className="text-5xl font-heading font-bold text-primary">
          SEVEN SEEDS COFFEE ROASTERS
        </p>
        <div className="border-t border-accent/50 flex justify-between items-center py-2 mt-5">
          <span className="text-xs font-body font-normal text-primary">
            THE BEST COFFEE
          </span>
          <span className="text-xs font-body font-normal text-primary">
            DELICIOUS FOOD
          </span>
          <span className="text-xs font-body font-normal text-primary">
            COZY SPACE
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div>
          <h1 className="text-3xl font-heading font-bold text-primary text-center">
            WELCOME
          </h1>
          <p className="text-xs font-body font-normal text-accent/80 text-center">
            114 Berkeley Street, Carlton, VIC, 3050
          </p>
        </div>
        <img src={kedai} className="" />
        <div>
          <h1 className="text-3xl font-heading font-bold text-primary text-center">
            EAT HOME
          </h1>
          <p className="text-xs font-body font-normal text-accent/80 text-center">
            114 Berkeley Street, Carlton, VIC, 3050
          </p>
        </div>
      </div>
    </section>
  );
}
