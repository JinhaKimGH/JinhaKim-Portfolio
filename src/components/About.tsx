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
                    <img className='about-picture' src='jinhakim.jpeg'></img>
                </div>
                <div className='about-summary'>
                    <div className='header'style={style}>
                        <div className='line'></div>
                        <h1>About</h1>
                        <div className='line'></div>
                    </div>
                    <p>Hi, I'm Jinha Kim.</p>
                    <p>I'm an aspiring full stack developer</p>
                    <p className="program-summary">currently studying at the University of Waterloo in the Computer Engineering Program. Outside of coding, I love to stay active by playing sports and going to the gym, I'm a fan of soccer and basketball, and I enjoy playing video games with my friends.</p>
                    
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