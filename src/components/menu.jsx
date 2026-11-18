import { useEffect, useRef, useState } from "react";

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
// { name: "Espresso", src: espresso, position: "..." }
//
// `position` = posisi & ukuran foto di dalam kolase (kiri/atas/lebar dalam %).
// Tanpa prefix untuk mobile, prefix `md:` untuk desktop.
const photos = [
  {
    name: "Espresso",
    src: menu1,
    position:
      "left-0 top-0 w-[44%] aspect-4/5 md:left-[3%] md:top-[2%] md:w-[20%]",
  },
  {
    name: "Flat White",
    src: menu2,
    position:
      "left-[52%] top-[6%] w-[40%] aspect-square md:left-[27%] md:top-0 md:w-[14%]",
  },
  {
    name: "Kopi Susu Gula Aren",
    src: menu3,
    position:
      "left-[2%] top-[36%] w-[24%] aspect-3/4 md:left-[62%] md:top-[4%] md:w-[16%]",
  },
  {
    name: "Matcha Latte",
    src: menu4,
    position:
      "right-[2%] top-[47%] w-[22%] aspect-square md:right-[3%] md:top-0 md:w-[15%] md:aspect-4/5",
  },
  {
    name: "Butter Croissant",
    src: menu5,
    position:
      "left-0 top-[64%] w-[38%] aspect-4/5 md:left-[10%] md:top-[56%] md:w-[16%] md:aspect-square",
  },
  {
    name: "Avocado Toast",
    src: menu6,
    position:
      "left-[44%] top-[62%] w-[26%] aspect-square md:left-[30%] md:top-[66%] md:w-[13%] md:aspect-3/4",
  },
  {
    name: "Nasi Telur Sambal",
    src: menu7,
    position:
      "right-0 top-[66%] w-[26%] aspect-3/4 md:left-[58%] md:right-auto md:top-[60%] md:w-[15%] md:aspect-square",
  },
  {
    name: "Banana Bread",
    src: menu8,
    position:
      "left-[40%] top-[80%] w-[30%] aspect-square md:left-auto md:right-[4%] md:top-[50%] md:w-[17%] md:aspect-3/4",
  },
];

function Photo({ photo, index, isVisible }) {
  return (
    <div
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
      className={`absolute overflow-hidden bg-accent/10 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${photo.position}`}
    >
      {photo.src && (
        <img
          src={photo.src}
          alt={photo.name}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}

export default function Menu() {
  const [isVisible, setIsVisible] = useState(false);
  const collageRef = useRef(null);

  // Pantau kolase: masuk layar -> foto muncul, keluar layar -> foto di-reset
  // sehingga animasi berulang saat scroll ke bawah maupun ke atas.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(collageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="menu"
      className="mt-24  scroll-mt-24 md:mt-40  py-5 px-7 md:px-12"
    >
      <div ref={collageRef} className="relative aspect-8/15 md:aspect-16/10">
        {photos.map((photo, index) => (
          <Photo
            key={photo.name}
            photo={photo}
            index={index}
            isVisible={isVisible}
          />
        ))}

        <a
          href="/menu"
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-primary px-6 py-3 font-body text-sm font-medium text-background transition-colors duration-300 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:px-8 md:py-4 md:text-base"
        >
          Explore the menu
        </a>
      </div>
    </section>
  );
}
