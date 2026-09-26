import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/banner/banner";
import Subscribe from "./components/subscription/Subscribe";
import Testmonials from "./components/Testmonials/Testmonials";
import Footer from "./components/footer/Footer";
import Popup from "./components/popup/Popup";

const App = () => {
  const [orderPopup, setOrderPopUp] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopUp(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-950 dark:text-white duration-300">
      <Navbar handleOrderPopup = {handleOrderPopup} />
      <Hero handleOrderPopup = {handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup = {handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testmonials />
      <Footer />
      <Popup orderPopup = {orderPopup} setOrderPopUp = {setOrderPopUp} />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App