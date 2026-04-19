import './App.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { Routes } from 'react-router-dom'
import ProjectDetails from './pages/ProjectDetails'



function App() {


  return (
    <div className='app'>
<Header />
     
     <Routes>
<Route path="/" element={<Home />} />
<Route path="/projects" element={<Projects />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />

<Route path='/projects/:projectID' element={<ProjectDetails />} />

</Routes>
<Footer />
    </div>
  )
}

export default App
