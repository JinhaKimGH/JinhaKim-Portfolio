import { Experience } from "../data/Interfaces";
import ReactHtmlParser from 'react-html-parser';
import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

/**
 * Work Component
 *  
 * @param {Object} props - The component props.
 * @param {string} props.darkMode - The dark property that determines the color styling of the page
 * @param {Project} props.experience - The experience object containing all the work experience information
 * @returns {JSX.Element} A React JSX element representing the Work Experience component, a component to display an individual work experience
*/
export default function WorkExperience(props: {darkMode: string, experience: Experience}): JSX.Element{
    
    return (
        <AccordionItem className={`single-experience ${props.darkMode}`}>
            {/* If clicked, the experience trigger opens the full experience on the screen */}
            <AccordionButton className={`${props.darkMode} accordion-button`}>
                <div className='experience-trigger'>
                    <img className='experience-icon' src={props.experience.icon}/>
                    <h3>{`${props.experience.company} - ${props.experience.title}`}</h3>
                    <p>{`(${props.experience.location})`}</p>
                </div>
                <AccordionIcon />
            </AccordionButton>
            {/* The expanded details of the experience */}
            <div>
                <AccordionPanel className='expanded-experience' pb={4}>
                    <p><strong>{props.experience.date}</strong></p>
                    {ReactHtmlParser(props.experience.description)}
                    <div className='empty-space'></div>
                </AccordionPanel>
            </div>
        </AccordionItem>
    )
}