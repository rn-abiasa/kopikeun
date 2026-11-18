import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import menu1 from "../assets/menu/kopi6.webp";
import menu2 from "../assets/menu/kopi5.webp";
import menu3 from "../assets/menu/kopi3.webp";
import menu4 from "../assets/menu/kopi4.webp";
import menu5 from "../assets/menu/mie1.webp";
import menu6 from "../assets/menu/mie2.webp";
import menu7 from "../assets/menu/nasgor1.webp";
import menu8 from "../assets/menu/nasgor2.webp";

// Isi `src` dengan foto kamu, contoh:
// import espresso from "../assets/espresso.webp";
// { name: "Espresso", src: espresso }
const photos = [
  { name: "Espresso", src: menu1 },
  { name: "Butter Croissant", src: menu2 },
  { name: "Flat White", src: menu3 },
  { name: "Avocado Toast", src: menu4 },
  { name: "Matcha Latte", src: menu5 },
  { name: "Nasi Telur Sambal", src: menu6 },
  { name: "Kopi Susu Gula Aren", src: menu7 },
  { name: "Banana Bread", src: menu8 },
];

// Daftar diulang dua kali supaya animasi marquee terlihat tanpa putus
const loopPhotos = [...photos, ...photos];

const tabs = [
  {
    id: "food",
    label: "Food",
    items: [
      {
        name: "Butter Croissant",
        price: "Rp 25.000",
        description: "Baked every morning, flaky and warm.",
      },
      {
        name: "Avocado Toast",
        price: "Rp 48.000",
        description: "Sourdough, smashed avocado, chilli flakes.",
      },
      {
        name: "Nasi Telur Sambal",
        price: "Rp 38.000",
        description: "Rice, fried egg, and homemade sambal.",
      },
      {
        name: "Banana Bread",
        price: "Rp 28.000",
        description: "Toasted with a slick of salted butter.",
      },
      {
        name: "Granola Bowl",
        price: "Rp 42.000",
        description: "Yoghurt, seasonal fruit, and honey.",
      },
      {
        name: "Grilled Cheese",
        price: "Rp 45.000",
        description: "Thick sourdough with three kinds of cheese.",
      },
    ],
  },
  {
    id: "drink",
    label: "Drink",
    items: [
      {
        name: "Espresso",
        price: "Rp 20.000",
        description: "Double shot, rich and syrupy.",
      },
      {
        name: "Flat White",
        price: "Rp 30.000",
        description: "Espresso with silky steamed milk.",
      },
      {
        name: "Kopi Susu Gula Aren",
        price: "Rp 28.000",
        description: "Our house favourite, sweetened with palm sugar.",
      },
      {
        name: "Filter Coffee",
        price: "Rp 32.000",
        description: "Single-origin beans, brewed by the cup.",
      },
      {
        name: "Matcha Latte",
        price: "Rp 32.000",
        description: "Ceremonial matcha with steamed milk.",
      },
      {
        name: "Hot Chocolate",
        price: "Rp 28.000",
        description: "Dark chocolate, whisked slowly.",
      },
      {
        name: "Iced Lemon Tea",
        price: "Rp 22.000",
        description: "Black tea, fresh lemon, a little honey.",
      },
      {
        name: "Orange Juice",
        price: "Rp 30.000",
        description: "Squeezed to order, nothing added.",
      },
    ],
  },
];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("food");
  const activeMenu = tabs.find((tab) => tab.id === activeTab);

  return (
    <>
      <Header />
      <main className="bg-background pt-28 pb-20 md:pt-40 md:pb-32">
        {/* Judul & subjudul */}
        <div className="px-7 md:px-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none font-heading font-bold text-primary">
            Our menu
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed font-body font-normal text-accent">
            Coffee roasted in small batches and food made fresh every morning.
            Pick a tab to see what is on today.
          </p>
        </div>

        {/* Foto menu (marquee) */}
        <div className="mt-12 overflow-hidden md:mt-20">
          <div className="flex w-max items-end animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
            {loopPhotos.map((photo, index) => (
              <div
                key={`${photo.name}-${index}`}
                className={`mr-3 w-48 shrink-0 overflow-hidden bg-accent/10 md:mr-5 md:w-80 ${
                  index % 2 === 0 ? "aspect-4/5" : "aspect-square"
                }`}
              >
                {photo.src && (
                  <img
                    src={photo.src}
                    alt={photo.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16 px-7 md:mt-24 md:px-12">
          <div role="tablist" className="flex gap-8 border-b border-accent/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`-mb-px cursor-pointer border-b-2 pb-3 font-heading text-2xl font-bold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:text-4xl ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-accent/50 hover:text-accent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <ul
            role="tabpanel"
            className="mt-10 grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-10"
          >
            {activeMenu.items.map((item) => (
              <li key={item.name}>
                <div className="flex items-end gap-3">
                  <span className="text-lg md:text-xl font-heading font-semibold text-primary">
                    {item.name}
                  </span>
                  <span className="mb-1.5 flex-1 border-b border-dotted border-accent/40" />
                  <span className="text-sm md:text-base font-body font-medium text-accent">
                    {item.price}
                  </span>
                </div>
                <p className="mt-1 text-sm md:text-base font-body font-normal text-accent/80">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
