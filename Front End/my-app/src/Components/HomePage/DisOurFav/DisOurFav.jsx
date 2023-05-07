import styles from "./DisOurFav.module.css";
// import { OneImage } from './../OneImage/OneImage';

export function MyCard({ src, cap }) {
  return (
    <div
      style={{
        minWidth: "200px",
        // border:"1px solid",
        height: "310px",
        marginRight: "25px",
        color: "white",
        position: "relative",
        marginLeft: "-10px",
      }}
    >
      <img src={src} width="100%" alt="i"/>
      <div
        style={{
          color: "black",
          position: "absolute",
          top: "227px",
          background: "rgba(228,230,231,0.64)",
          display: "block",
          width: "100%",
          height: "40px",
          paddingLeft: "15px",
          paddingTop: "6px",
          fontWeight: "600",
          fontSize: "17px",
          borderBottomLeftRadius:"10px",
          borderBottomRightRadius:"10px",
          textAlign:"center"
        }}
      >
        {cap}
      </div>
    </div>
  );
}

export function DisOurFav() {
  const btnpressprev = () => {
    let box = document.querySelector(".productContainer");
    box.scrollLeft -= 300;
  };

  const btnpressnext = () => {
    let box = document.querySelector(".productContainer");
    box.scrollLeft += 300;
  };

  return (
    <div>
      <div className={styles.productCarousal}>
        <button onClick={btnpressprev} className={styles.preBtn}>
          <p>⇐</p>
        </button>
        <button onClick={btnpressnext} className={styles.nextBtn}>
          <p>⇒</p>
        </button>
        <div
          className="productContainer"
          style={{
            padding: "0 10px",
            display: "flex",
            overflowX: "hidden",
            scrollBehavior: "smooth",
            // border:"1px solid"
          }}
        >
          <MyCard
            src="https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_UY327_FMwebp_QL65_.jpg"
            cap="Mobiles"
          />
          <MyCard
            src="https://cdn1.smartprix.com/rx-iKioqjcyz-w420-h420/asus-zenbook-17-fold.webp"
            cap="Laptops"
          />
          <MyCard
            src="https://m.media-amazon.com/images/I/91NoOjOQOdL._AC_UY327_FMwebp_QL65_.jpg"
            cap="Smart Watchs"
          />
          <MyCard
            src="https://m.media-amazon.com/images/I/31E9pG3jccL._SX300_SY300_QL70_FMwebp_.jpg"
            cap="Headphones"
          />
          <MyCard
            src="https://m.media-amazon.com/images/I/619JAXBeiGL._AC_UL480_FMwebp_QL65_.jpg"
            cap="Medicines"
          />
          <MyCard
            src="https://images-eu.ssl-images-amazon.com/images/I/51Ze303-t7S._AC_SX368_.jpg"
            cap="Books"
          />
          <MyCard
            src="https://m.media-amazon.com/images/I/512ylJKUoDL._SX451_BO1,204,203,200_.jpg"
            cap="Kids zone"
          />
          <MyCard
            src="https://m.media-amazon.com/images/I/41ZulTg4ufS._SY200__AC_SY400_.jpg"
            cap="Accessories"
          />
          <MyCard
            src="https://m.media-amazon.com/images/I/611HIMITCcL._AC_UL480_FMwebp_QL65_.jpg"
            cap="Helmets"
          />
          <MyCard
            src="https://m.media-amazon.com/images/I/71wa1J608AL._AC_UL480_FMwebp_QL65_.jpg"
            cap="Pet foods"
          />
        </div>
      </div>
    </div>
  );
}
