import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
    disableTransitionOnChange: false,
  },
  textStyles: {
    lgHeading: {
      fontSize: "6xl",
      lineHeight: "1.2",
      fontWeight: "bold",
    },
    subHeading: {
      fontSize: ["md", "lg", "xl"],
      lineHeight: "1.4",
      fontWeight: "400",
      letterSpacing: 1,
    },
    mediumText: {
      fontSize: "lg",
    },
  },
});
