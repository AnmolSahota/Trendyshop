import { useEffect, useState } from "react";
import styles from "./Slideshow.module.css";
import sale from "../../Assets/sale.jpg";
import bags from "../../Assets/bags.jpg";
import baby from "../../Assets/baby.jpg";
import brandedwatch from "../../Assets/brandedwatch.jpg";
import clean from "../../Assets/clean.jpg";
import trimmer from "../../Assets/trimmer.jpg";
import watch from "../../Assets/watch.jpg";

const image1 = sale;
const image2 = bags;
const image3 = baby;
const image4 = brandedwatch;
const image5 = clean;
const image6 = trimmer;
const image7 = watch;

export function SlideShow() {
  const [selectedImage, setSelectedImage] = useState(0);
  const allImage = [image1, image2, image3, image4, image5, image6, image7];

  useEffect(() => {
    setInterval(() => {
      setSelectedImage((selectedImage) =>
        selectedImage > 4 ? 0 : selectedImage + 1
      );
    }, 4000);
  }, []);

  return (
    <div>
      <div className={styles.mainDiv}>
        <img
          className={styles.img}
          src={allImage[selectedImage]}
          width="100%"
          alt=" img"
        />
        <button
          className={styles.leftButton}
          onClick={() => {
            if (selectedImage > 0) setSelectedImage(selectedImage - 1);
          }}
        >
          ⇐
        </button>
        <button
          className={styles.rightButton}
          onClick={() => {
            if (selectedImage < allImage.length - 1)
              setSelectedImage(selectedImage + 1);
          }}
        >
          ⇒
        </button>
        <div className={styles.name}>Look at our new and trending products<br/>explore our categories to buy more</div>
      </div>
    </div>
  );
}
