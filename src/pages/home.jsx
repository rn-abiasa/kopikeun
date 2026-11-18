import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Menu from "../components/menu";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        <Hero />
        <div className="px-7 md:px-12">
          <About />
          <Menu />
        </div>
      </main>
      <Footer />
    </>
  );
}
