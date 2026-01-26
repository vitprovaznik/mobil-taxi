import Image from "next/image";
import TopBar from "@/pages/TopBar";
import Header from "@/pages/Header";
import ONas from "@/pages/ONas";

export default function Onas() {
  return (
    <>
      <TopBar />
      <Header activePage="/onas" />
      <ONas />
    </>
  );
}
