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
    return (
        <nav className={`navbar ${props.darkMode}`}>
            {/* Navbar component contains the title, the different sections of the page, and the dark/light mode toggle */}
            <div className='name'>
                Jinha Kim
            </div>
            <ul className="nav-items">
                <li className="nav-list-item">
                    <span className="material-icons">
                        person
                    </span>About
                </li>
                <li className="nav-list-item">
                    <span className="material-icons">
                        architecture
                    </span>Skills
                </li>
                <li className="nav-list-item">
                    <span className="material-icons">
                        token
                    </span>Projects
                </li>
                <li className="nav-list-item">
                    <span className="material-icons">
                        work
                    </span>Work Experience
                </li>
                <li className="nav-list-item">
                    <span className="material-icons">
                        emoji_events
                    </span>Awards
                </li>
            </ul>
            <DarkModeToggle darkMode={props.darkMode} setDarkMode={props.setDarkMode}/>
        </nav>
    )
}