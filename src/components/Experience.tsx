import { Flex, Heading, Text } from "@chakra-ui/react"
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion"
import { Avatar } from "@/components/ui/avatar"
import parse from 'html-react-parser';
import { experience_list } from "@/data/WorkExperiences";

/**
 * Experience Component
 *  
 * @param {Object} props - The component props.
 * @param {string} props.darkMode - The dark property that determines the color styling of the page
 * @returns {JSX.Element} A React JSX element representing the Experience component, contains all my work experience
*/
export default function Experience(): JSX.Element{

  return (
    <Flex 
      direction="column" 
      alignItems="center"
      mt="10vh"
    >
      <Heading
        fontSize="2xl"
        width={{base: "90%", "md": "70%", "lg": "70%"}}
        textAlign={{base: "center", md: "center", lg: "left"}}
      >
        Experiences
      </Heading>
      <TimelineRoot 
        maxW={{base: "90%", "md": "80%", "lg": "70%"}} 
        size={"xl"}
        marginTop="7"
      >
        { experience_list.map((experience, index) => (
          <TimelineItem key={index}>
            <TimelineConnector>
                <Avatar
                  size="full"
                  name={`${experience.company} icon`}
                  src={experience.icon} 
                />
            </TimelineConnector>
            <TimelineContent>
              {/* Company Name + Date */}
              <Flex 
                justify="space-between" 
                align={{md: "center", lg: "center" }}
                flexDirection={{ base: "column", md: "row", lg: "row" }}
              >
                <TimelineTitle fontSize={{ base: "lg", md: "xl", lg: "xl" }} fontWeight="semibold">
                  {experience.company}
                </TimelineTitle>
                <Text fontSize="sm" color="gray.500">
                  {experience.date}
                </Text>
              </Flex>

              {/* Role */}
              <TimelineDescription>{ experience.title }</TimelineDescription>

              {/* Description */}
              <Text 
                textStyle="sm"
              >
                {experience.overview}
              </Text>
              <AccordionRoot width="full" collapsible variant="plain">
                <AccordionItem value={`item-${index}`}>
                  <h2>
                    <AccordionItemTrigger
                      _hover={{ cursor: "pointer" }}
                    >
                      <Text 
                        fontSize="sm" 
                        flex="1" 
                        textAlign="left"
                        _hover={{color: "#2ECC71"}}
                      >
                        More Details
                      </Text>
                    </AccordionItemTrigger>
                  </h2>
                  <AccordionItemContent pb={4}>
                    {experience.points.map((point, index) => (
                      <Flex key={index} align="flex-start" marginBottom="4">
                        <span style={{ marginRight: '5px' }}>•</span>
                        <span>
                          {parse(point, {
                            replace: (domNode) => {
                              if (domNode.type === "tag" && domNode.name === "strong") {
                                const childNode = domNode.children[0] as unknown as Text;
                                return <strong style={{ color: "#2ECC71" }}>{childNode.data}</strong>;
                              }
                            }
                          })}
                        </span>
                      </Flex>
                    ))}
                  </AccordionItemContent>
                </AccordionItem>
              </AccordionRoot>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineRoot>
    </Flex>
    ) 
}