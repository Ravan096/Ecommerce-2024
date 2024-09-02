import { Box, Container, Heading, Stack, Avatar, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Container border={"1px solid red"} maxW="full">
            <Stack direction={"row"} alignItems="center" justifyContent="space-between"  border={"1px solid black"}>
                <Box>
                    <Heading size="md" color={"black"}>
                        Logo
                    </Heading>
                </Box>
                <Stack direction={"row"} spacing={6}>
                    <Box _hover={ {textDecoration:"none"}}>
                        <Link to={"/"} >
                            <Text color={"black"} textDecoration={"none"}>
                            Home
                            </Text>
                        </Link>
                    </Box>
                    <Box>
                        <Link to={"/about"}  >
                        <Text color={"black"} textDecoration={"none"}>
                            Products
                            </Text>
                        </Link>
                    </Box>
                    <Box>
                        <Link to={"/contact"}  >
                        <Text color={"black"} textDecoration={"none"}>
                            Contact
                            </Text>
                        </Link>
                    </Box>
                    <Box>
                        <Link to={"/products"}  >
                        <Text color={"black"} textDecoration={"none"}>
                            About Us
                            </Text>
                        </Link>
                    </Box>
                </Stack>
                <Box color={"black"} >
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                </Box>
            </Stack>
        </Container>
    );
};

export default Header;
