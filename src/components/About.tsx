import Skills from "./Skills";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { Flex, Heading, Image, Highlight, Link, Icon } from "@chakra-ui/react";
import TypingCycle from "./TypingCycle";

/**
 * About Component
 *  
 * @param {Object} props - The component props.
 * @param {string} props.darkMode - The dark property that determines the color styling of the page
 * @returns {JSX.Element} A React JSX element representing the About component, the about section of the page
*/
export default function About(): JSX.Element{
    // User Color css variable is set depending on whether the site is in dark or light mode

  return (
    <>
      <Flex 
        direction="column" 
        alignItems="center" 
        gap={{sm: "10px", md: "20px", lg: "20px"}} 
        mt="10vh"
      >
        <Image rounded="md" src='jinhakim.jpg' alt="Jinha Kim" height="250px"/>
        <Heading size={{ base: "2xl", md: "3xl", lg: "5xl" }} mt="4">
        <Highlight query="Jinha Kim" styles={{ color: "#2ECC71" }}>
            Hi there, I'm Jinha Kim! 👋
        </Highlight>
        </Heading>
        <TypingCycle/>
                
        <Flex 
            justifyContent="space-evenly" 
            width={{base: "40%", md: "40%", lg: "20%"}} 
            mt="4" 
            gap={{sm: "10px", md: "20px", lg: "20px"}}
        >
          <Link href="mailto: jinhakim0704@gmail.com" target="_blank" rel="noopener noreferrer">
            <Icon 
              as={SiGmail} 
              boxSize={{"base": "20px", "md": "30px", "lg": "40px"}} 
              _hover={{
                transform: 'scale(1.05)',
                transition: 'transform 0.4s ease-in-out',
                color: '#2ECC71'
              }}
            />
          </Link>
          <Link href="https://github.com/JinhaKimGH" target="_blank" rel="noopener noreferrer">
            <Icon 
              as={SiGithub} 
              boxSize={{"base": "20px", "md": "30px", "lg": "40px"}} 
              _hover={{
                transform: 'scale(1.05)',
                transition: 'transform 0.4s ease-in-out',
                color: '#2ECC71'
              }}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/jinha-kim/" target="_blank" rel="noopener noreferrer">
              <Icon 
                as={SiLinkedin} 
                boxSize={{"base": "20px", "md": "30px", "lg": "40px"}} 
                _hover={{
                  transform: 'scale(1.05)',
                  transition: 'transform 0.4s ease-in-out',
                  color: '#2ECC71'
                }}
              />
          </Link>
        </Flex>
      </Flex>
      <Skills/>
    </>
    );
}