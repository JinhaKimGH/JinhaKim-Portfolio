import ProjectCard from "./ProjectCard";
import { projects } from "../data/ProjectList";
/**
 * Projects Component
 * 
 * @param {Object} props - The component props.
 * @param {string} props.darkMode - The dark property that determines the color styling of the page
 * @returns {JSX.Element} A React JSX element representing the Projects component, the  section of the page that contains all my projects
 */
export default function Projects(props: {darkMode: string}): JSX.Element{
    // User Color css variable is set depending on whether the site is in dark or light mode
    const style = {"--user-color": `${props.darkMode == 'dark' ? '#fff' : '#333'}`} as React.CSSProperties;

    return (
        <div id="projects" className={`projects ${props.darkMode}`}>
            <div className='header'style={style}>
                <div className='line'></div>
                <h1>Projects</h1>
                <div className='line'></div>
            </div>

            <div className='summary'>
                Click on a project to learn more!
            </div>

            <div className="project-container">
                {projects.map((project) => <ProjectCard
                    darkMode={props.darkMode}
                    project={project}
                    key={project.name}
                />)}
            </div>
        </div>
    )
}