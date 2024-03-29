import { useEffect, useState } from "react";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";

export default function Story() {
  const [scrollPosition, setScrollPosition] = useState(80);
  const { colorMode, toggleColorMode } = useColorMode();

  const handleScroll = () => {
    const position = window.pageYOffset;

    // 0 - 400 range, interpolate from 80 to 0
    const positionInRange = Math.min(position - 1000, 800);
    const interpVal = 80 - (80 * positionInRange) / 800;
    setScrollPosition(interpVal);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Center flexDir="column" my="240px" position="relative">
      <Box
        bg="linear-gradient(90deg, rgba(131, 58, 180, 0.7) 2.16%, rgba(253, 29, 29, 0.63) 132.3%),#D693FF;"
        position="absolute"
        top="360px"
        h="700px"
        w="140vw"
        transform={"auto"}
        rotate="14deg"
        zIndex={-1}
      ></Box>
      <Box>
        <Text
          textStyle="lgHeading"
          fontSize="8xl"
          display="inline-block"
          mr="4"
        >
          {colorMode === "light" ? "Great" : "Temper"}
        </Text>
        <Text
          textStyle="lgHeading"
          fontSize="8xl"
          bgGradient="linear-gradient(to right, #12c2e9, #c471ed, #f64f59, #c471ed);"
          bgClip="text"
          display="inline-block"
        >
          expectations
        </Text>
      </Box>
      <Text textStyle="lgHeading" fontSize="8xl">
        with William
      </Text>

      <Box
        w="80%"
        overflow="clip"
        mt="12"
        borderRadius="2xl"
        bg="linear-gradient(90deg, rgba(34, 61, 137, 0.72) 0%, rgba(27, 137, 231, 0.72) 100%),#E0E0E0;"
        perspective="90em"
        transform={`perspective(85em) rotateX(${scrollPosition}deg)`}
      >
        <AspectRatio maxWidth="1000px" mx="auto" ratio={16 / 9}>
          <iframe
            title="Me"
            src="https://www.youtube.com/embed/7AKBCNpDx1U?autoplay=1&mute=1"
            allowfullscreen
            autoPlay
            loop
            playsInline
          ></iframe>
        </AspectRatio>
      </Box>
    </Center>
  );
}
