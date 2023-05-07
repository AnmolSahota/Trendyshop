import { Box, Flex, Heading, SimpleGrid, Stat, StatLabel, StatNumber, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
// import { userLogin } from "../../Redux/AuthReducer/action";

import PieChartComponent from "./Piechart";
import { Adminuserdata } from "../../Redux/AdminUserReducer/action";
import { Ayurveda, Supliment, Teststrip, Vitamin } from "../../Redux/AdminAlldataReducer/action";

const Dash = () => {
   const dispatch = useDispatch()
    const {AdminAlldataReducer,AdminUserData}= useSelector((state)=>{return state})
  
   const{vitamin,ayurveda,teststrip,supliment}=AdminAlldataReducer;
   const {userdata}=AdminUserData 
   let count=1
   for(let key in AdminUserData){
     count++
   }
   useEffect(()=>{
    let a=  dispatch(Adminuserdata)
    let b=  dispatch(Vitamin)
    let c=  dispatch(Ayurveda)
    let d=  dispatch(Supliment)
    let e=  dispatch(Teststrip)
    Promise.all([a,b,c,d,e])
    },[])

  return (
    <Box p="6">
      <Heading textAlign={"center"} as="h1" mb="6">
        Dashboard
      </Heading>
      <SimpleGrid textAlign={"center"} columns={{ base: 1, sm: 2, md: 3 }} spacing="6">
        <Stat>
          <StatLabel>Total Users</StatLabel>
          <StatNumber>{userdata.length}</StatNumber>
          <Text fontSize="sm">+2% from last week</Text>
        </Stat>
        <Stat>
          <StatLabel>Total Products</StatLabel>
          <StatNumber>{vitamin.length+ayurveda.length+teststrip.length+supliment.length}</StatNumber>
          <Text fontSize="sm">+5% from last week</Text>
        </Stat>
        <Stat>
          <StatLabel>Total Category</StatLabel>
          <StatNumber>{count}</StatNumber>
          <Text fontSize="sm">+10% from last week</Text>
        </Stat>
      </SimpleGrid>
      <Flex textAlign={"center"} mt="6" flexDirection={{ base: "column", md: "row" }}>
        <Box flex="1" bg="white" p="6" borderRadius="md" boxShadow="md">
          <Heading as="h2" size="md" mb="6">
            Order History
          </Heading>
          <SimpleGrid columns={1} spacing={4}>
            <Box bg="#283745" p="4" borderRadius="md">
              <Text  color={"white"} fontWeight="bold">Order #12345</Text>
              <Text  color={"white"} fontSize="sm">Lorem ipsum dolor sit amet</Text>
              <Text  color={"white"} fontSize="sm" fontWeight="bold">
                $1,000
              </Text>
            </Box>
            <Box bg="#283745" color="white" p="4" borderRadius="md">
              <Text fontWeight="bold">Order #23456</Text>
              <Text fontSize="sm">Lorem ipsum dolor sit amet</Text>
              <Text fontSize="sm" fontWeight="bold">
                $2,000
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
        <Box w="50%" textAlign="center"  flex="1" bg="white" p="6" borderRadius="md" boxShadow="md">
          <Heading as="h2" size="md" mb="6">
            Pie Chart
          </Heading>
          <SimpleGrid  ml="170px" columns={1} spacing={4}>
            <PieChartComponent />
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Dash;
