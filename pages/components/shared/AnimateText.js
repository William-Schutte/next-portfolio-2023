import { Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function AnimateText({
  lightText,
  darkText,
  lightColor,
  darkColor,
}) {
  const { colorMode, toggleColorMode } = useColorMode();

  const variants = {
    hidden: {
      opacity: 0,
      height: "28px",
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
          fontSize="2xl"
          mx="2"
          bgGradient={lightColor}
          bgClip="text"
          fontWeight="bold"
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
          fontSize="2xl"
          mx="2"
          bgGradient={darkColor}
          bgClip="text"
          fontWeight="bold"
        >
          {darkText}
        </Text>
      </motion.div>
    </>
  );
}
