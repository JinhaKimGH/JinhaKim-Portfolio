import { projects } from "../data/ProjectList";
import { Flex, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

/**
 * Projects Component
 * 
 * @param {Object} props - The component props.
 * @param {string} props.darkMode - The dark property that determines the color styling of the page
 * @returns {JSX.Element} A React JSX element representing the Projects component, the  section of the page that contains all my projects
 */
export default function Projects(): JSX.Element{
    
    return (
        <Flex 
          direction="column" 
          alignItems="center"
          mt="10vh"
          maxWidth="100vw"
        >
          <Heading
            fontSize="2xl"
            width={{base: "87%", "md": "79%", "lg": "81%"}}
            textAlign={{base: "center", md: "center", lg: "left"}}
          >
            Projects
          </Heading>

          <Flex
            justifyContent="center"
            alignItems={{ base: "center", md: "center", lg: "stretch" }}
            marginTop="2vh"
            gap={{base: "1rem", md: "1rem", lg: "1rem" }}
            flexWrap="wrap" 
            flexDirection={{ base: "column", md: "column", lg: "row" }}
            width="90%"
          >
            {projects.map((project, index) => (
                <ProjectCard project={project} index={index}/>
            ))}

          </Flex>
        </Flex>
    )
}