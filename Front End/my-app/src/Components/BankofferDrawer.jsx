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

function BankofferDrawer() {
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
          3 offers
        </span>
      </Text>

      <Drawer onClose={onClose} isOpen={isOpen} size={{ base: "xs", md: "md" }}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" fontSize={"24px"}>
            Bank Offer
          </DrawerHeader>
          <DrawerBody>
            <Box>
              <Text fontWeight={700} mb={"20px"}>
                Offer 1
              </Text>
              <Text fontWeight={500} pb={"20px"} borderBottom="1px solid gray">
                10% Instant Discount up to INR 300 on Federal Bank Debit Card
                Trxns. Minimum purchase value INR 1500
              </Text>
            </Box>
            <Box>
              <Text fontWeight={700} mb={"20px"} pt={"20px"}>
                Offer 2
              </Text>
              <Text fontWeight={500} pb={"20px"} borderBottom="1px solid gray">
                10% Instant Discount up to INR 300 on Federal Bank Credit Card
                Trxns. Minimum purchase value INR 2000
              </Text>
            </Box>
            <Box>
              <Text fontWeight={700} mb={"20px"} pt={"20px"}>
                Offer 3
              </Text>
              <Text fontWeight={500} pb={"20px"} borderBottom="1px solid gray">
                10% Instant Discount up to INR 500 on IDBI Bank Card Trxns. Min
                purchase value INR 2000
              </Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default BankofferDrawer;
