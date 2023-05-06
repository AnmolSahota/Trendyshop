import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'

  import {AddIcon,MinusIcon } from '@chakra-ui/icons'

  import { Checkbox, CheckboxGroup } from '@chakra-ui/react'


const Sidebar = () => {
  return (
    <>
   <Box w = "80%"> 
    <Accordion allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Sort By Price
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Checkbox>Ascending</Checkbox>
      <Checkbox>Descending</Checkbox>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              Filter By
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Checkbox>Vitamin A</Checkbox>
          <Checkbox>Vitamin B</Checkbox>
          <Checkbox>Vitamin C</Checkbox>
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
</Box>

    </>
  )
}

export default Sidebar