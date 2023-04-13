import Image from "next/image";
import { Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sources = ["/cove-1.png", "/cove-2.png", "/cove-3.png"];

export default function ImageSlider({ imgArray, altText, right = false }) {
  const [imgIndex, setImgIndex] = useState(0);

  function nextImage() {
    setImgIndex((imgIndex + 1) % sources.length);
  }

  useEffect(() => {
    const newInterval = setInterval(nextImage, 5000 + right * 1000);

    return function cleanup() {
      clearInterval(newInterval);
    };
  }, [imgIndex]);

  return (
    <>
      <Center w="100%" h="100%">
        <motion.div
          key={sources[imgIndex]}
          initial={{ opacity: 0, scale: 1.4, translateY: "-100px" }}
          style={{ padding: "40px" }}
          animate={{
            opacity: 1,
            scale: 1.1,
            rotate: right ? "4deg" : "-4deg",
            translateY: "0px",
            transition: {
              duration: 1,
              type: "spring",
              bounce: 0.3,
              stiffness: 80,
            },
          }}
          whileHover={{
            scale: 1.3,
            transition: {
              duration: 0.4,
              type: "spring",
              bounce: 0.3,
              stiffness: 100,
            },
          }}
          onHoverEnd={() => ({ opacity: 1, scale: 0.94 })}
        >
          <Image
            src={imgArray[imgIndex]}
            alt={altText}
            width="500"
            height="500"
            style={{
              borderRadius: "8px",
              boxShadow: "10px 10px 20px 4px rgba(0, 0, 0, .5)",
            }}
          />
        </motion.div>
      </Center>
    </>
  );
}
