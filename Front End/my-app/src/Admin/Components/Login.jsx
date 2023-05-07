import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  Img,
} from '@chakra-ui/react';
import { useState } from 'react';

import gmail from '../images/gmail.png'
import instagram from '../images/instagram.png'
import linkdin from '../images/linkedin.png'
import mypic from '../images/mypic.png'
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { AdminAuthSuccess } from '../../Redux/AdminAuth/action';
const avatars = [
  {
    name: 'Ryan Florence',
    url: mypic,
  },
  {
    name: 'Segun Adebayo',
    url: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Kent Dodds',
    url: 'https://bit.ly/kent-c-dodds',
  },
  {
    name: 'Prosper Otemuyiwa',
    url: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    url: 'https://bit.ly/code-beast',
  },
];

export default function JoinOurTeam() {
  const toast = useToast();
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const nav = useNavigate()
  const dispatch=useDispatch()
  const handlesubmit=()=>{
    if(email=="admin"&&password=="admin"){
      toast({
        title: "Congrulations",
        description: "You are logged in Successfully!!",
        status: "success",
        duration: 1000,
        isClosable: true,
      })
      nav('/dashboard')
      dispatch(AdminAuthSuccess())
    }else{
      toast({
        title: `Wrong Credential`,
        status: "error",
        isClosable: true,
      })

    }
  }
 

  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'5xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            TrendyShop{' '}
            
          </Heading>
          <Stack direction={'row'} spacing={4} align={'center'}>
            <AvatarGroup>

              <Avatar
                src={avatars[0].url}
                size={useBreakpointValue({ base: 'md', md: 'lg' })}
                position={'relative'}
                zIndex={2}
                _before={{
                  content: '""',
                  width: 'full',
                  height: 'full',
                  rounded: 'full',
                  transform: 'scale(1.125)',
                  bgGradient: 'linear(#283745, #3f5d79,#3f5d79)',
                  position: 'absolute',
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}
              />

              <Avatar
                src={avatars[4].url}
                size={useBreakpointValue({ base: 'md', md: 'lg' })}
                position={'relative'}
                zIndex={2}
                _before={{
                  content: '""',
                  width: 'full',
                  height: 'full',
                  rounded: 'full',
                  transform: 'scale(1.125)',
                  bgGradient: 'linear(#283745,#3f5d79,#3f5d79)',
                  position: 'absolute',
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}
              />

              <Avatar
                src={avatars[2].url}
                size={useBreakpointValue({ base: 'md', md: 'lg' })}
                position={'relative'}
                zIndex={2}
                _before={{
                  content: '""',
                  width: 'full',
                  height: 'full',
                  rounded: 'full',
                  transform: 'scale(1.125)',
                  bgGradient: 'linear(#283745,#3f5d79,#3f5d79)',
                  position: 'absolute',
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}
              />


            </AvatarGroup>
            <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              bg={'gray.800'}
              color={'white'}
              rounded={'full'}
              minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
              minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
              position={'relative'}
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: 'linear(#283745,#3f5d79,#3f5d79)',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}>
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              color={'#283745'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Login
              <Text
                as={'span'}
                bgGradient="linear(#283745,#3f5d79,#3f5d79)"
                bgClip="text">
                here
              </Text>
            </Heading>
          </Stack>
          <Box as={'form'} mt={10}>
         
            <Stack spacing={4}>          
              <Input
                placeholder="username/email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                type='password'
                placeholder="password"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
            </Stack>
            <Button
              onClick={handlesubmit}
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(#283745, #3f5d79,#3f5d79)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(#283745, #3f5d79,#3f5d79)',
                boxShadow: 'xl',
              }}>
              Submit
            </Button>
         
          </Box>
          <Box display={"flex"} m={"auto"} justifyContent={"space-evenly"}>
            <Img width={"45px"} src={gmail} alt="" />
            <Img width={"45px"} src={linkdin} alt="" />
            <Img width={"45px"} src={instagram} alt="" />
          </Box>

          <Box display={"flex"} m={"auto"} justifyContent={"space-between"}>
          <a style={{color:"blue"}}href="">Forget your password ?</a>
          <a style={{color:"blue"}}href=""> Create an Account</a>
        
          </Box>

        </Stack>
      </Container>
      <Blur
        position={'absolute'}
        top={-10}
        left={-10}
        style={{ filter: 'blur(70px)' }}
      />
    </Box >
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="71" cy="61" r="111" fill="#283745" />
      <circle cx="244" cy="106" r="139" fill="#27333e" />
      <circle cy="291" r="139" fill="#4c5b68" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#4c5b68" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="##4c5b68" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#4c5b68" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4c5b68" />
    </Icon>
  );
};