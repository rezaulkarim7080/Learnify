
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';

import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useState } from 'react';
import Home from './pages/Home';
import Courses from './pages/Courses';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';
import SingleCourse from './pages/SingleCourse';
import AllCourses from './pages/Allcourses';
import Cart from './pages/Cart';



// dark theme Reacts


function App() {

  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (

    <div className={`${darkMode ? 'dark text-white' : 'light'}`}>
      <BrowserRouter>
        <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes >
          <Route path='/' element={<Home darkMode={darkMode} />} />

          <Route path='/allcourses' element={<AllCourses darkMode={darkMode} />} />
          <Route path='/faq' element={<FAQ darkMode={darkMode} />} />
          <Route path='/blog' element={<Blog darkMode={darkMode} />} />
          <Route path='/login' element={<Login darkMode={darkMode} />} />
          <Route path='/register' element={<Register darkMode={darkMode} />} />
          <Route path='/:id' element={<SingleCourse darkMode={darkMode} />} />
          <Route path='/cart/:id' element={<Cart darkMode={darkMode} />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
