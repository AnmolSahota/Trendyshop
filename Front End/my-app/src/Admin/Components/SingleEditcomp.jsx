import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  Stack,
  Text,
  
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Navigate, useFetcher, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { patchdata } from "../../Redux/AdminCRUD/action";
import { Vitamin } from "../../Redux/AdminAlldataReducer/action";
const initialProductFormData = {
    title: '',
    price: 0,
    brand: '',
    discountprice: '',
    category: '',
    images: [],
    ratings: 0
};
const PatchForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [flag,setflag]=useState(false)
  const [productFormData, setProductFormData] = useState(initialProductFormData);
  const {AdminAlldataReducer,AdminUserData}= useSelector((state)=>{return state}) 
  const{vitamin,ayurveda,teststrip,supliment}=AdminAlldataReducer;
  const dispatch=useDispatch()
  const{id}=useParams()
 const naviagate=useNavigate()

 

  const handleProductInputChange=(event)=>{
    const { name, value } = event.target;   
        setProductFormData({...productFormData, [name]:value})

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send patch request with form data
    dispatch(patchdata(id,productFormData))
    .then(()=> {
        dispatch(Vitamin)
        setflag(true)})
   
  };
  useEffect(()=>{
    let filterdata= vitamin.filter((item)=>{
        return item.id==id
    })
    setProductFormData(filterdata[0])
  },[])
  if(flag){
    return <Navigate to ="/dashboard/editproduct"/>
  }
  
  return (
    <Stack m={"auto"} mt={"15px"} w={"80%"} >
    <Text style={{ fontWeight: "bolder", fontSize: "35px" }}>Edit Product</Text>
    <FORM onSubmit={handleSubmit}>
            <FormControl id="title">
                <FormLabel> Name</FormLabel>
                <Input
                    border={"1px dotted black"}
                    type="text"
                    name="title"
                    value={productFormData?.title}
                    onChange={handleProductInputChange}
                />
            </FormControl>
            <FormControl id="price">
                <FormLabel>Price</FormLabel>
                <Input
                    border={"1px dotted black"}
                    type="number"
                    name="price"
                    value={productFormData?.price}
                    onChange={handleProductInputChange}
                />
            </FormControl>

            <FormControl id="brand">
                <FormLabel>brand</FormLabel>
                <Input
                    border={"1px dotted black"}
                    type="text"
                    name="brand"
                    value={productFormData?.brand}
                    onChange={handleProductInputChange}
                />
            </FormControl>
            <FormControl id="discountprice">
                <FormLabel>Discount Price</FormLabel>
                <Input
                    border={"1px dotted black"}
                    type="text"
                    name="discountprice"
                    value={productFormData?.discountprice}
                    onChange={handleProductInputChange}
                />
            </FormControl>

            <FormControl id="category">
                <FormLabel>Category</FormLabel>
                <Input
                    border={"1px dotted black"}
                    type="text"
                    name="category"
                    value={productFormData?.category}
                    onChange={handleProductInputChange}

                />
            </FormControl>

            <FormControl id="ratings">
                <FormLabel>Ratings</FormLabel>
                <Input
                    border={"1px dotted black"}
                    type="number"
                    name="ratings"
                    value={productFormData?.ratings}
                    onChange={handleProductInputChange}
                />
            </FormControl>

            <FormControl id="images">
                <FormLabel>Image</FormLabel>
                <Input
                    border={"1px dotted black"}
                    type="text"
                    name="images"
                    value={productFormData?.images}
                    onChange={handleProductInputChange}
                />
            </FormControl>

            <FormControl id="desc">
                <FormLabel>Discription</FormLabel>
                <Input
                    border={"1px dotted black"}
                    type="text"
                    name="desc"
                    value={productFormData?.desc}
                    onChange={handleProductInputChange}
                />
            </FormControl>
        
        <Button style={{ marginTop: "20px", width: "300px", backgroundColor: "#FF6F61", color: "white" }} type="submit">Edit Product</Button>
    </FORM>
    </Stack>
  );
};

export default PatchForm;

const FORM = styled.form`

box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
padding:25px
    
`
