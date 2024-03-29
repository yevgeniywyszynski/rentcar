import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Cars from '../Cars/CarsContainer';
import Portfolio from '../Portfolio/Portfolio';
import BookingCar from '../BookingCar/BookingCarContainer';

function App() {
  return (
    <Router>
        <div className="App">  
        </div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/booking/:id" element={<BookingCar/>} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
