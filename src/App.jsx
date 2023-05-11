import { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import './App.css';
import Deck from './Deck'
import Phone from './components/Phone/Phone';
import Framer from "./Images/framer.svg";

export default function App() {
  return (
    <div className='App__container'>
      <section className='App__Main'>
      {/* <img src={Framer} className='App__Frame'></img> */}
        <div className='App__MainLeft'>
        <div className='App__text'>
        <h1>
        Swipe to your <br/>
        future home.
        </h1>
        <p>
        Clay, the first renting platform powered by AI. <br/>
        Get a new home fast that’s 100% your type on paper.
        </p>
        <button>
          Join our Mailing List
        </button>
        </div>
        </div>
        

        <div className='App__MainRight'>
        <Phone />  
        </div>
      </section> 


      <section className='App__Black'>
        </section>


    </div>
  )
}
