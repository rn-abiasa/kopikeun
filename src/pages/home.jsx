import Header from "../components/header";
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-background h-screen py-5 px-7">
        <Hero />
      </main>
    </>
  );
}
