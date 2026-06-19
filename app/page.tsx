import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Rounds from "./components/Rounds";
import Timeline from "./components/Timeline";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050816] via-[#0B1120] to-[#050816] text-white">
      <Navbar />
      <Hero />
      <About />
      <Rounds />
      <Timeline />
    </main>
  );
}