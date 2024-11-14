import { Open_Sans } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

export default function Main() {
  return (
    <main className={openSans.className}>
    <Navbar></Navbar>
    <Home></Home>
    <Footer></Footer>
    </main>
  );
}
