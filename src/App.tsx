import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

/**
 * App Component
 *  
 * @returns {JSX.Element} A React JSX element representing the App Component
*/
function App(): JSX.Element {

  return (
    <>
      <Navbar/>
      
      <Container minHeight={"90vh"} width="100%" maxWidth="100%">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experience />} />
        </Routes>
      </Container>

      <Footer/>
    </>
  )
}

export default App
