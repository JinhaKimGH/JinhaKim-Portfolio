import { Box, Text, HStack, Link, Icon } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

export default function Footer(): JSX.Element {
  // Light and Dark mode styles
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.400');
  const borderColor = useColorModeValue('gray.200', 'gray.800');

    return (
      <footer>
        <Box
            bg={bgColor}            
            color={textColor}        
            borderTop="1px solid"    
            borderColor={borderColor}
            py={5}                  
            textAlign="center"       
            fontSize="sm"   
        >
          <Text>
            &copy; 2025 Jinha Kim. All rights reserved.
          </Text>

          {/* Social Media Icons */}
          <HStack gap={4} justify="center" mt={2}>
            <Link href="mailto: jinhakim0704@gmail.com" target="_blank" rel="noopener noreferrer">
              <Icon 
                color={textColor}
                as={SiGmail} 
                boxSize={{"base": "15px", "md": "20px", "lg": "20px"}} 
                _hover={{
                  transform: 'scale(1.05)',
                  transition: 'transform 0.4s ease-in-out',
                }}
              />
            </Link>
            <Link href="https://github.com/JinhaKimGH" target="_blank" rel="noopener noreferrer">
              <Icon 
                color={textColor}
                as={SiGithub} 
                boxSize={{"base": "15px", "md": "20px", "lg": "20px"}} 
                _hover={{
                  transform: 'scale(1.05)',
                  transition: 'transform 0.4s ease-in-out',
                }}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/jinha-kim/" target="_blank" rel="noopener noreferrer">
              <Icon 
                color={textColor}
                as={SiLinkedin} 
                boxSize={{"base": "15px", "md": "20px", "lg": "20px"}} 
                _hover={{
                  transform: 'scale(1.05)',
                  transition: 'transform 0.4s ease-in-out',
                }}
              />
            </Link>
          </HStack>
        </Box>
      </footer>
    )
}