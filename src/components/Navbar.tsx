import { Box, Flex, Tabs, useBreakpointValue, IconButton, Heading, Icon } from "@chakra-ui/react";
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
  } from "@/components/ui/menu"
import React from "react";
import { useNavigate } from "react-router-dom";
import { LuAward, LuBriefcase, LuCode, LuFile, LuMenu, LuUser } from "react-icons/lu";
import { ColorModeButton } from "./ui/color-mode";

/**
 * Navbar Component
 *  
 * @param {Object} props - The component props.
 * @param {string} props.darkMode - The dark property that determines the color styling of the page
 * @param {React.Dispatch<React.SetStateAction<string>>} props.setDarkMode - A function that updates the DarkMode state
 * @returns {JSX.Element} A React JSX element representing the Navbar Component, the navbar component of the website
*/
export default function Navbar(): JSX.Element{
    const navigationIcons = [LuUser, LuBriefcase, LuCode, LuAward, LuFile];
    const navigate = useNavigate();
    const btnRef = React.useRef<HTMLButtonElement>(null);
    const [selectedTab, setSelectedTab] = React.useState(
        window.location.pathname === '/' ? 'about' : window.location.pathname.substring(1)
    );

    // Handle tab navigation
    const handleTabChange = (details: { value: string }) => {
        if (details.value == 'resume') {
            window.open('/resume.pdf', '_blank');
            return;
        } 
        setSelectedTab(details.value); // Update selected tab state
        navigate(`/${details.value === 'about' ? '' : details.value}`);
    };

    const defaultTab = window.location.pathname === '/' ? 'about' : window.location.pathname.substring(1);

    const fontSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });

    return (
        <Flex 
            justifyContent="center" 
            alignItems="center" 
            position="relative"
            marginTop={{base: "4vh", lg: "4vh"}}
        >
            {/* Name */}
            <Heading
                position="absolute"
                left={{base: "50%", md: "50%", lg: "5vw"}}
                transform={{ base: "translate(-50%, -50%)", md: "translate(-50%, -50%)", lg: "translateY(-50%)" }}
                top="50%" 
                size={{ base: "2xl", md: "3xl", lg: "4xl" }}
            >
              Jinha Kim
            </Heading>

            {/* Dropdown Menu for Small/Medium Screens */}
            <MenuRoot
              size={{ base: "sm", md: "md"}}
            >
                <MenuTrigger asChild >
                    <IconButton
                        ref={btnRef}
                        display={{ base: 'block', md: 'block', lg: 'none' }}
                        aria-label="Open Menu"
                        position="absolute"
                        left="5vw"
                        top="50%" 
                        transform="translateY(-50%)" 
                        hideFrom="lg"
                        variant="outline"
                        justifyContent="center"
                        alignItems="center"
                        _icon={{ fontSize: "2rem" }}
                    >
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <LuMenu />
                        </Box>
                    </IconButton>
                </MenuTrigger>
                <MenuContent>
                    {
                      ['about', 'experiences', 'projects', 'resume'].map((tab, index) => {
                        return (
                          <MenuItem 
                            key={index} 
                            value={tab} 
                            onClick={() => handleTabChange({value: tab})}
                            fontSize={{ base: 'sm', md: 'lg' }}
                          >
                            <Flex alignItems="center" mb="2">
                                <Icon mr="2" as={navigationIcons[index]}/>
                                <>
                                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </>
                            </Flex>
                          </MenuItem>
                        );
                      })
                    }       
                </MenuContent>
            </MenuRoot>
        
            {/* Tabs for Large Screens */}
            <Tabs.Root 
                defaultValue={defaultTab}
                variant="enclosed" 
                onValueChange={handleTabChange}  
                hideBelow="lg" 
                top="50%"
                value={selectedTab}
                _hover={{ cursor: "pointer" }}
            >
                <Tabs.List bg="bg.muted" rounded="l3" p="1" overflowX="auto" whiteSpace="nowrap">
                    <Tabs.Trigger value="about" fontSize={fontSize} _hover={{ color: "#2ECC71" }}>
                        About
                    </Tabs.Trigger>
                    <Tabs.Trigger value="experiences" fontSize={fontSize} _hover={{ color: "#2ECC71" }}>
                        Experiences
                    </Tabs.Trigger>
                    <Tabs.Trigger value="projects" fontSize={fontSize} _hover={{ color: "#2ECC71" }}>
                        Projects
                    </Tabs.Trigger>
                    <Tabs.Trigger value="resume" fontSize={fontSize} _hover={{ color: "#2ECC71" }}>
                        Resume
                    </Tabs.Trigger>
                </Tabs.List>
            </Tabs.Root>

            {/* Color Mode Button */}
            <ColorModeButton
                position="absolute"
                right="5vw"
                top="50%" 
                transform="translateY(-50%)" 
            />
        </Flex>
    );
}