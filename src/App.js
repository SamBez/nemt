import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Navbar from './pages/Navbar';
import ContactForm from './pages/Contactus';
import Footer from './components/Footer';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <body className="leading-normal w-screen h-screen tracking-normal border-lime-500 " style={{background: "linear-gradient(90deg, #8a8a8a 20%, #c2b280 100%)"}}>
    <BrowserRouter>
      <Navbar/>
      <Routes>

          <Route path='/home'  element={<Home/>} />
          <Route path='/'  element={<Home/>} />
          <Route path='/aboutus' element={<About/>} />
          <Route path='/contactus' element={<ContactForm/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        
       </Routes>
      </BrowserRouter>
      <Footer/>

    </body>
  );
}

export default App;
