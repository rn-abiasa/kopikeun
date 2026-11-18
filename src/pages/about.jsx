import Header from "../components/header";
import Footer from "../components/footer";
import kedai from "../assets/kedai.webp";

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

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-background px-7 pt-28 pb-20 md:px-12 md:pt-40 md:pb-32">
        <h1 className="text-5xl md:w-4/5 md:text-7xl lg:text-8xl leading-none font-heading font-bold text-primary">
          A corner roastery that grew into a neighbourhood table.
        </h1>

        <img
          src={kedai}
          alt="Seven Seeds Coffee Roasters"
          className="mt-12 w-full aspect-4/3 object-cover md:mt-20 md:aspect-21/9"
        />

        <div className="mt-20 flex flex-col gap-6 md:mt-32 md:flex-row md:justify-between md:gap-12">
          <h2 className="text-3xl md:w-1/2 md:text-5xl leading-none font-heading font-bold text-primary">
            Where it started
          </h2>
          <div className="flex flex-col gap-4 md:w-2/5 md:pt-2">
            <p className="text-base md:text-lg leading-relaxed font-body font-normal text-accent">
              It began with a second-hand roaster and a handful of green beans.
              We roasted a little each week, handed out cups to neighbours, and
              listened to what they liked.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-body font-normal text-accent/80">
              Today we still roast in small batches and still keep the menu
              short. The room has grown and the tables are longer, but the idea
              has not changed: good coffee is better when it is shared.
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:mt-32 md:grid md:grid-cols-3 md:gap-12">
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

        <a
          href="/contact"
          className="mt-16 inline-block bg-primary px-6 py-3 font-body text-sm font-medium text-background transition-colors duration-300 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:mt-24 md:px-8 md:py-4 md:text-base"
        >
          Visit us
        </a>
      </main>
      <Footer />
    </>
  );
}
