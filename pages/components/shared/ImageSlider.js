import Image from "next/image";
import {
  Button,
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

export default function ImageSlider({ imgArray, altText, right = false }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [timeoutID, setTimeoutID] = useState("");

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

  useEffect(() => {
    const newInterval = setTimeout(nextImage, 5000 + right * 1000);
    setTimeoutID(newInterval);

    return function cleanup() {
      clearInterval(newInterval);
    };
  }, [imgIndex]);

  return (
    <>
      <Center w="100%" h="100%">
        <Button
          bg="none"
          _hover={{ background: "none" }}
          onClick={() => {
            stopTimeout();
            onOpen();
          }}
        >
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
        </Button>
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
              />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
