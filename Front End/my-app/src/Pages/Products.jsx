import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVitamins } from '../Redux/productReducer/action'
import { Box, Grid, GridItem, Image, Flex, Spacer, Center,Text,Divider} from '@chakra-ui/react'
import Sidebar from '../Components/Sidebar'



function Products() {
 const store = useSelector(store=>store.productReducer.products)
 const dispatch = useDispatch()

  console.log(store)
 useEffect(()=>{
  getVitamins(dispatch)
 
 },[])

 

  return (
    <> 

<Grid templateColumns="auto auto" > 
  <Box w="100%" borderRight={"1px solid black"}><Sidebar/></Box>
  

     

    <Box  marginLeft={"2%"}> 
   <Grid templateColumns='repeat(5, 1fr)' gap={20}  > 

   {store.map((item)=>{

    return (
      <GridItem> 
    <Box h={"100%"} boxShadow = "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px">
      <Center> 
       <Image src = {item.images[0]}></Image> 
       </Center>
    <Text noOfLines={1} pt={"2%"}>{item.title}</Text>
    <Flex gap ="2%" justify= {"space-between"} pt="2%"> 
    <Text as={"s"}><i class="fa fa-rupee"></i><p>MRP &#x20b9;{item.price}/- </p> </Text>
     <Text as={"mark"}><p> Dicscount Price &#x20b9;{item.discountprice}/- </p> </Text>
    </Flex>
     
    </Box>
    </GridItem>
    )
   })}

   </Grid>
   </Box>
  
   

 </Grid>
    </>

  
  )
}

export default Products