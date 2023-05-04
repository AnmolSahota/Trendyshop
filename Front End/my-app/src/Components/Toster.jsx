import React from "react";
import { Button, useToast } from "@chakra-ui/react";
    
function Toster() {
  const toast = useToast();
  return (
    <button
      style={{width:"100%"}}
      onClick={() =>
        toast({
          title: "Congrulations",
          description: "Product has been added",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Add to Cart
    </button>
  );
}

export default Toster;