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
function App() {
  const [play, { stop, pause }] = useSound(DayByDay)
  const playBool = useSelector(musicControl)

  return (
    <ParentHeight>
      {playBool && <Music play={play} pause={pause} />}
      <Router play={play} pause={pause} />
    </ParentHeight>
  )
}

export default App
