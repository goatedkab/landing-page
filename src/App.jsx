import { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import './App.css';
import Deck from './Deck'
import Phone from './components/Phone/Phone';

export default function App() {
  return (
    <div className='App__container'>

      <section className='App__sectionOne'>
        <div className='App__sectionOneLeft'>
        <div className="App__sectionOneLeftChunk">
        <h1>
        Swipe to your <br/>
        future home.
        </h1>
        <p>
        Clay, the first renting platform powered by AI. <br/>
        Get a new home fast that’s 100% your type on paper.
        </p>
        <button>
          view on appstore
        </button>
        </div>
        </div>
        

        <div className='App__sectionOneRight'>
        <Phone />  
        </div>
      </section>

    </div>
  )
}
