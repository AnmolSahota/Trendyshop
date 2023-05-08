import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
  Tooltip,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import styles from "./Navbar.module.css";
import ButtonLogout from "./ButtonLogout";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import img from "../Assets/trendy1.jpeg";
import NavDrawer from "./NavDrawer";

const NAV_ITEMS = [
  {
    label: "Products",
    href: "/product",
  },
  {
    label: "MiniTV",
    href: "/",
  },
  {
    label: "BestSeller",
    href: "/",
  },
  {
    label: "Mobiles",
    href: "/",
  },
  {
    label: "CustomerService",
    href: "/",
  },

  {
    label: "Electronics",
    href: "/",
  },
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const toast = useToast();

  const logoutSuccess = () => {
    toast({
      title: "Logout Successful.",
      description: "You are Logged out now",
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <>
      <Box position={"sticky"} top={"0px"} zIndex={"1000"}>
        <Flex
          bg={"rgb(19,25,33)"}
          color={useColorModeValue("gray.600", "white")}
          minH={"70px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              <Link to={"/"}>
                <img src={img} alt="img" width={"100px"} />
              </Link>
            </Text>

            <Flex display={{ base: "none", md: "flex", lg: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            {localStorage.getItem("name") ? (
              <>
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  href={"/cart"}
                  color={"black"}
                >
                  <BsFillBagCheckFill style={{ color: "white" }} />
                  <Tooltip
                    label={`You have ${0} items in the cart`}
                    fontSize="md"
                    background="lightgrey"
                    color={"black"}
                  >
                    <span style={{ marginLeft: "4px", color: "white" }}>
                      Cart : {0}
                    </span>
                  </Tooltip>
                </Button>

                <Button className={styles.name}>
                  <span>{localStorage.getItem("name")}</span>
                  <span style={{ marginLeft: "2px" }}>
                    <FaUserCircle />{" "}
                  </span>
                </Button>
                <>
                  <ButtonLogout
                    style={{ marginRight: "10px" }}
                    logout={() => {
                      logoutSuccess();
                      localStorage.clear();
                      window.location.reload();
                    }}
                  />
                </>
              </>
            ) : (
              <>
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  href={"/signin"}
                  color={"white"}
                  // bg={"blue"}
                >
                  Sign In
                </Button>
                <Button
                  border={"1px solid white"}
                  as={"a"}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"black"}
                  href={"/signup"}
                  _hover={{
                    bg: "rgb(64,66,68)",
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
}

const DesktopNav = () => {
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const [query, setQuery] = useState("");
  const [suggation, setSuggation] = useState([]);

  const products = [
    {
      title: "Kapiva Himalayan Shilajit",
      id: 1,
    },
    {
      title: "Zandu Kesari Jivan Chyawanprash",
      id: 2,
    },
    {
      title: "Dabur Chyawanprash Awaleha (Gur)",
      id: 3,
    },
    {
      title: "Delight Nuts California Almond Natural",
      id: 4,
    },
    {
      title: "Kesh King Scalp and Hair Medicine Ayurvedic Oil",
      id: 5,
    },
    {
      title: "Dabur Pudin Hara Pearls",
      id: 6,
    },
    {
      title: "Organic India Flaxseed Oil Veg Capsule",
      id: 7,
    },
    {
      title: "Hamdard Safi Natural Blood Purifier Syrup",
      id: 8,
    },
    {
      title: "Himalaya Wellness Pure Herbs Neem Skin Wellness Tablet",
      id: 9,
    },
    {
      title: "Patanjali Ayurveda Saundarya Aloe Vera Gel",
      id: 10,
    },
    {
      title: "Dabur Badam Tail",
      id: 11,
    },
    {
      title: "Vicks Vaporub",
      id: 12,
    },
    {
      title: "Boroline Cream",
      id: 13,
    },
    {
      title: "Himalaya Neem & Turmeric Soap",
      id: 14,
    },
    {
      title: "Boroplus Doodh Kesar Body Lotion",
      id: 15,
    },
    {
      title: "Dabur Hajmola Imli",
      id: 16,
    },
    {
      title: "Himalaya Liv. 52 Tablet",
      id: 17,
    },
    {
      title: "Eno Fruit Salt Sachet (5gm Each) Lemon",
      id: 18,
    },
    {
      title: "Himalaya Gasex Tablet",
      id: 19,
    },
    {
      title: "Himalaya Wellness Pure Herbs Gokshura Tablet",
      id: 20,
    },
    {
      title: "Hamdard Sualin",
      id: 21,
    },
    {
      title: "Garlic Pearls Capsule",
      id: 22,
    },
    {
      title: "Kayam Tablet",
      id: 23,
    },
    {
      title: "Sat-Isabgol Powder",
      id: 24,
    },
    {
      title: "Vicks Cough Drops Ginger",
      id: 25,
    },
  ];

  useEffect(() => {
    //run some logic
    if (query === "") {
      setSuggation([]);
    } else {
      // console.log(query);
      let newSuggestions = products.filter((item) => {
        return item.title.toLowerCase().indexOf(query) !== -1 ? true : false;
      });
      setSuggation(newSuggestions);
    }
  }, [query]);

  return (
    <Stack direction={"row"} spacing={4} align="center">
      <NavDrawer />
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                to={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                <p
                  className={styles.label}
                  style={{ color: "white", fontWeight: "550" }}
                >
                  {navItem.label}
                </p>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
                bgColor={"black"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        border={"1px solid white"}
        padding={"5px"}
        fontSize={"14px"}
        height={"25px"}
        color={"white"}
        className={styles.searchInput}
        placeholder="Search on TrendyShop"
      />
      {query.length > 0 && (
        <div
          className={styles.searchLogo}
          style={{ marginTop: "4px", color: "white" }}
        >
          <span style={{ cursor: "pointer" }}>
            <RxCross1
              color="white"
              onClick={() => {
                setQuery("");
              }}
              cursor={"pointor"}
            />
          </span>
        </div>
      )}
      {suggation.length > 0 && (
        <Box
          border={"1px solid black transparent"}
          maxH={"200px"}
          position={"absolute"}
          w={"30%"}
          left={"37%"}
          top={"69px"}
          zIndex={"10"}
          bg={"lightgray"}
          borderRadius={"5px"}
          overflow={"hidden scroll"}
          opacity={".9"}
          padding={"10px"}
        >
          {suggation.map((item) => {
            return (
              <Link
                onClick={() => {
                  setQuery("");
                  // window.reload();
                }}
                // to={`/product/${item.id}`}
              >
                <Text textAlign={"center"} color={"black"} cursor={"pointer"}>
                  {item.title}
                </Text>
              </Link>
            );
          })}
        </Box>
      )}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("gray.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            color={"whiteAlpha.600"}
            transition={"all .3s ease"}
            _groupHover={{ color: "white" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text
            fontSize={"sm"}
            color={"whiteAlpha.700"}
            _groupHover={{ color: "white" }}
          >
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"gray.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
