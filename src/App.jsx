import React from 'react'
import './App.css'
import Hero from './components/hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
     <Hero/>
     <Navbar/>
     <HeadlineCards />
     <Food />
    </>
  );
}

export default App;
