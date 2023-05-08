import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Img,
} from "@chakra-ui/react";
import Trendy from "../images/Trendyshop.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/LoginReducer/action";
export default function Loginuser() {
  let dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const handlelogin = () => {
    const obj = {
      email,
      password,
    };

    if (email === "" || password === "") {
      alert("Please fill all the details");
    } else {
      axios
        .post("https://dizzy-yak-sunglasses.cyclic.app/user/login", obj)
        .then((res) => {
          localStorage.setItem("Token", res.data.Token);
          localStorage.setItem("Auth", true);
          localStorage.setItem("name",res.data.user.name)

          alert("login Successfull");
          dispatch(loginSuccess);
          navigate("/");
        })
        .catch((err) => {
          alert("Wrong Credential");
          console.log(err);
        });
    }
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Img src={Trendy} alt="" />
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input onChange={(e) => setemail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                onChange={(e) => setpassword(e.target.value)}
                type="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"#131921"}
                color={"white"}
                _hover={{
                  bg: "blue.900",
                }}
                onClick={handlelogin}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
