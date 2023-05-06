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

function NocostEmiDrawer() {
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
          1 offers
        </span>
      </Text>

      <Drawer onClose={onClose} isOpen={isOpen} size={{ base: "xs", md: "md" }}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            borderBottomWidth="1px"
            fontSize={"24px"}
            bg={"#f7f7f7"}
          >
            No Cost EMI
          </DrawerHeader>
          <DrawerBody>
            <Box>
              <Text fontWeight={500} mb={"20px"}>
                Special Offers
              </Text>
              <Text fontWeight={700} mb={"20px"} fontSize={"20px"}>
                Avail No Cost EMI on select cards for orders above ₹3000
              </Text>
              <Text fontWeight={500} pb={"20px"} borderBottom="1px solid gray">
                To make this a No Cost EMI offer, interest amount will be
                discounted from the price of your order. Total amount you pay to
                the bank (excluding GST) will be equal to the price of the item.
                Bank may charge you GST only on the interest amount. Certain
                tenures are available on no cost EMI only on down payment.
                Please check EMI plans in payments page for more details.
              </Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NocostEmiDrawer;
