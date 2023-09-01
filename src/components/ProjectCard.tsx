import { Project } from "../data/Interfaces"

/**
 * Projects Component
 * 
 * @param {Object} props - The component props.
 * @param {string} props.darkMode - The dark property that determines the color styling of the card
 * @param {Project} props.project - The project object containing all the project information
 * @returns {JSX.Element} A React JSX element representing the ProjectCard component, a card containing a description of a personal project
 */
export default function ProjectCard(props: {darkMode: string, project: Project}): JSX.Element{
    return(
        <a href={props.project.link} target="_blank" className={`project-card ${props.darkMode}`}>
            <img className="project-image" src={props.project.image}/>

            <div className='project-info'>
                <div className='project-languages'>
                    {props.project.languages.map((language) => <div className="project-language" key={language}>{language}</div>)}
                </div>
                <h2 className='project-title'>{props.project.name}</h2>
                <p className='project-description'>{props.project.description}</p>
            </div>
        </a>
    )
}