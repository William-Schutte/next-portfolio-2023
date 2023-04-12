import Image from "next/image";
import { Center, Flex } from "@chakra-ui/react";
import { useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";

const sources = ["/cove-1.png", "/cove-2.png", "/cove-3.png"];

export default function ImageSlider() {
  const [imgIndex, setImgIndex] = useState(0);
  const xOffset = useMotionValue(0);
  const yOffset = useMotionValue(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function nextImage() {
    setImgIndex((imgIndex + 1) % sources.length);
  }

  // useEffect(() => {
  //   const newInterval = setInterval(nextImage, 5000);

  //   return function cleanup() {
  //     clearInterval(newInterval);
  //   };
  // }, [imgIndex]);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      console.log(xOffset);
      setMousePosition({ x: ev.offsetX, y: ev.offsetY });
      xOffset.set(ev.offsetX);
      yOffset.set(ev.offsetY);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <Center w="100%" h="100%">
      <motion.div
        key={sources[imgIndex]}
        initial={{ opacity: 0, scale: 1.4, translateY: "-100px" }}
        style={{ padding: "40px" }}
        animate={{
          opacity: 1,
          scale: 1.1,
          translateY: "0px",
          transition: {
            duration: 1,
            type: "spring",
            bounce: 0.3,
            stiffness: 80,
          },
        }}
        whileHover={{
          scale: 1.8,
          translateX: -(xOffset.current - 230) * 0.8,
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
          src={sources[imgIndex]}
          alt="Cove Tool Site Example"
          width="500"
          height="500"
          style={{ borderRadius: "8px" }}
        />
      </motion.div>
    </Center>
  );
}
