import Header from "../components/header";
import Footer from "../components/footer";

import one from "../assets/kedai/kedai1.webp";
import two from "../assets/kedai/kedai2.webp";
import three from "../assets/kedai/kedai3.webp";
import four from "../assets/kedai/kedai4.webp";
import five from "../assets/kedai/kedai5.webp";

import menu1 from "../assets/menu/kopi6.webp";
import menu2 from "../assets/menu/kopi5.webp";
import menu3 from "../assets/menu/kopi3.webp";
import menu4 from "../assets/menu/kopi4.webp";
import menu5 from "../assets/menu/mie1.webp";
import menu6 from "../assets/menu/mie2.webp";
import menu7 from "../assets/menu/nasgor1.webp";

// Isi `src` dengan foto kamu, contoh:
// import kedai from "../assets/kedai.webp";
// { name: "Kedai dari depan", src: kedai, aspect: "aspect-4/5" }
//
// `aspect` = rasio foto. Campur rasio berbeda agar susunannya terasa editorial.
const photos = [
  { name: "Kedai dari depan", src: one, aspect: "aspect-4/5" },
  { name: "Biji kopi sangrai", src: two, aspect: "aspect-square" },
  { name: "Barista menyeduh", src: three, aspect: "aspect-3/4" },
  { name: "Meja panjang", src: four, aspect: "aspect-4/3" },
  { name: "Latte art", src: five, aspect: "aspect-square" },
  { name: "Roaster", src: menu1, aspect: "aspect-2/3" },
  { name: "Croissant", src: menu2, aspect: "aspect-4/5" },
  { name: "Sudut baca", src: menu3, aspect: "aspect-4/3" },
  { name: "Pour over", src: menu4, aspect: "aspect-3/4" },
  { name: "Interior malam hari", src: menu5, aspect: "aspect-square" },
  { name: "Rak biji kopi", src: menu6, aspect: "aspect-4/5" },
  { name: "Cangkir di meja", src: menu7, aspect: "aspect-4/3" },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="bg-background px-7 pt-28 pb-20 md:px-12 md:pt-40 md:pb-32">
        <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none font-heading font-bold text-primary">
          Gallery
        </h1>
        <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed font-body font-normal text-accent">
          A look inside the roastery: the beans, the people, and the table where
          it all happens.
        </p>

        <div className="mt-12 columns-2 gap-3 md:mt-20 md:columns-3 md:gap-5">
          {photos.map((photo) => (
            <div
              key={photo.name}
              className={`mb-3 break-inside-avoid overflow-hidden bg-accent/10 md:mb-5 ${photo.aspect}`}
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

        <a
          href="/contact"
          className="mt-12 inline-block bg-primary px-6 py-3 font-body text-sm font-medium text-background transition-colors duration-300 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:mt-20 md:px-8 md:py-4 md:text-base"
        >
          Visit us
        </a>
      </main>
      <Footer />
    </>
  );
}
