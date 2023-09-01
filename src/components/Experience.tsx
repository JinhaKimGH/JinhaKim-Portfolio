import { experience_list } from "../data/WorkExperiences";
import WorkExperience from "./WorkExperience";
import { Accordion } from '@chakra-ui/react'

/**
 * Experience Component
 *  
 * @param {Object} props - The component props.
 * @param {string} props.darkMode - The dark property that determines the color styling of the page
 * @returns {JSX.Element} A React JSX element representing the Experience component, contains all my work experience
*/
export default function Experience(props: {darkMode: string}): JSX.Element{
    // User Color css variable is set depending on whether the site is in dark or light mode
    const style = {"--user-color": `${props.darkMode == 'dark' ? '#fff' : '#333'}`} as React.CSSProperties;

    return (
        <div id="work experience" className={`experience ${props.darkMode}`}>
            <div className='header'style={style}>
                <div className='line'></div>
                <h1>Work Experience</h1>
                <div className='line'></div>
            </div>

            <Accordion className="work-experience-container" allowToggle>
                {experience_list.map((experience) => 
                    <WorkExperience 
                        darkMode={props.darkMode} 
                        experience={experience} 
                        key={experience.company}
                    />)}
            </Accordion>
        </div>
    )
}