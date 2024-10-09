import { Box, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import aboutimgbg from '../assets/about_images/bg-01.jpg.webp';
import aboutimg1 from '../assets/about_images/about-01.jpg.webp';
import aboutimg2 from '../assets/about_images/about-02.jpg.webp';


const About = () => {

    const about1text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879"
    const about2text = "Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis."
    const about2styText = "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while."
    return (
        <Stack border={"2px solid red"}>

            <HStack backgroundImage={aboutimgbg} backgroundSize={"cover"} backgroundRepeat={"no-repeat"} backgroundPosition={"center"} h={"200px"}>
                <Heading textColor={"white"} textAlign={"center"} w={"100%"} fontSize={"xxx-large"}>
                    About
                </Heading>
            </HStack>

            <VStack border={"1px solid red"} w={"80%"} m={"auto"} p={4}>

                <Box display={"flex"}>
                    <Box>
                        <Heading>
                            Our Story
                        </Heading>
                        <Text>
                            {about1text}
                        </Text>
                    </Box>

                    <Box position={"relative"} h={"450px"} w={"450px"} >
                        <Box h={"450px"} w={"450px"} _before={{ position: "absolute", content: "''", h: "450px", w: "450px", top: "20px", left: "-20px", border: "2px solid gray", zIndex: "-1" }}>
                            <img src={aboutimg1} alt="" style={{ objectFit: 'contain', height: "450px" }} />
                        </Box>
                    </Box>
                </Box>




                <Box display={"flex"}>
                    <Box position={"relative"} h={"450px"} w={"450px"} >
                        <Box h={"450px"} w={"450px"} _before={{ position: "absolute", content: "''", h: "450px", w: "450px", top: "20px", left: "-20px", border: "2px solid gray", zIndex: "-1" }}>
                            <img src={aboutimg2} alt="" style={{ objectFit: 'contain', height: "450px" }} />
                        </Box>
                    </Box>

                    <Box>
                        <Heading>
                            Our Mission
                        </Heading>
                        <Text>
                            {about2text}
                        </Text>
                        <Text fontStyle={"italic"} borderLeft={"2px solid gray"} p={8}>
                            {about2styText}
                        </Text>
                        <span>By: Test</span>
                    </Box>
                </Box>
            </VStack>
        </Stack>
    )
}

export default About