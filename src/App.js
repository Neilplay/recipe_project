import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import About from './Components/About';
import Homepage from './Components/Homepage';
import Recipe from './Components/Recipe';
import ContactUs from './Components/ContactUs';
import Ramen from './Components/Ramen';
import Sushi from './Components/Sushi';
import Bento from './Components/Bento';
import Dango from './Components/Dango';
import Takoyaki from './Components/Takoyaki';

function App() {
  return (
    <Routes>
      <Route path='home' element={<Homepage />} />
      <Route path='about' element={<About />} />
      <Route path='recipe' element={<Recipe />} />
      <Route path='contact' element={<ContactUs />} />
      <Route path='ramen' element={<Ramen />} />
      <Route path='sushi' element={<Sushi />} />
      <Route path='bento' element={<Bento />} />
      <Route path='dango' element={<Dango />} />
      <Route path='takoyaki' element={<Takoyaki />} />
      <Route path='/' element={<Navigate to="home" />} />
    </Routes>
  );
}

export default App;



