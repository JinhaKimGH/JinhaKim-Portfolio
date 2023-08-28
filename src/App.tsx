import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';

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
      {/* The Navbar Component */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      {/* The About Section */}
      <About darkMode={darkMode}/>
      {/* The Skills Section */}
      <Skills darkMode={darkMode}/>
    </div>
  )
}

export default App
