import Image from "next/image";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Review from "@/components/Review";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";

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
