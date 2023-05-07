import React from "react";
import styles from "./OneImage.module.css";

const OneImage = () => {
  return (
    <div className={styles.imageContainer}>
      {/* <div className={styles.imageCont}></div> 
      */}
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Apr_23/MayART/GW_editorial_2300x646._CB590911576_.jpg" alt="" className={styles.image}/>
    </div>
  );
};

export default OneImage;
