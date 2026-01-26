import TopBar from "@/pages/TopBar";
import Header from "@/pages/Header";
import Footer from "@/pages/Footer";
import SLuzby from "@/pages/Sluzby";

export default function Sluzby() {
  return (
    <>
      <TopBar />
      <Header activePage="/sluzby" />
      <SLuzby />
      <Footer />
    </>
  );
}
