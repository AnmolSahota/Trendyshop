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
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/LoginReducer/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Loginuser() {
  let dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  let location = useLocation();
  const showToastMessage = () => {
    toast.success("Login Success !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showWrong = () => {
    toast.error("Wrong Credential !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handlelogin = () => {
    const obj = {
      email,
      password,
    };
    // anmol@gmail.com
    if (email === "" || password === "") {
      alert("Please fill all the details");
    } else {
      axios
        .post("https://dizzy-yak-sunglasses.cyclic.app/user/login", obj)
        .then((res) => {
          localStorage.setItem("Token", res.data.Token);
          localStorage.setItem("Auth", true);
          let arr = [];
          arr[0] = res.data.user.name.split(" ");
          localStorage.setItem("name", arr[0][0]);
          showToastMessage();

          // alert("login Successfull");
          dispatch(loginSuccess);
          setTimeout(() => {
            navigate(location.state);
          }, 1500);
        })
        .catch((err) => {
          showWrong();
          // alert("Wrong Credential");
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
              <ToastContainer />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
