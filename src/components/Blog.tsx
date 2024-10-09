import { Box, Container, Heading, Input, Stack, Text } from "@chakra-ui/react"
import blogtile from '../assets/bg-02.jpg'
import blogimg1 from '../assets/blog-04.jpg.webp'
// import blogimg2 from '../assets/blog-05.jpg.webp'
// import blogimg3 from '../assets/blog-06.jpg.webp'
import { Link } from "react-router-dom"
import { FaLongArrowAltRight } from "react-icons/fa"

const Blog = () => {
    return (
        <Stack border={"1px solid red"}>
            {/* Blog tile start here ---------------------------- */}
            <Container bgImage={blogtile} w={"100%"} h={"25vh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Heading textColor={"white"} fontSize={"xxx-large"}>
                    Blog
                </Heading>
            </Container>
            {/* Blog tile end here ---------------------------- */}


            {/* Blog Contents Start here-------------------------- */}
            <Stack border={"2px solid red"} direction={"row"}>
                <Container border={"1px solid black"} w={"50%"}>
                    <Box>
                        <Box h={"500px"} w={"1000px"}>
                            <img src={blogimg1} alt="" style={{ height: "500px", width: "1000px" }} />
                        </Box>
                        <Box>
                            <Heading>
                                8 Inspiring Ways to Wear Dresses in the Winter
                            </Heading>
                            <Text>
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
                            </Text>
                            <Text>
                                By Admin |
                                StreetStyle, Fashion, Couple |
                                8 Comments
                            </Text>
                            <Link to={""} style={{textDecoration:"none"}}>
                            Continue Reading <FaLongArrowAltRight />
                            </Link>
                        </Box>

                    </Box>
                </Container>

                <Container border={"1px solid black"}>
                    <Box>
                        <Input placeholder="Search"/>
                    </Box>
                </Container>
            </Stack>
            {/* Blog Contents end here-------------------------- */}

        </Stack>
    )
}

export default Blog