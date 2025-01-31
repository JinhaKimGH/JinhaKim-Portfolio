import { nameToIcon, nameToDarkModeIcon } from "@/data/DataList"
import { Grid, GridItem, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { useColorModeValue } from "./ui/color-mode";

/**
 * Skills Component
 *  
 * @returns {JSX.Element} A React JSX element representing the Skills component, the skills section of the page
*/
export default function Skills(): JSX.Element{
  const isDark = useColorModeValue(false, true);

  return (
    <Flex
      id="skills"
      direction={{base: "column", md: "column", lg: "row"}}
      alignItems={{base: "center", md: "center", lg: "start"}}
      justifyContent="space-between"
      padding="0.5rem"
      mt="150px"
      width={{base: "100%", md: "80%", lg: "80%"}}
      ml="auto"
      mr="auto"
    >
      <Flex
        direction="column"
        alignItems="center"
        width={{base: "100%", md: "100%", lg: "40%"}}
      >
        <Heading 
          as="h2" 
          size={{base: "xl", md: "2xl", lg: "3xl"}} 
          textAlign={{base: "center", md: "center", lg: "left"}} 
          mt="5"
        >
          My Tech Stack.
          <br/>
          The toolbelt I use to drive success.
        </Heading>
      </Flex>
      <Grid 
        templateColumns="repeat(auto-fit, minmax(90px, 1fr))"
        gap={5}
        width={{base: "100%", md: "100%", lg: "50%"}}
        justifyContent="center"
        mt="5"
        mb="10"
      >
        {Object.entries(nameToIcon).map(([skill, iconUrl]) => (
          <GridItem key={skill} textAlign="center">
            <Flex direction="column" align="center">
              {/* Render icon using img */}
              <Image
                src={isDark ? nameToDarkModeIcon[skill] || iconUrl : iconUrl}
                alt={skill}
                boxSize={{base: "3rem", md: "4rem", lg: "3rem"}}
              />
              <Text fontSize={{base: "md", md: "md", lg: "xl"}}>
                {skill}
              </Text>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Flex>
    );
}