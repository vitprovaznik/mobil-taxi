import Image from "next/image";
import TopBar from "@/pages/TopBar";
import Header from "@/pages/Header";
import Hero from "@/pages/Hero";
import About from "@/pages/About";
import Review from "@/pages/Review";
import Services from "@/pages/Services";
import Pricing from "@/pages/Pricing";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Header />
      <Hero />
      <About />
      <Review />
      <Services />
      <Pricing />
    </div>
  );
}
