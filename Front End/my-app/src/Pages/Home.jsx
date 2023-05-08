import React from "react";
import { SlideShow } from "../Components/HomePage/SlideshowButton/Slideshow";
import EachDiv from "../Components/HomePage/EachDiv/EachDiv";
import { DisOurFav } from "../Components/HomePage/DisOurFav/DisOurFav";
import { BeautyAdvice } from "../Components/HomePage/BeautyAdvice/BeautyAdvice";
import OneImage from "../Components/HomePage/OneImage/OneImage";
import EachDiv2 from "../Components/HomePage/EachDiv2/EachDiv2";

function Home() {
  return (
    <div>
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
    </div>
  );
}

export default Home;
