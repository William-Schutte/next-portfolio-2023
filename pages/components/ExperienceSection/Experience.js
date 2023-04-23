import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import ExperienceIcons from "./ExperienceIcons";
import { pinkPurpleGradient } from "@/styles/gradients";
import ExperienceItem from "./ExperienceItem";

const coveImages = [
  "/cove-1.png",
  "/cove-2.png",
  "/cove-3.png",
  "/cove-4.png",
  "/cove-5.png",
  "/cove-6.png",
  "/cove-7.png",
];
const coniferImages = [
  "/bmaps1.png",
  "/bmaps2.png",
  "/bmaps3.png",
  "/bmaps4.png",
  "/bmaps5.png",
];
const iterativeImages = [
  "/iterative1.png",
  "/iterative2.png",
  "/iterative3.png",
];
const ofgImages = [
  "/ofg1.png",
  "/ofg2.png",
  "/ofg3.png",
  "/ofg4.png",
  "/ofg5.png",
];

export default function Experience() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box id="work" mb="20" h="1" />
      <Flex mb="24" px="4" justifyContent="space-between">
        <Box w="100%">
          <Text textStyle="lgHeading" fontSize="8xl" lineHeight="1">
            Full Stack
          </Text>
          <Text textStyle="lgHeading" fontSize="8xl" lineHeight="1" ml="20">
            Experience,
          </Text>
          <Text
            textStyle="lgHeading"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="8xl"
            ml="40"
          >
            Engineered
          </Text>
          <Box maxW="560px" my="8" mx="auto">
            <Text display="inline" textStyle="subHeading">
              {colorMode === "light"
                ? "Modern experience with design oriented frontend"
                : "What does that actually mean? No one cares. Its all about the"}{" "}
            </Text>
            <Text
              display="inline"
              bgGradient={
                colorMode === "light"
                  ? "linear(to-l, #1B89E7, #223D89)"
                  : pinkPurpleGradient
              }
              bgClip="text"
              textStyle="subHeading"
              fontWeight="bold"
            >
              {colorMode === "light" ? "frameworks" : "buzz words"}
            </Text>
            <Text display="inline" textStyle="subHeading">
              {colorMode === "light"
                ? ", REST API development, and engineer-focused software."
                : ", giant fonts, and overly colorful gradients."}{" "}
            </Text>
          </Box>
          {/* <ExperienceIcons /> */}
        </Box>
      </Flex>
      <ExperienceItem
        company="Cove Tool"
        title="Full Stack Software Engineer (2022 - Present)"
        tech="React, TypeScript, JavaScript, Django, Python, Docker, AWS"
        description="Architecture is an art, so why is engineering software so ugly?
        Software should be beautiful and intuitive regardless of complexity or
        target audience. That's why I've loved my time at Cove Tool, leading
        teams of engineers, mentoring junior devs, and shepherding products
        and features from design to delivery at this fast-paced, mid-sized,
        Series B, climate tech startup. And in the process, we've even reduced
        more carbon emissions than Tesla!"
        tldr='TLDR: "Rockstar developer and mentor helps make the world a better
        place"'
        imagesList={coveImages}
      />
      <ExperienceItem
        company="Conifer Point"
        title="JavaScript Developer (2021 - 2022)"
        tech="React, JavaScript, 3Dmol.js, Django, Python, MaterialUI"
        description="At Conifer Point, a small startup in the computational chemistry
        field, I was able to leverage my biochemistry background to develop
        and optimize 3D drug discovery tools and personally help labs
        searching for new active drug candidates."
        tldr='TLDR: "Recursive compound decomposition, intramolecular bond rotation,
        and Lennard-Jones potential simulation? No problem.'
        imagesList={coniferImages}
        right
      />
      <ExperienceItem
        company="Iterative AI"
        title="Capstone Apprenticeship Project (2021)"
        tech="Gatsby, React, JavaScript"
        description="Practicum Bootcamp partners with early stage startups to develop MVPs
        for new products and services. After completing my fullstack bootcamp
        curriculum, I partnered with a couple other students to create a brand
        new landing page for Iterative, a startup in the ML/AI space. We
        delivered a beautiful Gatsby site that they were able to launch almost
        immediately, and its still in use today!"
        tldr='TLDR: "Engineered a huge modern frontend upgrade to a worthy startup
        in just 4 weeks"'
        imagesList={iterativeImages}
      />
      <ExperienceItem
        company="OFG Web Development"
        title="Web Developer (2019 - 2021)"
        tech="Wordpress, HTML, CSS"
        description="Working remotely directly with the company owner and lead developer, I
        learned a lot about the business and innerworkings of client-oriented
        work and product excellence within a very short time. Before long, I
        was managing content updates for WordPress sites and refactoring old,
        outdated PHP pages into more maintainable HTML, CSS, and JS."
        tldr='TLDR: "Intro to the world of web dev."'
        imagesList={ofgImages}
        right
      />
    </>
  );
}
