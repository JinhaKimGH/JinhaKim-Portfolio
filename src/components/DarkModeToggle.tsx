import React from "react";
import ReactSwitch from "react-switch";

/**
 * DarkModeToggle Component
 *  
 * @param {Object} props - The component props.
 * @param {string} props.darkMode - The dark property that determines the color styling of the page
 * @param {React.Dispatch<React.SetStateAction<string>>} props.setDarkMode - A function that updates the DarkMode state
 * @returns {JSX.Element} A React JSX element representing the DarkModeToggle Component, toggle the style of the website
*/
export default function DarkModeToggle(props: {darkMode: string, setDarkMode: React.Dispatch<React.SetStateAction<string>>}): JSX.Element{

    function handleChange(val: boolean){
        if (val){
            props.setDarkMode('dark')
        } else {
            props.setDarkMode('light')
        }
    }

    return (
        <div className='switch-container'>
            <ReactSwitch
                checked={props.darkMode == 'dark'}
                onChange={handleChange}
                uncheckedIcon={false}
                checkedIcon={false}
                uncheckedHandleIcon={<span className="material-icons switch">
                                        light_mode
                                    </span>}
                checkedHandleIcon={<span className="material-icons switch">
                                        dark_mode
                                    </span>}
                onColor="#817ECE"
                offColor="#F7EAB7"
                onHandleColor="#4D4AB1"
                offHandleColor="#EAC254"
            />
        </div>
    )
}