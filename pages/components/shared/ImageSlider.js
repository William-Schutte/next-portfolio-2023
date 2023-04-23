import Image from "next/image";
import {
  Button,
  Box,
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Image as ChakraImage,
  ModalCloseButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sources = ["/cove-1.png", "/cove-2.png", "/cove-3.png"];

export default function ImageSlider({ imgArray = [], altText, right = false }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [timeoutID, setTimeoutID] = useState("");
  const [isHover, setIshover] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  function nextImage() {
    setImgIndex((imgIndex + 1) % sources.length);
  }

  function stopTimeout() {
    clearInterval(timeoutID);
  }

  function handleModalClose() {
    onClose();
    nextImage();
  }

  const animateState = {
    opacity: 1,
    scale: 0.9,
    rotate: right ? "4deg" : "-4deg",
    translateY: "0px",
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.3,
      stiffness: 80,
    },
  };
  const hoverState = {
    opacity: 1,
    rotate: right ? "4deg" : "-4deg",
    translateY: "0px",
    scale: 1.05,
    transition: {
      duration: 0.4,
      type: "spring",
      bounce: 0.3,
      stiffness: 100,
    },
  };

  useEffect(() => {
    const newInterval = setTimeout(nextImage, 5000 + right * 1000);
    setTimeoutID(newInterval);

    return function cleanup() {
      clearInterval(newInterval);
    };
  }, [imgIndex]);

  return (
    <Box
      w="500px"
      h="500px"
      mx="6"
      mt="12"
      borderRadius="2xl"
      overflow="clip"
      bg="linear-gradient(90deg, rgba(34, 61, 137, 0.72) 0%, rgba(27, 137, 231, 0.72) 100%),#E0E0E0;"
      cursor="pointer"
      onMouseEnter={() => setIshover(true)}
      onMouseLeave={() => setIshover(false)}
      onClick={() => {
        stopTimeout();
        onOpen();
      }}
    >
      <Center w="100%" h="100%">
        <motion.div
          key={sources[imgIndex]}
          initial={{ opacity: 0, scale: 1.4, translateY: "-100px" }}
          animate={isHover ? hoverState : animateState}
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
      <Modal isOpen={isOpen} onClose={handleModalClose} size="full">
        <ModalOverlay />
        <ModalContent borderRadius="xl" bg="none" p="8">
          <ModalCloseButton size="lg" my="8" mr="20" color="white" />
          <ModalBody onClick={handleModalClose}>
            <Center>
              <ChakraImage
                src={imgArray[imgIndex]}
                alt={altText}
                borderRadius="8px"
                boxShadow="lg"
                h="80vh"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                cursor="pointer"
              />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
