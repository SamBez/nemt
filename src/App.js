import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Contactus from './pages/Contactus';
import Navbar from './pages/Navbar';

function App() {
  return (
    <body className="leading-normal tracking-normal border-lime-500 " style={{background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)"}}>
      <Navbar/>
           <BrowserRouter>

      <Routes>
          <Route path='/home'  element={<Home/>} />
          <Route path='/'  element={<Home/>} />

          <Route path='/aboutus' element={<About/>} />
          <Route path='/contactus' element={<Contactus/>} />
        
       </Routes>


      </BrowserRouter>
    </body>
  );
}

export default App;
