import { Box, Flex, Link } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";

import NavLink from "./NavLink";

export default function NavSection() {
  return (
    <Flex alignContent="space-between">
      <Flex py="4" mr="auto">
        <SunIcon boxSize="6" m="2" />
        <NavLink main>William Schutte</NavLink>
        <NavLink>Story</NavLink>
        <Box
          w="1px"
          h="1.75em"
          mx="6"
          bg="gray.300"
          borderRadius="4"
          alignSelf="center"
        />
        <NavLink>Work</NavLink>
        <Box
          w="1px"
          h="1.75em"
          mx="6"
          bg="gray.300"
          borderRadius="4"
          alignSelf="center"
        />
        <NavLink>Projects</NavLink>
      </Flex>
      <Flex py="4">
        <NavLink>Resume</NavLink>
        <Box
          w="1px"
          h="1.75em"
          mx="6"
          bg="gray.300"
          borderRadius="4"
          alignSelf="center"
        />
        <NavLink>LinkedIn</NavLink>
      </Flex>
    </Flex>
  );
}
