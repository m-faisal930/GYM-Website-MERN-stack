import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkoutSessions from './components/WorkoutSessions';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BMICalculator from './components/MBICalculator';


export default function App() {


  return (
    <>
    <Router>
      <Navbar />
      <Hero />
<div style={{width: '95%', margin: 'auto'}}>
      <WorkoutSessions />
      </div>

      <Gallery />
      <div style={{width: '95%', margin: 'auto'}}>
      <Pricing />
      </div>
      <Contact />
      <BMICalculator />
      <Footer />
      <ToastContainer theme='dark' position='top-center'/> 
    </Router>
    </>
  );
}

