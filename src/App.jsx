import { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import './App.css';
import Deck from './Deck'

export default function App() {
  return (
    <div className='App__container'>

      <section className='App__sectionOne'>
        <div className='App__sectionOneLeft'>
        <h1>
        Find your NOW home
        </h1>
        <p>
        We’ll find you a home that’s 100 percent your type on paper
        </p>
        <button>
          view on appstore
        </button>
        </div>

        <div className='App__sectionOneRight'>
          <Deck />  
        </div>

      </section>

    </div>
  )
}
