import DarkModeToggle from "./DarkModeToggle"

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

    return (
        <nav className={`navbar ${props.darkMode}`}>
            {/* Navbar component contains the title, the different sections of the page, and the dark/light mode toggle */}
            <div className='name'>
                Jinha Kim
            </div>
            <ul className="nav-items">
                <li style={style}>
                    <a className="nav-list-item">
                        <span className="material-icons">
                            person
                        </span>About
                    </a>
                </li>
                <li style={style}>
                    <a className="nav-list-item">
                        <span className="material-icons">
                            architecture
                        </span>Skills
                    </a>
                </li>

                <li style={style}>
                    <a className="nav-list-item">
                        <span className="material-icons">
                            token
                        </span>Projects
                    </a>
                </li>

                <li style={style}>
                    <a className="nav-list-item">
                        <span className="material-icons">
                            work
                        </span>Work Experience
                    </a>
                </li>

                <li style={style}>
                    <a className="nav-list-item">
                        <span className="material-icons">
                            emoji_events
                        </span>Awards
                    </a>
                </li>

            </ul>
            <DarkModeToggle darkMode={props.darkMode} setDarkMode={props.setDarkMode}/>
        </nav>
    )
}