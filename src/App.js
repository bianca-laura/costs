import {BrowserRouter as Router, Routes, Route,}from 'react-router-dom'
import Home from './components/pages/Home'
import Empresa from './components/pages/Empresa'
import Contato from './components/pages/Contato'
import NovoProjeto from './components/pages/NovoProjeto'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Projects from './components/pages/Projects'

import Container from './components/layout/Container'

function App() {
  return (
   <Router>
     <Navbar />
     <Container customClass="min_height">  
        <Routes>
       
            <Route 
              exact path="/" element={<Home />} > 
            </Route>

            <Route 
              exact path="/empresa" element={<Empresa />} > 
            </Route>

            <Route 
              exact path="/contato" element={<Contato />} > 
            </Route>

            <Route 
              exact path="/projects" element={<Projects />} > 
            </Route>

            <Route 
              exact path="/novoProjeto" element={<NovoProjeto />} > 
            </Route>
        </Routes>
      </Container>


     <Footer />
   </Router>
  )
}
export default App;
