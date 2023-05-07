import {
  Box,
  Grid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";
function SingleProductLoading() {
  return (
    <>
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", md: "70% 1fr" }}
        gap={3}
        p={"20px"}
      >
        <Box>
          <Grid gridTemplateColumns={"20% 1fr"}>
            {new Array(2).fill(0).map((ele) => (
              <Box
                key={Math.random()}
                padding="1"
                height={"100vh"}
                bg="white"
              >
                <Skeleton height="100vh" />
              </Box>
            ))}
          </Grid>
        </Box>
        <Box
          padding="30"
          bg="white"
          h={"100vh"}
          display={{ base: "none", md: "block" }}
        >
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
      </Grid>
    </>
  );
}

export default SingleProductLoading;
