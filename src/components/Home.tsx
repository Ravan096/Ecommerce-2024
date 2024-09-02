import { Box, Button, Container, Heading, List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react";
import img1 from '../assets/bg-02-free-img.jpg';
import img2 from '../assets/img-08-a.jpg';
import img3 from '../assets/slide-02.jpg.webp';
import img4 from '../assets/slide-03.jpg.webp'
import { ArrowForwardIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoFilter } from "react-icons/io5";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const Home = () => {
    const [filteredClick, setFilteredClicked] = useState(false);
    const [searchClick, setSearchClicked] = useState(false);

    const HandleFilter = () => {
        setFilteredClicked(!filteredClick)
    }

    const HandleSearch = () =>{
        setSearchClicked(!searchClick)
    }

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

            <Container>
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
                                <SmallCloseIcon/>
                                :
                                <IoMdSearch />
                            }
                            Search
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Stack>
    )
}

export default Home