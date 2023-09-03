import { SyntheticEvent } from "react";
import DarkModeToggle from "./DarkModeToggle"
import Hamburger from "./Hamburger";

/**
 * Navbar Component
 *  
 * @param {Object} props - The component props.
 * @param {string} props.darkMode - The dark property that determines the color styling of the page
 * @param {React.Dispatch<React.SetStateAction<string>>} props.setDarkMode - A function that updates the DarkMode state
 * @returns {JSX.Element} A React JSX element representing the Navbar Component, the navbar component of the website
*/
export default function Navbar(props: {darkMode: string,  setDarkMode: React.Dispatch<React.SetStateAction<string>>}): JSX.Element{
    // User Color css variable is set depending on whether the site is in dark or light mode
    const style = {"--user-color": `${props.darkMode == 'dark' ? '#fff' : '#333'}`} as React.CSSProperties;

    // Scrolls into the section when it is clicked on in the navbar
    // Queries the parent element and finds the childnode containing the section name
    function handleClickScroll(event : SyntheticEvent){
        const input = (event.target as HTMLElement).parentElement;
        
        if(input){
            const children = input.querySelectorAll('.section-name');

            if (children){
                const element = document.getElementById(children[0].innerHTML.toLowerCase())
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    }

    return (
        <nav className={`navbar ${props.darkMode}`}>
            <Hamburger darkMode={props.darkMode}/>
            {/* Navbar component contains the title, the different sections of the page, and the dark/light mode toggle */}
            <div className='name'>
                Jinha Kim
            </div>
            <ul className="nav-items">
                <li style={style}>
                    <a className="nav-list-item" onClick={handleClickScroll}>
                        <span className="material-icons">
                            person
                        </span>
                        <p className='section-name'>
                            About
                        </p>           
                    </a>
                </li>
                <li style={style}>
                    <a className="nav-list-item" onClick={handleClickScroll}>
                        <span className="material-icons">
                            architecture
                        </span>
                        <p className='section-name'>
                            Skills
                        </p>            
                    </a>
                </li>

                <li style={style}>
                    <a className="nav-list-item" onClick={handleClickScroll}>
                        <span className="material-icons">
                            token
                        </span>
                        <p className='section-name'>
                            Projects
                        </p>              
                    </a>
                </li>

                <li style={style}>
                    <a className="nav-list-item" onClick={handleClickScroll}>
                        <span className="material-icons">
                            work
                        </span>
                        <p className='section-name'>
                            Work Experience
                        </p>
                    </a>
                </li>

                <li style={style}>
                    <a className="nav-list-item" onClick={handleClickScroll}>
                        <span className="material-icons">
                            emoji_events
                        </span>
                        <p className='section-name'>
                            Awards
                        </p>            
                    </a>
                </li>

                <li style={style}>
                    <a className="nav-list-item" onClick={handleClickScroll}>
                        <span className="material-icons">
                            contact_page
                        </span>
                        <p className='section-name'>
                            Contact
                        </p>             
                    </a>
                </li>

            </ul>
            <DarkModeToggle darkMode={props.darkMode} setDarkMode={props.setDarkMode}/>
        </nav>
    )
}