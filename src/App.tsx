import { useState } from 'react'
import './App.css'
import Carousel from './components/Carousel';
import slides from './data/CarouselData';

function App() {

  return (
    <>
    <Carousel data={slides}/>
    </>
  )
}

export default App
