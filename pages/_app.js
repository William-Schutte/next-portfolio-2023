import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  textStyles: {
    lgHeading: {
      fontSize: "5xl",
      lineHeight: "1.2",
      fontWeight: "bold",
    },
    subHeading: {
      fontSize: "xl",
      lineHeight: "1.4",
      fontWeight: "400",
      letterSpacing: 1.1,
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
