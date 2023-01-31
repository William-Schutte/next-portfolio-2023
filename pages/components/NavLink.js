import { Box, Link, Text } from "@chakra-ui/react";

export default function NavLink({ children, location, main = false }) {
  return (
    <Link mr={main ? 8 : 6} display="flex" alignItems="center">
      <Text
        display="inline"
        fontSize="1.25em"
        fontWeight={main ? "bold" : "regular"}
      >
        {children}
      </Text>
    </Link>
  );
}
