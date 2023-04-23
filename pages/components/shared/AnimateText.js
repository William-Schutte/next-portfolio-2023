import { Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function AnimateText({
  lightText,
  darkText,
  lightColor,
  darkColor,
  reverseBold = false,
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isBold = reverseBold ? colorMode !== "light" : colorMode === "light";

  const variants = {
    hidden: {
      opacity: 0,
      height: "24px",
      width: 0,
      transition: { duration: 0.3 },
    },
    show: { opacity: 1, width: "auto", transition: { duration: 0.3 } },
  };

  return (
    <>
      <motion.div
        variants={variants}
        animate={colorMode === "light" ? "show" : "hidden"}
        style={{ overflow: "hidden" }}
      >
        <Text
          display="inline"
          textStyle="subHeading"
          mx="2"
          bgGradient={lightColor}
          bgClip="text"
          fontWeight={isBold ? "bold" : "regular"}
        >
          {lightText}
        </Text>
      </motion.div>
      <motion.div
        variants={variants}
        animate={colorMode === "light" ? "hidden" : "show"}
        style={{ overflow: "hidden" }}
      >
        <Text
          display="inline"
          textStyle="subHeading"
          mx="2"
          bgGradient={darkColor}
          bgClip="text"
          fontWeight={isBold ? "bold" : "regular"}
        >
          {darkText}
        </Text>
      </motion.div>
    </>
  );
}
