import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Containers/Home/Home'
import About from './Containers/AboutUs/About'
import Resume from './Containers/Resume/Resume'
import Skills from './Containers/Skills/Skills'
import Portfolio from './Containers/Portfolio/Portfolio'
import Contact from './Containers/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import Particals from './Helper/Utils.js/Particals';

function App() {

const location = useLocation();
console.log(location);

const renderparticalJsInHomePage = location.pathname === "/";

  return (
    <div className="App">

      {
        renderparticalJsInHomePage &&
        <Particals id='particals'/>
      }

      

      <Navbar/>

      
          <div className="main-page">

         
      <Routes>

      <Route index path='/' element={<Home/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route  path='/skills' element={<Skills/>}/>
      <Route  path='/resume' element={<Resume/>}/>
      <Route  path='/portfolio' element={<Portfolio/>}/>
      <Route  path='/contact' element={<Contact/>}/>

      </Routes>
      </div>
      
    </div>
  );
}

export default App;
