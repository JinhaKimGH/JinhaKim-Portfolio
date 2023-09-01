import { AwardType } from "../data/Interfaces";

/**
 * Award Component
 *  
 * @param {Object} props - The component props.
 * @param {string} props.darkMode - The dark property that determines the color styling of the page
 * @param {AwardType} props.award - The award object that has all the details of the awards
 * @returns {JSX.Element} A React JSX element representing the Award component, the individual award component
*/
export default function Award(props: {darkMode: string, award: AwardType}): JSX.Element{
   // User Color css variable is set depending on whether the site is in dark or light mode
   const style = {"--user-color": `${props.darkMode == 'dark' ? '#fff' : '#333'}`} as React.CSSProperties;

    return (
        // Displays the image icon of the award issuer and the award description
        <div style={style} className={`award ${props.darkMode}`}>
            <img src={props.award.icon}></img>
            <h2>{props.award.name}</h2>
        </div>
    )
}