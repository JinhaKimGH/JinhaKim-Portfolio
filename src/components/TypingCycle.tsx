import { Box, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

export default function TypingCycle() {
  return (
    <Box textAlign="center" fontSize={{sm: "4xs", md: "1xl", lg: "2xl"}} fontWeight="bold">
      <Text as="span" color="#2ECC71">
        <Typewriter
          options={{
            strings: [
                "University of Waterloo Computer Engineering Student",
                "Dean's Honours List Student",
                "Software Developer",
                "Machine Learning Enthusiast",
                "Creative Problem Solver",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
          }}
        />
      </Text>
    </Box>
  );
}

