import { Box, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Styles/Cart.module.css";
import Polo from "./Polo";
function SaveLater() {
  let { savelater } = useSelector((state) => state.cartReducer);
  let dispatch = useDispatch();
  let handleDeleteSave = (id) => {};
  let handleMovecart = (el, id) => {};
  return (
    <>
      <Box
        m={"20px"}
        w={{ sm: "100%", md: "72%" }}
        p={"20px"}
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        mb={"40px"}
      >
        <Text className={styles.saveLater}>
          {savelater.length != 0
            ? `Saved for later (${savelater.length} item)`
            : "No items for saved later"}
        </Text>
        <Grid
          gridTemplateColumns={{ sm: "repeat(2,1fr)", md: "repeat(3,1fr)" }}
          gap={6}
        >
          {savelater &&
            savelater.map((el) => {
              return (
                <GridItem border={"1px solid #E0E0E0"} p={"20px"}>
                  <Text height={"200px"} width={"200px"}>
                    <Img src={el.image} height={"100%"} w={"100%"}></Img>
                  </Text>
                  <Box>
                    <Text
                      className={`${styles.cartGreen} ${styles.cartUnderLine}`}
                      fontWeight={500}
                    >
                      {el.description}
                    </Text>
                    <Text className={styles.priceCart}>₹{el.price}</Text>
                    <Text className={styles.cartGreen} fontSize={"14px"}>
                      In stock
                    </Text>
                    <Text className={styles.free} m={"2px 0px"}>
                      Eligible for FREE Shipping
                    </Text>
                    <Text>
                      <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"></img>
                    </Text>
                    <button
                      className={styles.cartbtn}
                      style={{
                        width: "50%",
                        backgroundColor: "#EEEEEE",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        fontWeight: "700",
                        marginBottom: "20px",
                      }}
                      onClick={() => handleMovecart(el, el.id)}
                    >
                      Move to Cart
                    </button>
                    <Text
                      className={`${styles.cartGreen} ${styles.cartUnderLine}`}
                      fontSize={"14px"}
                      color="#007185"
                      onClick={() => handleDeleteSave(el.id)}
                    >
                      Delete
                    </Text>
                  </Box>
                </GridItem>
              );
            })}
        </Grid>
      </Box>
      <Polo />
    </>
  );
}

export default SaveLater;
