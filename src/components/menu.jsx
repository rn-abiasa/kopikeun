// Isi `src` dengan foto kamu, contoh:
// import espresso from "../assets/espresso.webp";
// { name: "Espresso", src: espresso, position: "..." }
//
// `position` = posisi & ukuran foto di dalam kolase (kiri/atas/lebar dalam %).
// Tanpa prefix untuk mobile, prefix `md:` untuk desktop.
const photos = [
  {
    name: "Espresso",
    src: "",
    position:
      "left-0 top-0 w-[44%] aspect-4/5 md:left-[3%] md:top-[2%] md:w-[20%]",
  },
  {
    name: "Flat White",
    src: "",
    position:
      "left-[52%] top-[6%] w-[40%] aspect-square md:left-[27%] md:top-0 md:w-[14%]",
  },
  {
    name: "Kopi Susu Gula Aren",
    src: "",
    position:
      "left-[2%] top-[36%] w-[24%] aspect-3/4 md:left-[62%] md:top-[4%] md:w-[16%]",
  },
  {
    name: "Matcha Latte",
    src: "",
    position:
      "right-[2%] top-[47%] w-[22%] aspect-square md:right-[3%] md:top-0 md:w-[15%] md:aspect-4/5",
  },
  {
    name: "Butter Croissant",
    src: "",
    position:
      "left-0 top-[64%] w-[38%] aspect-4/5 md:left-[10%] md:top-[56%] md:w-[16%] md:aspect-square",
  },
  {
    name: "Avocado Toast",
    src: "",
    position:
      "left-[44%] top-[62%] w-[26%] aspect-square md:left-[30%] md:top-[66%] md:w-[13%] md:aspect-3/4",
  },
  {
    name: "Nasi Telur Sambal",
    src: "",
    position:
      "right-0 top-[66%] w-[26%] aspect-3/4 md:left-[58%] md:right-auto md:top-[60%] md:w-[15%] md:aspect-square",
  },
  {
    name: "Banana Bread",
    src: "",
    position:
      "left-[40%] top-[80%] w-[30%] aspect-square md:left-auto md:right-[4%] md:top-[50%] md:w-[17%] md:aspect-3/4",
  },
];

function Photo({ photo }) {
  return (
    <div className={`absolute overflow-hidden bg-accent/10 ${photo.position}`}>
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
  return (
    <section
      id="menu"
      className="mt-24  scroll-mt-24 md:mt-40  py-5 px-7 md:px-12"
    >
      <div className="relative aspect-8/15 md:aspect-16/10">
        {photos.map((photo) => (
          <Photo key={photo.name} photo={photo} />
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
