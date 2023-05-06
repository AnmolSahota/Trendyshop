import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Img,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Trendyshop from '../images/Trendyshop.png'
import styled from 'styled-components';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setformdata] = useState({})
  const [auth, setauth] = useState(false)
  const navigate = useNavigate();
  const handlechange = (e) => {
    const { name, value } = e.target
    setformdata({ ...formdata, [name]: value })
  }

  const handleclick = (e) => {

    let obj = {
      name: `${formdata.firstname} ${formdata.lastname}`,
      age: formdata.age,
      password: formdata.password,
      gender: formdata.gender,
      email: formdata.email
    }
   console.log(obj.age)
    if (formdata.firstname === "" || formdata.lastname===""  || obj.password === "" || obj.gender === undefined || obj.email === "" || obj.age ==="") {
      alert("Please Fill all the details")

    } else {
      axios.post('https://dizzy-yak-sunglasses.cyclic.app/user/register', obj)
        .then((res) => {
          alert("Account Created")
          navigate('/login')
        })
        .catch((err) => console.log(err))

    }



  }


  // if(auth) {

  //   
  // }



  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Img src={Trendyshop} alt="" />
          <Text fontSize={'lg'} color={'gray.600'}>
            To Create An Account Please Fill the Above Details :
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input name="firstname" onChange={handlechange} type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input name="lastname" onChange={handlechange} type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input name="email" onChange={handlechange} type="email" />
            </FormControl>
            <FormControl id="age" isRequired>
              <FormLabel>Age</FormLabel>
              <Input name="age" onChange={handlechange} type="number" />

            </FormControl>
            <FormControl id="age" isRequired>
              <FormLabel>Gender</FormLabel>
              <DIV>
                <input onChange={handlechange} type="radio" name="gender" value="male" />
                <label htmlFor="">Male</label>
                <input onChange={handlechange} type="radio" name="gender" value="female" />
                <label htmlFor="">Female</label>
                <input onChange={handlechange} type="radio" name="gender" value="other" />
                <label htmlFor="">Others</label>
              </DIV>
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input name="password" onChange={handlechange} type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"#131921"}
                color={"white"}
                _hover={{
                  bg: 'blue.900'
                }}
                onClick={
                  handleclick
                }

              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link to="/login" color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}


const DIV = styled.div`
  input{
    margin:10px
  }
`