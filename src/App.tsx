import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Index";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar";
import "swiper/css";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  return (
    <>
      <Navbar />
      {/* <CustomCursor /> */}
      <Preloader />
      <Routes>
        <Route element={<HomePage />} path="/" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
