import { useEffect, useState } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Text,
    Alert,
    AlertIcon,
    Box
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteIcon, ExternalLinkIcon } from "@chakra-ui/icons"
import { deletedata, postdata } from '../../Redux/AdminCRUD/action';
import { Vitamin } from '../../Redux/AdminAlldataReducer/action';
import { Link } from 'react-router-dom';
import { useToast } from "@chakra-ui/react";
const initialProductFormData = {
    title: '',
    price: 0,
    brand: '',
    discountprice: '',
    category: '',
    images: [],
    ratings: 0
};

const AdminPanel = () => {
    const dispatch = useDispatch()
    const [productFormData, setProductFormData] = useState(initialProductFormData);
    const { AdminAlldataReducer, AdminUserData } = useSelector((state) => { return state })
    const { vitamin, ayurveda, teststrip, supliment } = AdminAlldataReducer;
    const [flag, setflag] = useState(false)
    const [deleteflag, setdeletefalg] = useState(false)
    const [addflag, setaddflag] = useState(false)
    const [page, setpage] = useState(1)
    const toast = useToast();

    const handleProductInputChange = (event) => {
        const { name, value } = event.target;
        // let data = name=="images"?[...value] : value

        setProductFormData({ ...productFormData, [name]: value })

        //   setProductFormData([name]:data);

    };



    // console.log(productFormData)

    const handleAddProduct = (event) => {
        event.preventDefault(); // Perform API call to create a new product
        dispatch(postdata(productFormData))
            .then(() => {
                dispatch(Vitamin)

            })

        toast({
            title: "Congrulations",
            description: "item added successfully!!",
            status: "success",
            duration: 1000,
            isClosable: true,
          })
        setProductFormData(initialProductFormData)
        // setProducts([...products, productFormData])
    };


    const handleDeleteProduct = (index) => {
        console.log(index)
        dispatch(deletedata(index))
            .then(() => {
                dispatch(Vitamin)

            })

            toast({
                title: "Congrulations",
                description: "item deleted successfully!!",
                status: "success",
                duration: 1000,
                isClosable: true,
              })
    };

    const handleEditProduct = (index) => {
        setflag(true)
        const filterdata = vitamin.filter((item, i) => {
            return item.id == index
        })
        console.log(filterdata)
        setProductFormData({ ...filterdata[0] })
        // Perform API call to delete the product at index
        // setProducts(products.filter((product, i) => i !== index));
    };

    console.log(vitamin.length)

    return (
        <Stack m={"auto"} mt={"15px"} w={"80%"} >
            <Text style={{ margin: "auto", fontWeight: "bolder", fontSize: "35px" }}>Add A Product</Text>
            <FORM onSubmit={handleAddProduct}>
                <DIV>
                    <FormControl id="title">
                        <FormLabel> Name</FormLabel>
                        <Input
                            border={"1px dotted black"}
                            type="text"
                            name="title"
                            value={productFormData.title}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>
                    <FormControl id="price">
                        <FormLabel>Price</FormLabel>
                        <Input
                            border={"1px dotted black"}
                            type="number"
                            name="price"
                            value={productFormData.price}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>

                    <FormControl id="brand">
                        <FormLabel>brand</FormLabel>
                        <Input
                            border={"1px dotted black"}
                            type="text"
                            name="brand"
                            value={productFormData.brand}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>
                    <FormControl id="discountprice">
                        <FormLabel>Discount Price</FormLabel>
                        <Input
                            border={"1px dotted black"}
                            type="text"
                            name="discountprice"
                            value={productFormData.discountprice}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>

                    <FormControl id="category">
                        <FormLabel>Category</FormLabel>
                        <Input
                            border={"1px dotted black"}
                            type="text"
                            name="category"
                            value={productFormData.category}
                            onChange={handleProductInputChange}

                        />
                    </FormControl>

                    <FormControl id="ratings">
                        <FormLabel>Ratings</FormLabel>
                        <Input
                            border={"1px dotted black"}
                            type="number"
                            name="ratings"
                            value={productFormData.ratings}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>

                    <FormControl id="images">
                        <FormLabel>Image</FormLabel>
                        <Input
                            border={"1px dotted black"}
                            type="text"
                            name="images"
                            value={productFormData.images}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>

                    <FormControl id="desc">
                        <FormLabel>Description</FormLabel>
                        <Input
                            border={"1px dotted black"}
                            type="text"
                            name="desc"
                            value={productFormData.desc}
                            onChange={handleProductInputChange}
                        />
                    </FormControl>
                </DIV>

                <Button style={{ display: "block", margin: "20px auto 0px", width: "600px", backgroundColor: "#283745", color: "white" }} type="submit">Add Product</Button>

            </FORM>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Product Image</Th>
                        <Th>Product Name</Th>
                        <Th>Brand</Th>
                        <Th>Category</Th>
                        <Th>Price</Th>
                        <Th>Discounted Price</Th>
                        <Th>Edit</Th>
                        <Th>Delete</Th>

                    </Tr>
                </Thead>
                <Tbody>
                    {vitamin.length > 0 && vitamin.map((product, index) => (

                        <Tr key={index}>
                            <Td><img src={product?.images || product?.images[0]} alt="" /></Td>
                            <Td>{product.title} </Td>
                            <Td>{product.brand} </Td>
                            <Td> {product.category}</Td>
                            <Td> {product.price}</Td>
                            <Td> {`₹ ${product.discountprice}`}</Td>
                            <Td>
                                <Link to={`/dashboard/singleproductedit/${product.id}`}><button onClick={() => handleEditProduct(product.id)}>
                                    <ExternalLinkIcon boxSize={6} />
                                </button>
                                </Link>
                            </Td>
                            <Td>
                                <button onClick={() => handleDeleteProduct(product.id)}>
                                    <DeleteIcon boxSize={6} />
                                </button>
                            </Td>

                        </Tr>
                    ))}
                </Tbody>
            </Table>
            {/* <Box display={'flex'} margin={"auto"} textAlign={"center"}>
                <Button style={{ display:"block", margin: "10px 10px", width: "300px", backgroundColor: "#FF6F61", color: "white" }} disabled={page == 1} onClick={() => setpage(page - 1)}>Prev</Button>
                <Button disabled style={{display:"block", margin: "10px 10px", border:"1px dotted #FF6F61", width: "100px", backgroundColor: "white", color: "grey" }} >{page}</Button>
                <Button style={{ display:"block",margin: "10px 10px", width: "300px", backgroundColor: "#FF6F61", color: "white" }} onClick={() => setpage(page + 1)}>Next</Button>
            </Box> */}
        </Stack>
    );
};


const DIV = styled.div`

   display: grid;
   grid-template-columns:repeat(2,1fr);  
   gap: 20px;
   margin: auto;

  
   
`

const FORM = styled.form`

box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
padding:25px
    
`

export default AdminPanel