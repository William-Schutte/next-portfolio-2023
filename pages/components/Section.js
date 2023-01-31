import { Box } from "@chakra-ui/react";

export default function Section({ children }) {
  return (
    <Box w="100%">
      <Box maxW="1200px" m="auto">
        {children}
      </Box>
    </Box>
  );
}
