import { Box, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/Cart.module.css"

function Description() {
  return (
    <Box m={"20px 0"}>
      <Box>
        <Text fontSize={"24px"} fontWeight={700}>
          More items you may like in apparel
        </Text>
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "repeat(5,20%)" }}
          boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
        >
          <GridItem p={"30px"}>
            <Text h={"150px"} w={"200px"}>
              <Img
                src={
                  "https://images-eu.ssl-images-amazon.com/images/I/81inmkVdKgL._AC_UL160_SR160,160_.jpg"
                }
                width={"100%"}
                height={"100%"}
              ></Img>
            </Text>
            <Text
              fontWeight={500}
              className={`${styles.cartGreen} ${styles.cartUnderLine}`}
            >
              Amazon Brand - Symbol Men's Striped Regular T-Shirt
              (SS20SYMTEE11-C_Grey_S)
            </Text>
            <Text
              color={"gray.500"}
              fontWeight={500}
              display="inline"
              marginRight={"10px"}
            >
              Cocoblu Retail
            </Text>
            <Text color={"teal"} display="inline">
              &#9733;&#9733;&#9733;&#9733;&#9734;
            </Text>
            <Text className={styles.purple} m={"5px 0px"} w={"100px"}>
              #1 Best Seller
            </Text>
            <Text fontWeight={500} display="inline" marginRight={"10px"}>
              ₹299.00
            </Text>
            <Text
              fontWeight={300}
              textDecoration="line-through"
              display="inline"
            >
              M.R.P ₹{4999 + Math.floor(Math.random() * 1000)}
            </Text>
            <Text color={"gray.500"}>Get it by Friday, March 31</Text>
            <Text color={"gray.500"}>FREE Delivery over ₹499.</Text>
            <Text color={"#e47911"}>Fulfilled by Amazon.</Text>
          </GridItem>
        </Grid>
        <Box
          m={"20px 0"}
          p={"10px"}
          boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
        >
          <Text fontSize={"20px"} fontWeight={700} mb={"20px"}>
            Product details
          </Text>
          <Box className={styles.seprateBox}>
            <Text display={"inline"} fontWeight={600}>
              Product Dimensions :
            </Text>
            <span className={styles.parasingle}>
              0.1 x 0.1 x 0.1 cm; 50 Grams
            </span>
          </Box>
          <Box className={styles.seprateBox}>
            <Text display={"inline"} fontWeight={600}>
              Date First Available :
            </Text>
            <span className={styles.parasingle}> 9 April 2022</span>
          </Box>
          <Box className={styles.seprateBox}>
            <Text display={"inline"} fontWeight={600}>
              Manufacturer :
            </Text>
            <span className={styles.parasingle}>Amazon Brand - Symbol</span>
          </Box>
          <Box className={styles.seprateBox}>
            <Text display={"inline"} fontWeight={600}>
              ASIN :
            </Text>
            <span className={styles.parasingle}>B097MM8JP8</span>
          </Box>
          <Box className={styles.seprateBox}>
            <Text display={"inline"} fontWeight={600}>
              Item model number :
            </Text>
            <span className={styles.parasingle}> SYM-P-CD2-D3</span>
          </Box>
          <Box className={styles.seprateBox}>
            <Text display={"inline"} fontWeight={600}>
              Country of Origin :
            </Text>
            <span className={styles.parasingle}> India</span>
          </Box>
          <Box className={styles.seprateBox}>
            <Text display={"inline"} fontWeight={600}>
              Department :
            </Text>
            <span className={styles.parasingle}>
              0.1 x 0.1 x 0.1 cm; 50 Grams
            </span>
          </Box>
          <Box className={styles.seprateBox}>
            <Text display={"inline"} fontWeight={600}>
              Product Dimensions :
            </Text>
            <span className={styles.parasingle}> Men</span>
          </Box>
          <Box className={styles.seprateBox}>
            <Text display={"inline"} fontWeight={600}>
              Manufacturer :
            </Text>
            <span className={styles.parasingle}>
              Amazon Brand - Symbol, CLOUDTAIL INDIA PRIVATE LIMITED, Ground
              Floor, Rear Portion, H-9, Block B-1, Mohan Cooperative Industrial
              Area, Mathura Road, New Delhi-110044
            </span>
          </Box>
          <Box className={styles.seprateBox}>
            <Text display={"inline"} fontWeight={600}>
              Packer :
            </Text>
            <span className={styles.parasingle}>
              CLOUDTAIL INDIA PRIVATE LIMITED, Ground Floor, Rear Portion, H-9,
              Block B-1, Mohan Cooperative Industrial Area, Mathura Road, New
              Delhi-110044
            </span>
          </Box>
          <Box className={styles.seprateBox}>
            <Text display={"inline"} fontWeight={600}>
              Item Weight :
            </Text>
            <span className={styles.parasingle}>50 g</span>
          </Box>
          <Box className={styles.seprateBox}>
            <Text display={"inline"} fontWeight={600}>
              Item Dimensions LxWxH :
            </Text>
            <span className={styles.parasingle}>1 x 1 x 1 Millimeters</span>
          </Box>
          <Box className={styles.seprateBox}>
            <Text display={"inline"} fontWeight={600}>
              Generic Name :
            </Text>
            <span className={styles.parasingle}>Polo Shirt</span>
          </Box>
          <Box className={styles.seprateBox}>
            <Text display={"inline"} fontWeight={600}>
              Customer Reviews :
            </Text>
            <Text display="inline" color="#ffa41c" pl={"5px"}>
              &#9733;&#9733;&#9733;&#9733;&#9734;
            </Text>
          </Box>
        </Box>
      </Box>
      <Box p={"20px"}>
        <Text fontSize={"20px"} fontWeight={700} mb={"20px"}>
          Product description
        </Text>
        <Text fontSize={"14px"}>
          An Amazon brand - Symbol is built on the pillars of quality,
          reliability and affordability to offer you lifestyle essentials that
          never go out of fashion. A favorite season after season, Symbol’s
          everyday polo in our signature fit are a definition of style meets
          comfort. Crafted in quality cotton blend fabric, our Polo’s are soft
          yet durable, and come in a wide assortment of pattern and colors to
          match your personal style. Sport it with one of Symbol’s classic chino
          or denims for a minimal yet stylish look.{" "}
        </Text>
      </Box>
      <Box p={"20px"}>
        <Text fontSize={"24px"} fontWeight={700} mb={"20px"}>
          From the manufacturer
        </Text>
        <Img src="https://m.media-amazon.com/images/S/aplus-media/sota/28908356-f792-486b-aa69-0abfa36641e8.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"></Img>
      </Box>
      <Box p={"20px"}>
        <Text fontSize={"24px"} fontWeight={700} mb={"20px"}>
          Symbol Polo Shirts
        </Text>
        <Img src="https://m.media-amazon.com/images/S/aplus-media/sota/5e51090a-6f0e-4d68-9206-e48436cd0763.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"></Img>
      </Box>
    </Box>
  );
}

export default Description;
