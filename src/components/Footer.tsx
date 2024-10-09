import { Box, Container, Heading, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import storebadge from "../assets/appstorimg.svg";
import gplaybadge from "../assets/playstoreimg.png";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('black', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} display={"flex"} justifyContent={"space-around"}>
          <Stack align={'flex-start'} textColor={"white"}>
            <Heading>
              Categories
            </Heading>
            <Box as="a" href={'#'} textColor={'white'} textDecoration={"none"}>
              Women
            </Box>
            <Box as="a" href={'#'} textColor={'white'} textDecoration={"none"} >
              Men
            </Box>
            <Box as="a" href={'#'} textColor={'white'} textDecoration={"none"}>
              Shoes
            </Box>
            <Box as="a" href={'#'} textColor={'white'} textDecoration={"none"}>
              Watch
            </Box>
          </Stack>

          <Stack align={'flex-start'} textColor={"white"}>
            <Heading >
              Support
            </Heading>
            <Box as="a" href={'#'} textColor={'white'} textDecoration={"none"}>
              Help Center
            </Box>
            <Box as="a" href={'#'} textColor={'white'} textDecoration={"none"}>
              Safety Center
            </Box>
            <Box as="a" href={'#'} textColor={'white'} textDecoration={"none"}>
              Community Guidelines
            </Box>
          </Stack>

          <Stack align={'flex-start'} textColor={"white"}>
            <Heading>
              Help
            </Heading>
            <Box as="a" href={'#'} textColor={'white'} textDecoration={"none"}>
              Track Order
            </Box>
            <Box as="a" href={'#'} textColor={'white'} textDecoration={"none"}>
              Returns
            </Box>
            <Box as="a" href={'#'} textColor={'white'} textDecoration={"none"}>
              Shipping
            </Box>
            <Box as="a" href={'#'} textColor={'white'} textDecoration={"none"}>
              FAQs
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            Install App
            <img src={storebadge} alt="" style={{ height: "100px", width: "200px", objectFit: "contain" }} />
            <img src={gplaybadge} alt="" style={{ height: "100px", width: "200px", objectFit: "contain" }} />
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2024 Ecom 24. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>

            <FaTwitter size={24} />
            <FaYoutube size={24} />
            <FaInstagram size={24} />
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer






