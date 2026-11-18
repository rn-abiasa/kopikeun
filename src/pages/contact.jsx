import Header from "../components/header";
import Footer from "../components/footer";

const infos = [
  {
    title: "Visit",
    lines: ["114 Berkeley Street", "Carlton, VIC, 3050"],
  },
  {
    title: "Hours",
    lines: ["Every day", "07.00 – 22.00"],
  },
  {
    title: "Reach us",
    lines: ["hello@kopikeun.com", "+62 812 0000 0000"],
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-background px-7 pt-28 pb-20 md:px-12 md:pt-40 md:pb-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
          <h1 className="text-5xl md:w-3/5 md:text-7xl lg:text-8xl leading-none font-heading font-bold text-primary">
            Come say hello.
          </h1>
          <p className="text-base md:w-1/3 md:text-lg leading-relaxed font-body font-normal text-accent">
            Stop by for a cup, ask about our beans, or write to us about events
            and large orders.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-10 md:mt-32 md:grid md:grid-cols-3 md:gap-12">
          {infos.map((info) => (
            <div key={info.title} className="border-t border-accent/50 pt-5">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-primary">
                {info.title}
              </h2>
              <div className="mt-3 flex flex-col gap-1">
                {info.lines.map((line) => (
                  <p
                    key={line}
                    className="text-base md:text-lg font-body font-normal text-accent"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <a
          href="mailto:hello@kopikeun.com"
          className="mt-16 inline-block bg-primary px-6 py-3 font-body text-sm font-medium text-background transition-colors duration-300 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:mt-24 md:px-8 md:py-4 md:text-base"
        >
          Send an email
        </a>
      </main>
      <Footer />
    </>
  );
}
