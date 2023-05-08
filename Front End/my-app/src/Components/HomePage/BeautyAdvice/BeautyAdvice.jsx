import styles from "./BeautyAdvice.module.css";

function MyCard({ src, cap }) {
  return (
    <div
      style={{
        minWidth: "230px",
        maxWidth: "300px",
        height: "310px",
        marginRight: "25px",
        color: "white",
        position: "relative",
        marginLeft: "-10px",
        border: "1px solid rgb(220,220,220)",
      }}
    >
      <img src={src} width="100%" alt="i" style={
        {height:'80%'}
      } />
      <div
        style={{
          color: "black",
          position: "absolute",
          top: "250px",
          background: "rgba(255,255,255,0.64)",
          display: "block",
          width: "100%",
          height: "40px",
          paddingLeft: "15px",
          paddingTop: "6px",
          fontWeight: "600",
          fontSize: "17px",
        }}
      >
        {cap}
      </div>
    </div>
  );
}

export function BeautyAdvice() {
  const btnpressprev = () => {
    let box = document.querySelector(".productContainer1");
    box.scrollLeft -= 300;
  };

  const btnpressnext = () => {
    let box = document.querySelector(".productContainer1");
    box.scrollLeft += 300;
  };
  return (
    <div>
      <div className={styles.mainDiv}>
        <div className={styles.each}>
          <img
            className={styles.img}
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/LEO/May23ART/LEO_NTA_MOB_Unrec_Stripe.gif"
            alt="i"
          />
          <p className={styles.cap}>
            Catch Up On Top Trends, Expert Advice, Fresh Launches & More
          </p>
          <p className={styles.cap2}>Grab Now</p>
        </div>
        <div className={styles.each}>
          <img
            className={styles.img}
            src="	https://m.media-amazon.com/images/G/31/img15/3rdmay/final/1/978x900GIF_1._CB589368127_.gif"
            alt="i"
            width="100%"
          />
          <p className={styles.cap}>
            Deals are only for you, grab your deals and get exciting offers
          </p>
          <p className={styles.cap2}>Read More</p>
        </div>
      </div>

      <div className={styles.productCarousal}>
        <button onClick={btnpressprev} className={styles.preBtn}>
          <p>⇐</p>
        </button>
        <button onClick={btnpressnext} className={styles.nextBtn}>
          <p>⇒</p>
        </button>
        <div
          className="productContainer1"
          style={{
            padding: "0 10px",
            display: "flex",
            overflowX: "hidden",
            scrollBehavior: "smooth",
          }}
        >
          <MyCard
            src="https://m.media-amazon.com/images/G/31/img22/Kiosk/ME/Exchange_mela_Mini_event_kisok_390x498._CB591139801_.jpg"
            cap="Exchange offers are here"
          />
          <MyCard
            src="	https://m.media-amazon.com/images/G/31/img23/MiniStores/Buy_more_save_more_390x498._CB589729762_.jpg"
            cap="Buy more save more"
          />
          <MyCard
            src="https://m.media-amazon.com/images/G/31/img22/Kiosk/ME/NCEMI_FEST_Mini_event_kisok_390x498._CB591139801_.jpg"
            cap="No cost EMI"
          />
          <MyCard
            src="https://m.media-amazon.com/images/G/31/img23/MiniStores/Clearence_store_390x498._CB589729762_.jpg"
            cap="Biggest clearance sale"
          />
          <MyCard
            src="https://m.media-amazon.com/images/G/31/img22/Kiosk/ME/Combos_Mini_event_kisok_390x498._CB591139801_.jpg"
            cap="More combo more offers"
          />
          <MyCard
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/MayArt23/GW_PC-CC_2X._SY608_CB589490148_.jpg"
            cap="Exciting offers on card"
          />
          <MyCard
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pharmacy/PC_CategoryCard_758X6081x1x_1._SY608_CB589361649_.png"
            cap="20% off on medicine"
          />
          <MyCard
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/gw/peri/hero/PC_CategoryCard_758X608_Acc._SY608_CB589303961_.jpg"
            cap="Lunch new accessories"
          />
        </div>
      </div>
    </div>
  );
}
