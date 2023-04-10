import { Box, Flex, useColorMode } from "@chakra-ui/react";
import { DeleteIcon, SunIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

export default function ColorModeIcon() {
  const { colorMode, toggleColorMode } = useColorMode();
  const variants = {
    hiddenSun: { opacity: 0, rotate: "-180deg", transition: { duration: 0.3 } },
    hiddenTrash: {
      opacity: 0,
      rotate: "180deg",
      transition: { duration: 0.3 },
    },
    show: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <Flex onClick={toggleColorMode} cursor="pointer">
      <motion.div
        variants={variants}
        style={{ width: 0 }}
        animate={colorMode === "light" ? "show" : "hiddenSun"}
      >
        <SunIcon boxSize="6" my="auto" mr="4" />
      </motion.div>
      <motion.div
        variants={variants}
        style={{ transformOrigin: "-2px 10px" }}
        animate={colorMode === "light" ? "hiddenTrash" : "show"}
      >
        <DeleteIcon boxSize="6" my="auto" mr="4" />
      </motion.div>
    </Flex>
  );
}
