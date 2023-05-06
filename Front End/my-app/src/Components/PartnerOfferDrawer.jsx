import { Box, DrawerCloseButton, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import styles from "../Styles/Cart.module.css";

function PartnerOfferDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Text
        fontWeight={600}
        onClick={() => onOpen()}
        cursor={"pointer"}
        fontSize="14px"
      >
        <span className={`${styles.cartGreen} ${styles.cartUnderLine}`}>
          2 offers
        </span>
      </Text>

      <Drawer onClose={onClose} isOpen={isOpen} size={{ base: "xs", md: "md" }}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" fontSize={"24px"}>
            Partner Offers
          </DrawerHeader>
          <DrawerBody>
            <Box>
              <Text fontWeight={700} mb={"20px"}>
                Offer 1
              </Text>
              <Text fontWeight={500} pb={"20px"} borderBottom="1px solid gray">
                Amazon Brands Essential Offer: Buy 2 Get extra 5% Off, Buy 3 or
                more Get extra 7% Of
              </Text>
            </Box>
            <Box>
              <Text fontWeight={700} mb={"20px"} pt={"20px"}>
                Offer 2
              </Text>
              <Text fontWeight={500} pb={"20px"} borderBottom="1px solid gray">
                Get GST invoice and save up to 28% on business purchases. Sign
                up for free
              </Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default PartnerOfferDrawer;
