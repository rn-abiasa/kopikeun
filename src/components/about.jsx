export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col gap-12 mt-24 mb-20 scroll-mt-24 md:mt-40 md:mb-32 md:gap-20 px-7 md:px-12"
    >
      <div className="flex flex-col gap-6 md:flex-row md:justify-between md:gap-12">
        <h2 className="text-4xl md:text-6xl md:w-1/2 leading-none font-heading font-bold text-primary">
          Small batches, slow mornings, and a table for everyone.
        </h2>
        <div className="flex flex-col gap-4 md:w-2/5 md:pt-2">
          <p className="text-base md:text-lg leading-relaxed font-body font-normal text-accent">
            Every batch is roasted in small amounts, so what reaches your cup is
            always fresh. We keep the menu short and the brewing simple, because
            good beans need very little help.
          </p>
          <p className="text-base md:text-lg leading-relaxed font-body font-normal text-accent/80">
            What started as a corner roastery is now a place where neighbours
            meet, work, and stay a little longer than planned.
          </p>
          <a
            href="/about"
            className="relative font-body text-sm font-medium text-primary after:absolute after:left-0 after:-bottom-1 after:h-px after:w-18 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
}
