import { awards } from "../data/AwardsList";
import Award from "./Award";
/**
 * Awards Component
 *  
 * @param {Object} props - The component props.
 * @param {string} props.darkMode - The dark property that determines the color styling of the page
 * @returns {JSX.Element} A React JSX element representing the Awards component, the awards section of the page
*/
export default function Awards(props: {darkMode: string}): JSX.Element{
    // User Color css variable is set depending on whether the site is in dark or light mode
    const style = {"--user-color": `${props.darkMode == 'dark' ? '#fff' : '#333'}`} as React.CSSProperties;

    return (
        <div  id="awards" className={`awards ${props.darkMode}`}>
            <div className='header'style={style}>
                <div className='line'></div>
                <h1>Awards</h1>
                <div className='line'></div>
            </div>
            
            <div className='summary'>
                A list of my academic achievements.
            </div>

            <div className='awards-container'>
                {awards.map((award) => 
                    <Award
                        key={award.name}
                        darkMode={props.darkMode}
                        award={award}
                    />)}
            </div>
        </div>
    )
}