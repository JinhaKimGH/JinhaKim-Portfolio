
/**
 * Skills Component
 *  
 * @param {Object} props - The component props.
 * @param {string} props.darkMode - The dark property that determines the color styling of the page
 * @returns {JSX.Element} A React JSX element representing the Skills component, the skills section of the page
*/
export default function Skills(props: {darkMode: string}): JSX.Element{
    // User Color css variable is set depending on whether the site is in dark or light mode
    const style = {"--user-color": `${props.darkMode == 'dark' ? '#fff' : '#333'}`} as React.CSSProperties;


    return (
        <div id="skills" className={`skills ${props.darkMode}`}>    
            <div className='header'style={style}>
                <div className='line'></div>
                <h1>Skills</h1>
                <div className='line'></div>
            </div>

            <div className='skill-tree'>
                <div className='skill-left'>
                    <h4>Languages</h4>
                    <div className='skill-matrix'>
                        <div className='icon'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                            <p>Python</p>
                        </div>
                        
                        <div className='icon'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            <p>JavaScript</p>
                        </div>

                        <div className='icon'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                            <p>TypeScript</p>
                        </div>

                        <div className='icon'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                            <p>HTML</p>
                        </div>

                        <div className='icon'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                            <p>CSS</p>
                        </div>


                        <div className='icon'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                            <p>C</p>
                        </div>

                        <div className='icon'>
                            <img src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" />
                            <p>C++</p>
                        </div>

                        <div className='icon'>
                            <img src="https://cdn-icons-png.freepik.com/512/919/919854.png" />
                            <p>Java</p>
                        </div>

                    </div>

                </div>
                <div className='middle-break' style={style}></div>
                <div className='skill-middle'>
                    <h4>Frameworks & Databases</h4>

                    <div className='skill-matrix'>
                        
                        <div className='icon'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            <p>ReactJS</p>    
                        </div>

                        <div className='icon'>
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/angular-icon-logo-svg-vector.svg" />
                            <p>Angular</p>    
                        </div>

                        <div className='icon'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                            <p>NodeJS</p>
                        </div>

                        <div className='icon'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                            <p>Express</p>
                        </div>

                        <div className='icon'>
                            <img src="https://static-00.iconduck.com/assets.00/spring-icon-256x256-2efvkvky.png" />
                            <p>Spring</p>    
                        </div>


                        <div className='icon'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                            <p>MySQL</p>
                        </div>

                        <div className='icon'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                            <p>MongoDB</p>    
                        </div>
            
                        <div className='icon'>
                            <img src="https://avatars.githubusercontent.com/u/7552965?s=280&v=4" />
                            <p>Mongoose</p>
                        </div>

                        <div className='icon'>
                            <img src="https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png" />
                            <p>Redis</p>
                        </div>

                        <div className='icon'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
                            <p>Firebase</p>
                        </div>

                        <div className='icon'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
                            <p>JEST</p>
                        </div>

                        <div className='icon'>
                            <img src="https://junit.org/junit5/assets/img/junit5-logo.png" />
                            <p>JUnit</p>
                        </div>
                    </div>
                </div>
                <div className='middle-break' style={style}></div>
                <div className='skill-right'>
                    <h4>Development Tools</h4>

                    <div className='skill-matrix'>
                        <div className='icon'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                            <p>Git</p>
                        </div>

                        <div className='icon'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
                            <p>NPM</p>
                        </div>

                        <div className='icon'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" />
                            <p>Webpack</p>
                        </div>

                        <div className='icon'>
                            <img src="https://static-00.iconduck.com/assets.00/file-type-maven-icon-192x256-wb8b12w6.png" />
                            <p>Maven</p>
                        </div>

                        <div className='icon'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                            <p>Docker</p>
                        </div>

                        <div className='icon'>
                            <img src="https://cdn.iconscout.com/icon/free/png-256/free-openshift-283020.png?f=webp" />
                            <p>OpenShift</p>
                        </div>

                        <div className='icon'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                            <p>Linux</p>
                        </div>

                        <div className='icon'>
                            <img src="https://cdn.worldvectorlogo.com/logos/jira-1.svg" />
                            <p>Jira</p>
                        </div>

                        <div className='icon'>
                            <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_confluence_icon_130672.png" />
                            <p>Confluence</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}