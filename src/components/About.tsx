import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

/**
 * About Component
 *  
 * @param {Object} props - The component props.
 * @param {string} props.darkMode - The dark property that determines the color styling of the page
 * @returns {JSX.Element} A React JSX element representing the About component, the about section of the page
*/
export default function About(props: {darkMode: string}): JSX.Element{
    // User Color css variable is set depending on whether the site is in dark or light mode
    const style = {"--user-color": `${props.darkMode == 'dark' ? '#fff' : '#333'}`} as React.CSSProperties;

    return (
        <div id="about" className={`about ${props.darkMode}`}>
            <div className='about-container'>
                <div className='about-pic-container'>
                    <img className='about-picture' src='jinhakim.jpg'></img>
                </div>
                <div className='about-summary'>
                    <div className='header'style={style}>
                        <div className='line'></div>
                        <h1>About</h1>
                        <div className='line'></div>
                    </div>
                    <p>Hi, I'm Jinha Kim.</p>
                    <p className="program-summary">I'm a student currently studying at the University of Waterloo in the Computer Engineering Program. I am a naturally curious person with a passion for continuous learning. Currently, my interests are centered around AI (Artificial Intelligence) and Fullstack development. Some of my hobbies include staying active and engaged in various activities such as Soccer, Basketball, and weightlifting.</p>
                    
                    <div className="contact">
                        <a href="mailto: j733kim@uwaterloo.ca" target="_blank" rel="noopener noreferrer" title="Email"><FontAwesomeIcon className='contact-icon' icon={faEnvelope} style={{color: `${props.darkMode == 'dark' ? '#fff' : '#333'}`}}/></a>
                        <a href="https://github.com/JinhaKimGH" target="_blank" rel="noreferrer" title='GitHub'><FontAwesomeIcon className='contact-icon' icon={faGithub} style={{color: `${props.darkMode == 'dark' ? '#fff' : '#333'}`}}/></a>
                        <a href="https://www.linkedin.com/in/jinha-kim/" target="_blank" rel="noreferrer" title='LinkedIn'><FontAwesomeIcon className='contact-icon' icon={faLinkedinIn} style={{color: `${props.darkMode == 'dark' ? '#fff' : '#333'}`}} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}