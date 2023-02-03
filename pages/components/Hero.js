import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

const userImageUrls = [
  "https://randomuser.me/api/portraits/women/0.jpg",
  "https://randomuser.me/api/portraits/men/0.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/men/6.jpg",
  "https://randomuser.me/api/portraits/women/7.jpg",
  "https://randomuser.me/api/portraits/men/8.jpg",
  "https://randomuser.me/api/portraits/men/9.jpg",
  "https://randomuser.me/api/portraits/men/10.jpg",
  "https://randomuser.me/api/portraits/women/10.jpg",
  "https://randomuser.me/api/portraits/men/11.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
];

export default function Hero() {
  return (
    <Flex my="24" px="4" justifyContent="space-between">
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
        <Flex>
          {userImageUrls.map((url, index) => (
            <Box w="7" zIndex={10 - index}>
              <Image
                src={url}
                borderRadius="50"
                border="4px solid white"
                h="12"
                minW="12"
              />
            </Box>
          ))}
        </Flex>
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
        bg="linear-gradient(90deg, rgba(34, 61, 137, 0.72) 0%, rgba(27, 137, 231, 0.72) 100%),#E0E0E0;"
      >
        <Box
          w="300px"
          h="140px"
          borderRadius="2xl"
          bg="gray.700"
          transform="auto"
          translateX="-30px"
          translateY="40px"
          rotate="8deg"
          boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
        />
        <Box
          w="300px"
          h="200px"
          borderRadius="2xl"
          bg="gray.600"
          transform="auto"
          translateX="110px"
          translateY="-40px"
          rotate="-8deg"
          boxShadow="0 24px 20px -12px rgba(40, 40, 40, .7)"
        />
      </Box>
    </Flex>
  );
}
