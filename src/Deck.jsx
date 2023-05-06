import { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import styles from './styles.module.css'
import './Deck.css'

const cards = [
  'https://media.rightmove.co.uk/19k/18984/134048846/18984_ELL220337_L_IMG_00_0000.jpeg',
  'https://media.rightmove.co.uk/77k/76342/134038007/76342_ISL192905_IMG_00_0000.jpeg',
  'https://media.rightmove.co.uk/93k/92014/134011436/92014_000166753_IMG_05_0000.jpeg',
  'https://media.rightmove.co.uk/40k/39872/134049602/39872_100783015594_IMG_01_0000.jpeg',
  'https://media.rightmove.co.uk/46k/45899/82292782/45899_FUP120443_L_IMG_00_0001.jpeg',
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
  x: 0,
  y: i * -3,
  scale: 1,
  rot: Math.random() * 10 - 5,
  delay: i * 100,
})
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(2500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

export default function Deck() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
    const trigger = vx > 0.2 // If you flick hard enough it should trigger the card to fly out
    if (!active && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = active ? 1.1 : 1 // Active cards lift up a bit
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!active && gone.size === cards.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <div className='Deck__deckHolder'>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className="Deck__deck" key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            className="Deck__card"
            style={{
              transform: interpolate([rot, scale], trans),
            }}
          >
          <img src={cards[i]} draggable="false"></img>
          <div className="Deck__cardInfo">
          <b className='Deck__cardInfoAddress'>29C, Parsons Green</b>
          <p className='Deck__cardInfoPrice'>£2900pcm</p>
          <p className='Deck__cardInfoDescription'>this house is very very nice</p>

          </div>
          </animated.div>
        </animated.div>
      ))}
    </div>
  )
}
