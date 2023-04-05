import { wheatGradient } from "@/styles/gradients";
import { Box, useColorModeValue } from "@chakra-ui/react";

export default function Section({ children, background = false }) {
  const bgColor = useColorModeValue(
    wheatGradient,
    "linear-gradient(to left, #141e30, #243b55);"
  );

  return (
    <Box w="100%" bg={background && bgColor}>
      <Box maxW="1200px" m="auto">
        {children}
      </Box>
    </Box>
  );
}
