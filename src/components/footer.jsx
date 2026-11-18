import logo from "../assets/kopikeun_logo.webp";

export default function Footer() {
  return (
    <footer className="bg-primary overflow-hidden px-7 pt-12 md:px-12 md:pt-16">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <img src={logo} alt="Kopikeun" className="h-16 w-fit md:h-20" />
        <div className="flex flex-col gap-1">
          <p className="text-xs md:text-sm font-body font-normal text-background md:text-right">
            114 Berkeley Street, Carlton, VIC, 3050
          </p>
          <p className="text-xs md:text-sm font-body font-normal text-background/70 md:text-right">
            © 2026 Kopikeun Coffee
          </p>
        </div>
      </div>
      <p className="mt-12 pb-3 text-[16vw] md:text-[18vw] leading-[0.8] tracking-tight font-heading font-bold text-background md:mt-20">
        KOPIKEUN
      </p>
    </footer>
  );
}
