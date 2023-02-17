import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Contact() {
  return (
    <Flex py="24" px="4" justifyContent="space-between">
      <Box>
        <Text textStyle="lgHeading">Prepare to be</Text>
        <Text
          textStyle="lgHeading"
          fontSize="6xl"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          mildly impressed
        </Text>
        <Box maxW="560px" my="8">
          <Text display="inline" textStyle="subHeading">
            Get to know the most{" "}
          </Text>
          <Text
            display="inline"
            bgGradient="linear(to-l, #1B89E7, #223D89)"
            bgClip="text"
            textStyle="subHeading"
            fontWeight="bold"
          >
            adequate full-stack developer{" "}
          </Text>
          <Text display="inline" textStyle="subHeading">
            you've never heard of through a generically realized modern website
          </Text>
        </Box>
        <Button
          bg="linear-gradient(90deg, rgba(131,58,180,.9) 0%, rgba(253,29,29,.9) 100%);"
          color="white"
          size="lg"
          px="8"
          mt="4"
          mb="12"
          transition="all .3s ease"
          _hover={{
            opacity: 0.5,
          }}
        >
          Let's Connect!
        </Button>
        <Flex></Flex>
        <Text display="inline" fontSize="12" fontWeight="500">
          Literally over 300 LinkedIn connections, how could he not be great?
        </Text>
      </Box>
      <Box
        w="360px"
        h="260px"
        mx="6"
        mt="12"
        borderRadius="2xl"
        bg="white"
        // bg="linear-gradient(90deg, rgba(34, 61, 137, 0.72) 0%, rgba(27, 137, 231, 0.72) 100%),#E0E0E0;"
      >
        <Image src="/icon-react.svg" width={100} height={100} />
        <Image src="/icon-js.svg" width={100} height={100} />
        <Image src="/icon-ts.svg" width={100} height={100} />
        <Image src="/icon-python.svg" width={100} height={100} />
      </Box>
    </Flex>
  );
}
