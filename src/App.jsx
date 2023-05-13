import { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import './App.css';
import Deck from './Deck'
import Phone from './components/Phone/Phone';
import Framer from "./Images/framer.svg";
import BulletRow from './BulletRow/BulletRow';



export default function App() {

  const [active, setActive] = useState(1);

  
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
                Clay, a renting platform powered by AI. <br/>
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
        <section className='App_BlackBlock'>
          <div className='App_BlackLeft'>
            <div className='App__Blacktext'>
              <h1>
                no more time wasting 
              </h1>
              <BulletRow active = {0} words = "We’re searching for you, even when you're not"/>
              <BulletRow active = {active} words = "Be notified on the move for the best time to enquire"/>
              <BulletRow active = {active} words = "Reach out to estate agents with just one click"/>
            </div>
          </div>
          <div className='App_BlackRight'>

          </div>
        </section>
      </section>

    </div>
  )
}
