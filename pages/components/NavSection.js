import { Box, Flex, Link } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";

import NavLink from "./NavLink";

export default function NavSection() {
  return (
    <Flex alignContent="space-between">
      <Flex py="4" mr="auto">
        <SunIcon boxSize="6" m="2" />
        <NavLink main>William Schutte</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Work</NavLink>
        <NavLink>Projects</NavLink>
      </Flex>
      <Flex py="4">
        <NavLink>Resume</NavLink>
        <NavLink>LinkedIn</NavLink>
      </Flex>
    </Flex>
  );
}
