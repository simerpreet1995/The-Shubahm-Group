import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/landingpage/header/Home';
import About from './components/landingpage/header/About';
import Team from './components/landingpage/header/Team';
import OurMasterpiece from './components/landingpage/header/OurMasterpiece';
import JoinUs from './components/landingpage/header/JoinUs';
import ContactUs from './components/landingpage/header/ContactUs';
import Blogs from './components/landingpage/header/Blogs';
import Header from './components/landingpage/header/Header';
import styled from '@emotion/styled';




function App() {
  return (
    <div className="App">
      <header style={{border: "3px solid gray", marginTop: "60px",
   }}>
        <Header />
      </header>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>} ></Route>
            <Route path='/team' element={<Team/>}></Route>
            <Route path='/masterpiece' element={<OurMasterpiece/>}></Route>
            <Route path='/join-us' element={<JoinUs/>}></Route>
            <Route path='/contact' element={<ContactUs/>}></Route>
            <Route path='/blogs' element={<Blogs/>}></Route>
         </Routes>
     


    </div>
  );
}

export default App;
