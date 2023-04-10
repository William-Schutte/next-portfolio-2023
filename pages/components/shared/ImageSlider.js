import Image from "next/image";
import { Center, Flex } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const sources = ["/cove-1.png", "/cove-2.png", "/cove-3.png"];

export default function ImageSlider() {
  const [imgIndex, setImgIndex] = useState(0);

  function nextImage() {
    setImgIndex((imgIndex + 1) % sources.length);
  }

  setInterval(nextImage, 5000);
  return (
    <Center w="100%" h="100%">
      <motion.div
        key={sources[imgIndex]}
        initial={{ opacity: 0, scale: 1.4, translateY: "-100px" }}
        animate={{
          opacity: 1,
          scale: 0.94,
          translateY: "0px",
          transition: {
            duration: 1,
            type: "spring",
            bounce: 0.3,
            stiffness: 80,
          },
        }}
      >
        <Image
          src={sources[imgIndex]}
          alt="Cove Tool Site Example"
          width="500"
          height="500"
        />
      </motion.div>
    </Center>
  );
}
