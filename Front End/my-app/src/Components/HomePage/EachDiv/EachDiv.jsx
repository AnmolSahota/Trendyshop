import React from "react";
import styles from "./EachDiv.module.css";

const EachDiv = () => {
  return (
    <div className={styles.eachDiv}>
      <div>
        <div>
          <p className={styles.caption}>Sale on Laptop items</p>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/MayART23/MayART_PC_CC_Rev._SY608_CB589314236_.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <div>
          <p className={styles.caption}>Exciting offers with card</p>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/MayArt23/GW_PC-CC_2X._SY608_CB589490148_.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <div>
          <p className={styles.caption}>Accessories sale is here</p>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/gw/peri/hero/PC_CategoryCard_758X608_Acc._SY608_CB589303961_.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <div>
          <p className={styles.caption}>Refurbished product sale</p>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/certified_refurbished/anjaga/MayART23/GWMayART23/PC_CategoryCard_.02._SY608_CB589464891_.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <div>
          <p className={styles.caption}>Sale on Electronics</p>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Sabeer/MAY_ART_Teaser/TCL_Purple_PC_QuadCard_372X2321._SY232_CB592184961_.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <div>
          <p className={styles.caption}>Big savings on kitchen</p>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/MayART/PCQC/PC_QuadCard_372X232_1._SY232_CB590728937_.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <div>
          <p className={styles.caption}>Summer Sale is live</p>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Launchpad/3PA-23/MayART/HL4._SY232_CB589320370_.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <div>
          <p className={styles.caption}>Sale for children zone</p>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Gateway/PB/Desktop/QC/C.title4_baby_AB_PC_QuadCard_372X232._SY232_CB589301339_.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default EachDiv;
