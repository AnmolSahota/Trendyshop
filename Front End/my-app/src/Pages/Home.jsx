
import React from "react";
import { SlideShow } from "../Components/HomePage/SlideshowButton/Slideshow";
import EachDiv from "../Components/HomePage/EachDiv/EachDiv";
import { DisOurFav } from "../Components/HomePage/DisOurFav/DisOurFav";
import { BeautyAdvice } from "../Components/HomePage/BeautyAdvice/BeautyAdvice";
import OneImage from "../Components/HomePage/OneImage/OneImage";
import EachDiv2 from "../Components/HomePage/EachDiv2/EachDiv2";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";
import BackToTop from "../Components/BackToTop/BackToTop";


function Home() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <SlideShow />
      <EachDiv />
      <DisOurFav />
      <OneImage />
      <BeautyAdvice />
      <EachDiv2 />
      <div style={{marginTop:'20px'}}>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Mar_23/EMI_marketing/EMI_STORE/how-to-avail-NCEMI.jpg"
          alt="emi" width={"100%"}
        />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default Home;
