import React, { useEffect, useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initState = searchParams.getAll("category");
  const initOrder = searchParams.getAll("order");
  const [category, setCategory] = useState(initState || "");
  const [order, setOrder] = useState(initOrder || "");

  const handleChange = (e) => {
    let newVitamin = [...category];
    if (category.includes(e.target.name)) {
      newVitamin = newVitamin.filter((el) => el !== e.target.name);
    } else {
      newVitamin.push(e.target.name);
    }

    setCategory(newVitamin);
  };

  useEffect(() => {
    let params = {
      category,
    };
    order && (params.order = order);

    setSearchParams(params);
  }, [category, order]);
  return (
    <>
      <Box w="100%">
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" w={"100%"}>
                  Sort By Price
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4} w={"30%"}>
              <Checkbox
                name="asc"
                onChange={(e) =>
                  order == "asc" ? setOrder("") : setOrder(e.target.name)
                }
                isChecked={order == "asc" ? true : false}
              >
                Ascending
              </Checkbox>
              <Checkbox
                name="desc"
                onChange={(e) =>
                  order == "desc" ? setOrder("") : setOrder(e.target.name)
                }
                isChecked={order == "desc" ? true : false}
              >
                Descending
              </Checkbox>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" w={"100%"}>
                      Filter By
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>
                {/* <Checkbox>Vitamin C</Checkbox> */}
                <AccordionPanel pb={4} w={"30%"}>
                  <Checkbox
                    name={"Vitamin A"}
                    onChange={handleChange}
                    isChecked={category.includes("Vitamin A") ? true : false}
                  >
                    Vitamin A
                  </Checkbox>
                  <Checkbox
                    name={"Vitamin B"}
                    onChange={handleChange}
                    isChecked={category.includes("Vitamin B") ? true : false}
                  >
                    Vitamin B
                  </Checkbox>
                  <Checkbox
                    name={"Vitamin C"}
                    onChange={handleChange}
                    isChecked={category.includes("Vitamin C") ? true : false}
                  >
                    Vitamin C
                  </Checkbox>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};

export default Sidebar;
