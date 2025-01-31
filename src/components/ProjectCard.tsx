import { Project } from "../data/Interfaces";
import { IconType } from "react-icons";
import { LuExternalLink } from "react-icons/lu";
import { Flex, Card, Icon, Link, Button, Text, Image } from "@chakra-ui/react";
import { Tag } from "@/components/ui/tag";
import { nameToBlankIcon } from "@/data/DataList";
import { useColorModeValue } from "./ui/color-mode";
import parse from 'html-react-parser';
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTrigger,
} from "@/components/ui/dialog"

// Define a type for the skill names
type LanguageNames = keyof typeof nameToBlankIcon; 

/**
 * Projects Component
 * 
 * @param {Object} props - The component props.
 * @param {Project} props.project - The project object containing all the project information
 * @returns {JSX.Element} A React JSX element representing the ProjectCard component, a card containing a description of a personal project
 */
export default function ProjectCard(props: { project: Project, index : number}): JSX.Element{
    const hoverBgColor = useColorModeValue('gray.100', 'gray.900');
    const hoverBoxShadow = useColorModeValue('lg', 'dark-lg');

    const {project, index} = props;

    return(
      <DialogRoot>

        <Card.Root 
          key={index} 
          height="auto" 
          minHeight="100%" 
          width={{ base: "90%", md: "80%", lg: "30%"}}
          variant="elevated"
          mb="20px"
          rounded="2xl"
          _hover={{
          backgroundColor: hoverBgColor,
          boxShadow: hoverBoxShadow, 
          }}
        >
          <Card.Body gap="2">
            <Card.Title fontSize="1.25rem">{project.name}</Card.Title>
            <Card.Description marginBottom="2">
              {/* DialogTrigger wrapped around Image */}
              <DialogTrigger>
                <Image 
                    src={project.image} 
                    rounded="2xl" 
                    marginBottom="5" 
                    width="100%" 
                    cursor="pointer" // Indicate it's clickable
                />
              </DialogTrigger>
              {parse(project.description)}
            </Card.Description>
            <Flex wrap="wrap" gap="3">
              {
                project.languages.map((lang, index) => {
                  const IconComponent = nameToBlankIcon[lang as LanguageNames];
                    return (
                      <Tag 
                        size="lg" 
                        colorPalette="green" 
                        key={index}
                        display="flex"
                        alignItems="center"
                        verticalAlign="middle"
                        startElement={
                        IconComponent ? (
                          <Icon 
                            size="sm"
                            as={IconComponent as IconType} 
                            verticalAlign="top"
                          />
                          ) : null
                        }
                      >
                        {lang}
                      </Tag>
                    );
                  })
                }
            </Flex>
          </Card.Body>
          <Card.Footer justifyContent="space-between" alignItems="center" height="10">
            <Link href={project.link} target="_blank" colorPalette="green">
              <Text fontSize={{base: "sm", md: "1rem", lg: "1rem"}}>
                  Visit GitHub
              </Text> 
              <LuExternalLink/>
            </Link>
            {
              project.live && 
              <Button 
                
                colorPalette="green"
                size="sm"
              >
                <a href={project.live} target="_blank">
                  Live Demo
                </a>
              </Button>
            }
          </Card.Footer>
        </Card.Root>
        {/* Dialog to display the image in a larger size */}
        <DialogContent maxWidth="70vw" minWidth="40vw">
          <DialogHeader />
          <DialogBody>
              <Image src={project.image} alt={project.name} width="70vw" />
          </DialogBody>
          <DialogFooter>
            <DialogCloseTrigger />
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    )
}