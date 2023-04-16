import { Box, Link, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function NavLink({
  children,
  location,
  main = false,
  isExternal = false,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      mr={main ? 8 : 0}
      href={location}
      display="flex"
      flexDir="column"
      alignItems="center"
      transition="all .2s"
      top={main ? 1 : 2}
      position="relative"
      isExternal={isExternal}
      _hover={{ textDecoration: "none" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Text
        display="inline"
        fontSize={main ? "1.25em" : "1em"}
        fontWeight="bold"
        lineHeight="1"
      >
        {children}
      </Text>
      {!main && (
        <Box
          w={isHovered ? "100%" : 0}
          h="3px"
          bg="gray.700"
          transition=".3s ease"
          transitionDelay=".1s"
          alignSelf={"flex-start"}
        />
      )}
    </Link>
  );
}
