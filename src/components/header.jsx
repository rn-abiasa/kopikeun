import { useState } from "react";
import logo from "../assets/kopikeun.webp";
import { ChartNoAxesGantt, X } from "lucide-react";

const leftLinks = [
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
];

const rightLinks = [
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const linkStyle =
  "relative font-body text-sm font-medium text-primary after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed z-100 top-0 w-full bg-background border-b border-accent/20 flex justify-between items-center py-3 px-7 md:px-12 md:grid md:grid-cols-[1fr_auto_1fr]">
      {/* Links kiri (desktop) */}
      <nav className="hidden md:flex justify-end gap-10">
        {leftLinks.map((link) => (
          <a key={link.label} href={link.href} className={linkStyle}>
            {link.label}
          </a>
        ))}
      </nav>

      {/* Logo */}
      <a href="/" className="md:mx-14">
        <img src={logo} alt="Kopikeun" className="h-12" />
      </a>

      {/* Links kanan (desktop) */}
      <nav className="hidden md:flex justify-start gap-10">
        {rightLinks.map((link) => (
          <a key={link.label} href={link.href} className={linkStyle}>
            {link.label}
          </a>
        ))}
      </nav>

      {/* Hamburger (mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="md:hidden text-primary cursor-pointer"
      >
        {isOpen ? <X /> : <ChartNoAxesGantt />}
      </button>

      {/* Menu dropdown (mobile) */}
      <nav
        className={`absolute left-0 top-full w-full md:hidden bg-background border-b border-accent/20 px-7 pb-4 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-2"
        }`}
      >
        {[...leftLinks, ...rightLinks].map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="block py-4 border-t border-accent/20 font-heading text-3xl font-bold text-primary transition-all duration-300 hover:pl-3 hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
