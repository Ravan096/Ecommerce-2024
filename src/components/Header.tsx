import { Box, Container, Heading, Stack, Avatar, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Container border={"1px solid red"} maxW="full"  >
            <Stack direction={"row"} alignItems="center" justifyContent="space-between" border={"1px solid black"} color={"white"}>
                <Box border={"1px solid red"} w={"20%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Heading size="md" color={"black"}>
                        Logo.
                    </Heading>
                </Box>
                <Stack direction={"row"} spacing={6} border={"1px solid red"} w={"70%"} display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}>
                    <Box _hover={{ textDecoration: "none" }}>
                        <Link to={"/"} style={{ textDecoration: "none" }}>
                            <Text color={"black"} >
                                Home
                            </Text>
                        </Link>
                    </Box>
                    <Box>
                        <Link to={"/products"} style={{ textDecoration: "none" }}>
                            <Text color={"black"} >
                                Products
                            </Text>
                        </Link>
                    </Box>
                    <Box>
                        <Link to={"/blog"} style={{ textDecoration: "none" }}>
                            <Text color={"black"} >
                                Blogs
                            </Text>
                        </Link>
                    </Box>
                    <Box>
                        <Link to={"/contact"} style={{ textDecoration: "none" }}>
                            <Text color={"black"} >
                                Contact
                            </Text>
                        </Link>
                    </Box>
                    <Box>
                        <Link to={"/about"} style={{ textDecoration: "none" }}>
                            <Text color={"black"} >
                                About Us
                            </Text>
                        </Link>
                    </Box>
                </Stack>
                <Box color={"black"} border={"1px solid red"} w={"10%"} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                </Box>
            </Stack>
        </Container>
    );
};

export default Header;
