import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Index";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar";
import "swiper/css";
import { useGSAP } from "@gsap/react";
import BackToTop from "./components/BackToTop";
import { useEffect, useState } from "react";
import axios from "axios";
import fetchMachineKey from "./api/getMachineKey";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const [data, setData] = useState(null);
  const [machineKey, setMachineKey] = useState("");

  const fetchData = async (machineKey: string) => {
    try {
      const response = await axios.get(
        `https://react.senseware.in/API/IbjaRates/User.aspx?RequestType=APIEsteemedUsers&Machine_Key=${machineKey}&ACCESS_TOKEN=IBJSW3SEA73`
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchAndSetData = async () => {
      let key = await fetchMachineKey();
      if (!key) return;

      setMachineKey(key);
      let result = await fetchData(key);

      if (!result) {
        key = await fetchMachineKey();
        if (!key) return;
        setMachineKey(key);
        result = await fetchData(key);
      }

      setData(result);
    };

    fetchAndSetData();
  }, []);

  console.log(data);

  // useEffect(() => {
  //   const handleContextMenu = (event: MouseEvent) => {
  //     event.preventDefault();
  //   };

  //   document.addEventListener("contextmenu", handleContextMenu);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);

  return (
    <>
      <Navbar />
      {/* <CustomCursor /> */}
      <Preloader />
      <BackToTop />
      <Routes>
        <Route element={<HomePage />} path="/" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
