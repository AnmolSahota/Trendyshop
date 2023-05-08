import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVitamins } from "../Redux/productReducer/action";
import {
  Box,
  Grid,
  GridItem,
  Flex,
  Center,
  Text,
  Button,
  Img,
} from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import Polo from "../Components/Polo";
import { useLocation, useSearchParams } from "react-router-dom";
import styles from "../Styles/Cart.module.css";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";
import BackToTop from "../Components/BackToTop/BackToTop";

function Products() {
  const store = useSelector((store) => store.productReducer.products);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const initPage = searchParams.get("page");
  const [page, setPage] = useState(initPage || 1);

  console.log(initPage);
  const handleChange = (payload) => {
    setPage((prev) => prev + payload);
    setSearchParams(page);
  };

  const obj = {
    params: {
      category: searchParams.getAll("category"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
      _page: page,
      _limit: "15",
    },
  };

  // console.log(store);
  useEffect(() => {
    // dispatch(getVitamins(obj));
  }, [location.search, page]);

  return (
    <>
      <Navbar />
      <Navbar2 />

      <DIV>
        <Grid templateColumns="auto auto">
          <Box>
            <Sidebar />
          </Box>
          {/* <NavLink to={`/singleproduct/vitamin/1`}> */}
          <Box width={"100%"}>
            <Grid
              templateColumns="repeat(4, 1fr)"
              position="relative"
              m={"auto"}
              alignSelf={"center"}
            >
              {store.map((el) => {
                return (
                  <NEWDIV>
                    <Link to={`/singleproduct/vitamin/${el.id}`}>
                      <GridItem className="zoom" mt={"20%"} p={"30px"}>
                        <Text h={"150px"} w={"150px"}>
                          <Img
                            src={el.images[0]}
                            width={"100%"}
                            height={"100%"}
                          ></Img>
                        </Text>
                        <Text
                          fontWeight={500}
                          fontSize={"14px"}
                          className={`${styles.cartGreen} ${styles.cartUnderLine}`}
                        >
                          {el.title}
                        </Text>
                        <Text
                          color={"gray.500"}
                          fontWeight={500}
                          display="inline"
                          marginRight={"10px"}
                          fontSize={"14px"}
                        >
                          {el.brand}
                        </Text>
                        <Text color={"teal"} display="inline">
                          &#9733;&#9733;&#9733;&#9733;&#9734;
                        </Text>
                        {/* <Text
                  className={styles.purple}
                  m={"5px 0px"}
                  w={"100px"}
                >
                  #1 Best Seller
                </Text> */}
                        <br />
                        <Text
                          fontWeight={500}
                          display="inline"
                          marginRight={"10px"}
                          fontSize={"14px"}
                        >
                          ₹{el.price}
                        </Text>
                        <Text
                          fontWeight={300}
                          textDecoration="line-through"
                          display="inline"
                          fontSize={"14px"}
                        >
                          M.R.P ₹{4999 + Math.floor(Math.random() * 1000)}
                        </Text>
                        {/* <Text color={"gray.500"}>Get it by Friday, March 31</Text> */}
                        <Text color={"gray.500"} fontSize={"14px"}>
                          FREE Delivery over ₹499.
                        </Text>
                        <Text color={"#e47911"} fontSize={"14px"}>
                          Fulfilled by Trendyshop.
                        </Text>
                      </GridItem>
                    </Link>
                  </NEWDIV>
                );
              })}
            </Grid>
          </Box>
          {/* </NavLink> */}
        </Grid>
        <Center>
          <Flex gap={"20px"} mt={"2%"}>
            <Button
              onClick={() => handleChange(-1)}
              isDisabled={page == 1 ? true : false}
            >
              Prev
            </Button>
            <Text fontSize={"20px"} pt={"3px"}>
              {page}
            </Text>
            <Button onClick={() => handleChange(+1)}>Next</Button>
          </Flex>
        </Center>
        <Polo />
      </DIV>
      <Footer />
      <BackToTop />
    </>
  );
}

const DIV = styled.div`
  width: 90%;
  margin: auto;
`;

const NEWDIV = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  .zoom {
    transition: transform 0.2s;
  }
  .zoom:hover {
    transform: scale(1.1);
  }
`;
export default Products;
