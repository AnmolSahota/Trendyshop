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
      <img src={src} width="100%" alt="i" style={{ borderRadius: "10px"}} />
      <div
        style={{
          color: "black",
          position: "absolute",
          top: "227px",
          background: "rgba(124,125,129,0.64)",
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
            src="https://m.media-amazon.com/images/I/51RFTKgvDAL._AC_UY327_FMwebp_QL65_.jpg"
            cap="Laptops"
          />
          <MyCard
            src="https://m.media-amazon.com/images/I/51J+he3I7kL._AC_SR400,600_.jpg"
            cap="Smart Watchs"
          />
          <MyCard
            src="https://images-static.nykaa.com/uploads/144c95cd-e1d3-4b0d-8d5a-a9ecda42e737.jpg?tr=w-240,cm-pad_resize"
            cap="Foundations"
          />
          <MyCard
            src="https://images-static.nykaa.com/uploads/4ea35342-cbb3-44ef-a556-9f1c0f749d93.jpg?tr=w-240,cm-pad_resize"
            cap="Feminine"
          />
          <MyCard
            src="https://images-static.nykaa.com/uploads/0d1737ff-11ae-42e4-95df-937ef71a752b.jpg?tr=w-240,cm-pad_resize"
            cap="More sets"
          />
          <MyCard
            src="https://images-static.nykaa.com/uploads/8d0d6d65-4c38-461a-8fa2-81c43b4e3052.jpg?tr=w-240,cm-pad_resize"
            cap="Eyeliners"
          />
          <MyCard
            src="https://images-static.nykaa.com/uploads/58177876-f4ee-4744-ae45-642ba8b97a4d.jpg?tr=w-240,cm-pad_resize"
            cap="Body Lotions"
          />
          <MyCard
            src="https://images-static.nykaa.com/uploads/c99834e6-8953-41b7-bfe4-a75a84db09a6.jpg?tr=w-240,cm-pad_resize"
            cap="Moisturiser"
          />
          <MyCard
            src="https://images-static.nykaa.com/uploads/144c95cd-e1d3-4b0d-8d5a-a9ecda42e737.jpg?tr=w-240,cm-pad_resize"
            cap="Foundations"
          />
        </div>
      </div>
    </div>
  );
}
