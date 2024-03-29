import { Box, Flex, useColorMode } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";

import NavLink from "./NavLink";
import ColorModeIcon from "../shared/ColorModeIcon";

export default function NavSection() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      alignContent="space-between"
      position="fixed"
      w="100%"
      px="40px"
      shadow="sm"
      bg={colorMode === "light" && "whiteAlpha.700"}
      backdropFilter="saturate(20%) blur(6px)"
      zIndex="100"
    >
      <Flex py="4" mr="auto">
        <ColorModeIcon />
        <NavLink main location="#hero">
          William Schutte
        </NavLink>
        <NavLink location="#intro">Intro</NavLink>
        <Box
          w="1px"
          h="1.75em"
          mx="6"
          bg="gray.300"
          borderRadius="4"
          alignSelf="center"
        />
        <NavLink location="#work">Work</NavLink>
        <Box
          w="1px"
          h="1.75em"
          mx="6"
          bg="gray.300"
          borderRadius="4"
          alignSelf="center"
        />
        <NavLink location="#contact">Contact</NavLink>
      </Flex>
      <Flex py="4">
        <NavLink location="/WS Resume.pdf" isExternal>
          Resume
        </NavLink>
        <Box
          w="1px"
          h="1.75em"
          mx="6"
          bg="gray.300"
          borderRadius="4"
          alignSelf="center"
        />
        <NavLink
          location="https://www.linkedin.com/in/william-schutte/"
          isExternal
        >
          LinkedIn
        </NavLink>
      </Flex>
    </Flex>
  );
}
