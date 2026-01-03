import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { DroneShowcase } from "@/components/sections/DroneShowcase";
import { Technology } from "@/components/sections/Technology";
import { UseCases } from "@/components/sections/UseCases";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <DroneShowcase />
      <Technology />
      <UseCases />
      <About />
      <Footer />
    </main>
  );
}
