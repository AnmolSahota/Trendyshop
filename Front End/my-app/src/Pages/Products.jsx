import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVitamins } from "../Redux/productReducer/action";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Flex,
  Spacer,
  Center,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import Polo from "../Components/Polo";
import { useLocation, useSearchParams } from "react-router-dom";
import styles from "../Styles/Cart.module.css";

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

  console.log(store);
  useEffect(() => {
    dispatch(getVitamins(obj));
  }, [location.search, page]);

  return (
    <>
      <Grid templateColumns="auto auto">
        <Box w="150%" borderRight={"1px solid black"}>
          <Sidebar />
        </Box>

        <Box marginLeft={"15%"} width={"70%"}>
          <Grid templateColumns="repeat(4, 1fr)"  
          position="relative"
          overflow="hidden"
          zIndex={-1}
          overflowX="hidden"
          m={"auto"}
          alignSelf={"center"}
           >
            {store.map((item) => {
              return (
                <GridItem p={"30px"}>
                  <Box
                    h={"auto"}
                    boxShadow="rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"
                    p={"0px 20px "}
                    position="relative"
                    m={"20px"}
                    overflow="hidden"
                    overflowX="hidden"
                    
                  >
                    <Center>
                      <Image src={item.images[0]} ></Image>
                    </Center>
                    <Text noOfLines={1} pt={"2%"} fontWeight={500}
                  fontSize={"14px"}>
                      {item.title}
                    </Text>
                    <Text
                  color={"gray.500"}
                  fontWeight={500}
                  display="inline"
                  marginRight={"10px"}
                  fontSize={"14px"}

                >
                  {item.brand}
                </Text>
                <Text color={"teal"} display="inline">
                  &#9733;&#9733;&#9733;&#9733;&#9734;
                </Text>
                    <Box pt={"10%"}> 
                    <Flex gap="2%" justify={"space-between"}>
                      <Text as={"s"} fontWeight={500}
                  display="inline"
                  marginRight={"10px"}
                  fontSize={"14px"}>
                        <i class="fa fa-rupee"></i>
                        <p>MRP &#x20b9;{item.price}/- </p>{" "}
                      </Text>
                      <Text as={"mark"}  fontWeight={500}
                  display="inline"
                  marginRight={"10px"}
                  fontSize={"14px"}>
                        <p> Dicscount Price &#x20b9;{item.discountprice}/- </p>{" "}
                      </Text>
                    </Flex>
                    </Box>
                    <Text color={"gray.500"} fontSize={"14px"}>
                  FREE Delivery over ₹499.
                </Text>
                <Text color={"#e47911"} fontSize={"14px"}>
                  Fulfilled by Amazon.
                </Text>
                  </Box>
                </GridItem>
              );
            })}
          </Grid>
        </Box>
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
    </>
  );
}

export default Products;
