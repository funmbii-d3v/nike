import { useEffect } from 'react'
import spawnHeart from './fallingObjects'
import MusicPlayer from './MusicPlayer'
import Polaroid from './Polaroid'
import TornNote from './TornNote'
const Body = () => {
  useEffect(()=> {
    const id=setInterval(spawnHeart, 500)
    return ()=> clearInterval(id)
  })
  return (
    <div className='body'>
      <Polaroid image={"/photo/mog.jpeg"} tilt={-4} date={"Sometime in September"}/>
      <TornNote tilt={-3}>On this day 19 years ago, you were born. If i were to say some mean things about you, this space won't be enough. So let me be nice.</TornNote>
      <Polaroid image={"/photo/fits.jpeg"} tilt={18} date={"13.09.2026"}/>
      <TornNote tilt={2} holes>Adenike Onyinyechukwu, when i count my blessings, I put you on a loop to count forever. Your charisma, humour, and how we relate like it's not a two-year gap between us. I remember those times, we used to fight about the littlest of things, like that time you beat me up because of broom (I didn't fight back)</TornNote>
      <Polaroid image={"/photo/twin.jpeg"} tilt={0} date={"Twinned so hard we did the same pose"}/>
      <TornNote tape={false}>Fits, oh how i love that name. And maybe even, you. Oh so much. I love your body, and face, and 10 other things about you. You're literally one of the bestest things I could ever ask for. I love how you love me, and let's say I'm using the word too much. Happiest of birthdays, Adenike. Happy womb escape day. Happy cake day. And a happy 19th. </TornNote>
      <Polaroid image={"/photo/collage.jpeg"} tilt={-12} date={"18.10.2025"}/>
      <MusicPlayer/>
    </div>
  )
}

export default Body