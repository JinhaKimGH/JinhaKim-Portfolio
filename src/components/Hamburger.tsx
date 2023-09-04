import { Burger, Menu } from "@mantine/core"
import { useDisclosure } from '@mantine/hooks';
import { SyntheticEvent } from "react";


/**
 * Hamburger Component
 *  
 * @param {Object} props - The component props.
 * @param {string} props.darkMode - The dark property that determines the color styling of the page
 * @returns {JSX.Element} A React JSX element representing the Hamburger component, the hamburger menu for the navbar
*/
export default function Hamburger(props: {darkMode: string}): JSX.Element{
    // User Color css variable is set depending on whether the site is in dark or light mode
    const style = {"--hover-color": `${props.darkMode == 'dark' ? '#3A3B3C' : '#E5E5E5'}`} as React.CSSProperties;


    // Opened hook for burger menu
    const [opened, { toggle }] = useDisclosure(false);

    // Scrolls into the section when it is clicked on in the navbar
    // Queries the parent element and finds the childnode containing the section name
    function handleClickScroll(event : SyntheticEvent){
        const input = (event.target as HTMLElement);
        
        if(input){

            const element = document.getElementById(input.id.toLowerCase())
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }


    return (
        <div className={`hamburger ${props.darkMode}`} style={style}>
            <Menu onChange={toggle} shadow="md" width={200} transitionProps={{ transition: 'rotate-right', duration: 150 }}>
                <Menu.Target>
                    <Burger onClick={toggle} opened={opened} color={props.darkMode == "dark" ? "#fff" : "#0A0C10"}/>
                </Menu.Target>

                <Menu.Dropdown className={`dropdown ${props.darkMode}`}>
                    <Menu.Item className={'dropdown-menu'} onClick={handleClickScroll} id={'About'}>
                        <div className={`dropdown-item ${props.darkMode}`}>
                            <span className="material-icons" id='About'>
                                person
                            </span>
                            <p className='section-name' id='About'>
                                About
                            </p>   
                        </div>
                    </Menu.Item>
                    <Menu.Item className={'dropdown-menu'} onClick={handleClickScroll} id="Skills">
                        <div className={`dropdown-item ${props.darkMode}`}>
                            <span className="material-icons" id='Skills'>
                                architecture
                            </span>
                            <p className='section-name' id="Skills">
                                Skills
                            </p> 
                        </div>
                    </Menu.Item>
                    <Menu.Item className={'dropdown-menu'} onClick={handleClickScroll} id="Projects">
                        <div className={`dropdown-item ${props.darkMode}`}>
                            <span className="material-icons" id="Projects">
                                token
                            </span>
                            <p className='section-name' id="Projects">
                                Projects
                            </p>     
                        </div>
                    </Menu.Item>
                    <Menu.Item className={'dropdown-menu'} onClick={handleClickScroll} id="Work Experience">
                        <div className={`dropdown-item ${props.darkMode}`}>
                            <span className="material-icons" id="Work Experience">
                                work
                            </span>
                            <p className='section-name' id="Work Experience">
                                Work Experience
                            </p>
                        </div>
                    </Menu.Item>
                    <Menu.Item className={'dropdown-menu'} onClick={handleClickScroll} id='Awards'>
                        <div className={`dropdown-item ${props.darkMode}`}>
                            <span className="material-icons" id="Awards">
                                emoji_events
                            </span>
                            <p className='section-name' id='Awards'>
                                Awards
                            </p>            
                        </div>
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </div>
            )
}