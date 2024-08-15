import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Navbar from './pages/Navbar';
import ContactForm from './pages/Contactus';

function App() {
  return (
    <body className="leading-normal w-screen h-screen tracking-normal border-lime-500 " style={{background: "linear-gradient(90deg, #8a8a8a 20%, #c2b280 100%)"}}>
      <Navbar/>
           <BrowserRouter>

      <Routes>
          <Route path='/home'  element={<Home/>} />
          <Route path='/'  element={<Home/>} />

          <Route path='/aboutus' element={<About/>} />
          <Route path='/contactus' element={<ContactForm/>} />
        
       </Routes>


      </BrowserRouter>
    </body>
  );
}

export default App;
