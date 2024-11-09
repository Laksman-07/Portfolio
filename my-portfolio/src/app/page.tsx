import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
export default function Main() {
  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <Footer></Footer>
    </>
  );
}
