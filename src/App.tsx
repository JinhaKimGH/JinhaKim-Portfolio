import React from 'react';
import Navbar from './components/Navbar';

/**
 * App Component
 *  
 * @returns {JSX.Element} A React JSX element representing the App Component
*/
function App(): JSX.Element {
  // The state that determines the color scheme of the website
  const [darkMode, setDarkMode] = React.useState('light');

  // Effect that detects the system theme of the user, and sets the setDarkMode state
  React.useEffect(() => {
    const darkTheme  = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkTheme.matches){
      setDarkMode('dark');
    } else {
      setDarkMode('light');
    }
  }, []);

  return (
    <div className={darkMode}>
      {/* The Navbar component */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}></Navbar>
    </div>
  )
}

export default App
