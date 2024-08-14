import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Contactus from './pages/Contactus';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="h-screen bg-gray-100">
      <Navbar/>
           <BrowserRouter>

      <Routes>
          <Route path='/home'  element={<Home/>} />
          <Route path='/'  element={<Home/>} />

          <Route path='/aboutus' element={<About/>} />
          <Route path='/contactus' element={<Contactus/>} />
          {/* <Route path='/feedbacks' element={<Feedbacks/>} /> */}
      
         {/* <Route path='/login' element={<Login/>} />
         <Route path='/signup' element={<Signup/>} /> */}

        
       </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
