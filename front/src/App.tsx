import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Router from './Router'
import { ParentHeight } from './components/UIkit/ParentHeight'

import { useSelector } from 'react-redux'
import { musicControl } from './reducers/controlBoolSlice'
import Music from './components/music/Music'

import useSound from 'use-sound'
import DayByDay from './assets/music/daybyday.mp3'

import { useMove } from 'react-use-gesture'
import { useSpring, useTrail, a } from '@react-spring/web'
import { styled } from '@mui/material/styles'

function App() {
  const [play, { stop, pause }] = useSound(DayByDay)
  const playBool = useSelector(musicControl)

  // const items = [40, 30, 20, 10]

  // const [trail, api] = useTrail(items.length, () => {
  //   return {
  //     x: 0,
  //     y: 0,
  //   }
  // })

  // const bind = useMove((state) => {
  //   const [x, y] = state.xy
  //   api.start({
  //     x: x - CircleSize / 2,
  //     y: y - CircleSize / 2,
  //   })
  // })

  return (
    <ParentHeight>
      {playBool && <Music play={play} pause={pause} />}
      {/* {trail.map((styles, index) => (
        <Circle style={{ width: items[index], height: items[index], ...styles }} />
      ))} */}
      {/* <Circle style={styles} /> */}
      <>
        <Router play={play} pause={pause} />
      </>
    </ParentHeight>
  )
}

export default App
