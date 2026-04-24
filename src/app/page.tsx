import Image from "next/image";
import Navbar from "@/UI/components/Navbar/Navbar";
import Homefit from "@/UI/components/Homefit/Homefit";
import Fitness from "@/UI/components/Fitness/Fitness";
import Gallery from "@/UI/components/Gallery/Gallery";
import Footer from "@/UI/components/Footer/Footer";
import Fitnessfine from "@/UI/components/Fitnessfine/Fitnessfine";
import Gymprice from "@/UI/components/Gymprice/Gymprice";
import Fitnesstrainer from "@/UI/components/Fitnesstrainer/Fitnesstrainer";
import Products from "@/UI/components/Products/Products";
export default function Home() {
  return (
  <>
  <Homefit />
  <Fitness/>
  {/* <Gallery/> */}
  <Products/>
  <Fitnessfine/>
  {/* <Gymprice/> */}
  <Fitnesstrainer/>
  </>
  );
}
