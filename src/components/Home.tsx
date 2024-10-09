import { ArrowForwardIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Heading, HStack, IconButton, Input, List, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, Select, Stack, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/bg-02-free-img.jpg';
import img2 from '../assets/img-08-a.jpg';
import prodimg1 from "../assets/product-01.jpg.webp";
import prodimg2 from "../assets/product-02.jpg.webp";
import prodimg3 from "../assets/product-03.jpg.webp";
import prodimg4 from "../assets/product-04.jpg.webp";
import prodimg5 from "../assets/product-05.jpg.webp";
import prodimg6 from "../assets/product-06.jpg.webp";
import prodimg7 from "../assets/product-07.jpg.webp";
import prodimg8 from "../assets/product-08.jpg.webp";
import prodimg9 from "../assets/product-09.jpg.webp";
import prodimg10 from "../assets/product-10.jpg.webp";
import prodimg11 from "../assets/product-11.jpg.webp";
import prodimg12 from "../assets/product-12.jpg.webp";
import prodimg13 from "../assets/product-13.jpg.webp";
import prodimg14 from "../assets/product-14.jpg.webp";
import prodimg15 from "../assets/product-15.jpg.webp";
import prodimg16 from "../assets/product-16.jpg.webp";
import img3 from '../assets/slide-02.jpg.webp';
import img4 from '../assets/slide-03.jpg.webp';
import banner1 from "./../assets/banner-01.jpg.webp";
import banner2 from "./../assets/banner-02.jpg.webp";
import banner3 from "./../assets/banner-03.jpg.webp";

const Home = () => {
    const [filteredClick, setFilteredClicked] = useState(false);
    const [searchClick, setSearchClicked] = useState(false);
    const { isOpen, onClose, onOpen } = useDisclosure();

    const ProdData = [
        {
            id: 1,
            name: "Esprit Ruffle Shirt",
            price: 16.64,
            image: prodimg1,
            category: "female",
            description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."
        },
        {
            id: 2,
            name: "Herschel supply",
            price: 35.31,
            image: prodimg2,
            category: "female",
            description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."
        },
        {
            id: 3,
            name: "Only Check Trouser",
            price: 25.50,
            image: prodimg3,
            category: "male",
            description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."
        },
        {
            id: 4,
            name: "Classic Trench Coat",
            price: 75.00,
            image: prodimg4,
            category: "female",
            description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."
        },
        {
            id: 5,
            name: "Front Pocket Jumper",
            price: 34.75,
            image: prodimg5,
            category: "female",
            description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."
        },
        {
            id: 6,
            name: "Vintage Inspired Classic",
            price: 93.20,
            image: prodimg6,
            category: "watch",
            description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."
        },
        {
            id: 7,
            name: "Shirt in Stretch Cotton",
            price: 52.66,
            image: prodimg7,
            category: "female",
            description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."
        },
        {
            id: 8,
            name: "Pieces Metallic Printed",
            price: 18.96,
            image: prodimg8,
            category: "female",
            description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."
        },
        {
            id: 9,
            name: "Shirt in Stretch Cotton",
            price: 52.66,
            image: prodimg9,
            category: "male",
            description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."
        },
        {
            id: 10,
            name: "Converse All Star Hi Plimsolls",
            price: 75.00,
            image: prodimg10,
            category: "shoe",
            description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."
        },
        {
            id: 11,
            name: "Femme T-Shirt In Stripe",
            price: 25.85,
            image: prodimg11,
            category: "female",
            description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."
        },
        {
            id: 12,
            name: "Herschel supply",
            price: 63.16,
            image: prodimg12,
            category: "male",
            description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."
        },
        {
            id: 13,
            name: "T-Shirt with Sleeve",
            price: 18.49,
            image: prodimg13,
            category: "female",
            description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."
        },
        {
            id: 14,
            name: "Pretty Little Thing",
            price: 54.79,
            category: "female",
            image: prodimg14,
            description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."
        },
        {
            id: 15,
            name: "Mini Silver Mesh Watch",
            price: 86.85,
            image: prodimg15,
            category: "female",
            description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."
        },
        {
            id: 16,
            name: "Square Neck Back",
            price: 29.64,
            image: prodimg16,
            category: "female",
            description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."
        },

    ];

    const HandleFilter = () => {
        setFilteredClicked(!filteredClick)
    }

    const HandleSearch = () => {
        setSearchClicked(!searchClick)
    }

    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

    const product = {
        name: "Lightweight Jacket",
        price: "58.79",
        description:
            "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
        image: img2,
        thumbnails: [
            img3,
            img2,
            img3
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Blue", "Gray"]
    };

    return (
        <Stack border={"1px solid greenyellow"}>
            <Container>
                <Carousel
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    transitionTime={500}
                    showThumbs={false}
                    showStatus={false}
                    stopOnHover={false}
                    swipeable={true}
                >
                    <Box bgImage={img2} h={"90vh"} backgroundSize={"contain"} objectFit={"contain"}>
                        <Text>
                            Kids Toy Collections
                        </Text>
                        <Heading>
                            Toys Collections 2024
                        </Heading>
                        <Text>
                            A specialist label creating toys. Ethically Crafted with
                            an unwavering commintment to exceptional quality.
                        </Text>
                        <Button>
                            Shop Now <ArrowForwardIcon />
                        </Button>
                    </Box>
                    <Box bgImage={img3} h={"90vh"} backgroundSize={"contain"} objectFit={"contain"}>
                        <Text>
                            Men Collection 2024
                        </Text>
                        <Heading>
                            New Arrivals
                        </Heading>
                        <Button>
                            Shop Now <ArrowForwardIcon />
                        </Button>
                    </Box>
                    <Box bgImage={img4} h={"90vh"} backgroundSize={"contain"} objectFit={"contain"}>
                        <Text>
                            Kids Toy Collections
                        </Text>
                        <Heading>
                            Toys Collections 2024
                        </Heading>
                        <Text>
                            A specialist label creating toys. Ethically Crafted with
                            an unwavering commintment to exceptional quality.
                        </Text>
                        <Button>
                            Shop Now <ArrowForwardIcon />
                        </Button>
                    </Box>
                    <Box bgImage={img1} h={"90vh"} backgroundSize={"contain"} objectFit={"contain"}>
                        <Text>
                            Kids Toy Collections
                        </Text>
                        <Heading>
                            Toys Collections 2024
                        </Heading>
                        <Text>
                            A specialist label creating toys. Ethically Crafted with
                            an unwavering commintment to exceptional quality.
                        </Text>
                        <Button>
                            Shop Now <ArrowForwardIcon />
                        </Button>
                    </Box>
                </Carousel>

            </Container>


            <Container border={"2px solid green"} h={'50vh'} w={'100%'} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Stack direction={'row'} h={"70%"} w={"75%"} m={"auto"} justifyContent={"space-around"}>
                    <Box
                        bgImage={banner1}
                        h={"100%"} w={'33.3%'}
                        backgroundSize={"cover"}
                        backgroundPosition={"center"}
                        objectFit={"contain"}
                        border={"1px solid #d6d6d6"}
                        position={"relative"}
                        _hover={{
                            cursor: "pointer",
                            "&::before": {
                                opacity: 1, // Show the blue overlay on hover
                            },
                            ".shop-now": { // Target the button on hover
                                opacity: 1,
                                transform: "translateY(0)", // Bring the text into view
                            }
                        }}
                        _before={{
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 255, 0.3)",
                            transition: "opacity 0.4s ease-in-out",
                            opacity: 0,
                            zIndex: 1,
                        }}
                    >
                        <Heading>
                            Women
                        </Heading>
                        <Text>
                            Spring 2024
                        </Text>
                        <Box
                            as="span"
                            className="shop-now"
                            position={"relative"}
                            bottom={"20px"}
                            left={"10%"}
                            top={"50%"}
                            // transform={"translateX(-50%) translateY(10px)"} // Initially move it out of view
                            opacity={0} // Hidden initially
                            fontWeight={"bold"}
                            color={"white"}
                            borderBottom={"3px solid white"}
                            transition={"opacity 0.4s ease, transform 0.4s ease, border-bottom 0.4s ease"}
                            zIndex={2} // Ensure it stays on top of the blue overlay
                            textColor={"white"}
                        >
                            Shop Now
                        </Box>
                    </Box>
                    <Box
                        bgImage={banner2}
                        h={"100%"} w={'33%'}
                        backgroundSize={"cover"}
                        backgroundPosition={"center"}
                        objectFit={"contain"}
                        border={"1px solid #d6d6d6"}
                        position={"relative"}
                        _hover={{
                            cursor: "pointer",
                            "&::before": {
                                opacity: 1, // Show the blue overlay on hover
                            },
                            ".shop-now": { // Target the button on hover
                                opacity: 1,
                                transform: "translateY(0)", // Bring the text into view
                            }
                        }}
                        _before={{
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 255, 0.3)",
                            transition: "opacity 0.4s ease-in-out",
                            opacity: 0,
                            zIndex: 1,
                        }}
                    >
                        <Heading>
                            Men
                        </Heading>
                        <Text>
                            Spring 2024
                        </Text>
                        <Box
                            as="span"
                            className="shop-now"
                            position={"absolute"}
                            bottom={"20px"}
                            left={"10%"}
                            // top={"50%"}
                            // transform={"translateX(-50%) translateY(10px)"} // Initially move it out of view
                            opacity={0} // Hidden initially
                            fontWeight={"bold"}
                            color={"white"}
                            borderBottom={"3px solid white"}
                            transition={"opacity 0.4s ease, transform 0.4s ease, border-bottom 0.4s ease"}
                            zIndex={2} // Ensure it stays on top of the blue overlay
                            textColor={"white"}
                        >
                            Shop Now
                        </Box>
                    </Box>
                    <Box
                        bgImage={banner3}
                        h={"100%"} w={'33%'}
                        backgroundSize={"cover"}
                        backgroundPosition={"center"}
                        objectFit={"contain"}
                        border={"1px solid #d6d6d6"}
                        position={"relative"}
                        _hover={{
                            cursor: "pointer",
                            "&::before": {
                                opacity: 1, // Show the blue overlay on hover
                            },
                            ".shop-now": { // Target the button on hover
                                opacity: 1,
                                transform: "translateY(0)", // Bring the text into view
                            }
                        }}
                        _before={{
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 255, 0.3)",
                            transition: "opacity 0.4s ease-in-out",
                            opacity: 0,
                            zIndex: 1,
                        }}
                    >
                        <Heading>
                            Accessories
                        </Heading>
                        <Text>
                            New Trend
                        </Text>
                        <Box
                            as="span"
                            className="shop-now"
                            position={"absolute"}
                            bottom={"20px"}
                            left={"10%"}
                            // top={"50%"}
                            // transform={"translateX(-50%) translateY(10px)"} // Initially move it out of view
                            opacity={0} // Hidden initially
                            fontWeight={"bold"}
                            color={"white"}
                            borderBottom={"3px solid white"}
                            transition={"opacity 0.4s ease, transform 0.4s ease, border-bottom 0.4s ease"}
                            zIndex={2} // Ensure it stays on top of the blue overlay
                            textColor={"white"}
                        >
                            Shop Now
                        </Box>
                    </Box>
                </Stack>
            </Container>

            <Container>
                <Stack direction={"row"}>
                    <Box>
                        <Heading>
                            Products Overview
                        </Heading>
                    </Box>
                    <Box border={"1px solid red"}>
                        <List display={"flex"}>
                            <ListItem>
                                All Products
                            </ListItem>
                            <ListItem>
                                Men
                            </ListItem>
                            <ListItem>
                                Women
                            </ListItem>
                            <ListItem>
                                Mobiles
                            </ListItem>
                            <ListItem>
                                Shoes
                            </ListItem>
                            <ListItem>
                                Watches
                            </ListItem>
                        </List>
                        <Box display={"flex"}>
                            <Button onClick={HandleFilter}>
                                {
                                    filteredClick ?
                                        <SmallCloseIcon />
                                        :
                                        <IoFilter />
                                }
                                Filter
                            </Button>
                            <Button onClick={HandleSearch}>
                                {
                                    searchClick ?
                                        <SmallCloseIcon />
                                        :
                                        <IoMdSearch />
                                }
                                Search
                            </Button>
                        </Box>
                    </Box>
                </Stack>
                <Stack border={"2px solid greenyellow"} w={"100%"}>
                    <Stack direction={"row"} display={"flex"} flexWrap={"wrap"} justifyContent={"space-around"} w={"70%"} m={"auto"}>
                        {
                            ProdData.map((i) => (
                                <Box
                                    key={i.id}
                                    border={"1px solid gray"}
                                    h={"50vh"}
                                    _hover={{
                                        cursor: "pointer"
                                    }}
                                    w={"16vw"}>
                                    <Box h={"80%"} w={"100%"} _hover={{
                                        cursor: "pointer",
                                        "&::before": {
                                            opacity: 1, // Show the blue overlay on hover
                                        },
                                        ".shop-now": { // Target the button on hover
                                            opacity: 1,
                                            transform: "translateY(0)", // Bring the text into view
                                        }
                                    }}>
                                        <img src={i.image} alt={i.name} style={{ objectFit: "fill", height: "100%", width: "100%" }} />
                                    </Box>
                                    <Box>
                                        <Button
                                            colorScheme="purple"
                                            onClick={onOpen}
                                        >
                                            QuickView
                                        </Button>
                                    </Box>
                                    <Box h={"20%"} w={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                                        <Box border={"1px solid black"} h={"100%"} w={"90%"}>
                                            <Text color={"grey"}>
                                                {i.name}
                                            </Text>
                                            <Text >
                                                {`$${i.price}`}
                                            </Text>
                                        </Box>
                                        <Box border={"1px solid black"} h={"100%"} w={"10%"} display={"flex"} justifyContent={"flex-end"}>
                                            <CiHeart size={32} color="grey" />
                                        </Box>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Stack>
                </Stack>
            </Container>

            {/*----------------quick view modal-------------------------- */}
            <Modal isOpen={isOpen} onClose={onClose} size="4xl">
                <ModalContent
                    w="100%"
                    h="100%"
                    margin="auto"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    zIndex={"1600"}>
                    <ModalBody bg="white">
                        <HStack spacing={8} border={"4px solid purple"} h={"100%"} w={"100%"}>

                            <ModalCloseButton position="absolute"
                                top="10px"
                                right="300px"
                                h="40px"
                                w="40px"
                                m={2}
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                zIndex="2" />
                            {/* Left Section: Image and Carousel */}
                            <HStack width="50%" border={"2px solid black"}>

                                {/* Thumbnails for other product images (simulating a carousel) */}
                                <VStack mt={4} spacing={4} w={"20%"} >
                                    {product.thumbnails.map((img, index) => (
                                        <Box border={"1px solid gray"} borderRadius={"10px"} h={"150Px"} w={"100px"}>
                                        <img
                                            style={{ boxSizing: "border-box", objectFit: "contain", height: "150px", width: "100px" }}
                                            key={index}
                                            src={img}
                                            alt={`Thumbnail ${index + 1}`}
                                        />
                                        </Box>
                                    ))}
                                </VStack>
                                <VStack w={"80%"}>
                                    <img src={img2} alt="" style={{objectFit:"contain", height:"400px"}} />
                                </VStack>


                            </HStack>

                            {/* Right Section: Product Details */}
                            <VStack align="flex-start" width="50%" spacing={4}>
                                <Text fontSize="2xl" fontWeight="bold">
                                    {product.name}
                                </Text>
                                <Text fontSize="xl" color="gray.500">
                                    ${product.price}
                                </Text>
                                <Text color="gray.600">{product.description}</Text>

                                {/* Size and Color Dropdowns */}
                                <HStack spacing={4} w="100%">
                                    <Box w="50%">
                                        <Text>Size</Text>
                                        <Select placeholder="Choose an option">
                                            {product.sizes.map((size) => (
                                                <option key={size} value={size}>
                                                    {size}
                                                </option>
                                            ))}
                                        </Select>
                                    </Box>
                                    <Box w="50%">
                                        <Text>Color</Text>
                                        <Select placeholder="Choose an option">
                                            {product.colors.map((color) => (
                                                <option key={color} value={color}>
                                                    {color}
                                                </option>
                                            ))}
                                        </Select>
                                    </Box>
                                </HStack>

                                {/* Quantity Selector */}
                                <HStack>
                                    <IconButton
                                        icon={<FiMinus />}
                                        onClick={decreaseQuantity}
                                        aria-label="Decrease quantity"
                                    />
                                    <Input
                                        value={quantity}
                                        readOnly
                                        w="50px"
                                        textAlign="center"
                                    />
                                    <IconButton
                                        icon={<FiPlus />}
                                        onClick={increaseQuantity}
                                        aria-label="Increase quantity"
                                    />
                                </HStack>

                                {/* Add to Cart Button */}
                                <Button colorScheme="purple" w="100%">
                                    ADD TO CART
                                </Button>

                                {/* Social Icons */}
                                <HStack spacing={4} pt={4}>
                                    <Box as="span" className="icon">
                                        ❤️ {/* Favorite Icon */}
                                    </Box>
                                    <Box as="span" className="icon">
                                        🐦 {/* Twitter */}
                                    </Box>
                                    <Box as="span" className="icon">
                                        📘 {/* Facebook */}
                                    </Box>
                                    <Box as="span" className="icon">
                                        🔗 {/* Google+ */}
                                    </Box>
                                </HStack>
                            </VStack>
                        </HStack>
                    </ModalBody>
                </ModalContent>
            </Modal>

        </Stack>
    )
}

export default Home