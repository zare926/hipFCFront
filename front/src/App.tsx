import React from 'react'
import logo from './logo.svg'
import './App.css'
import Router from './Router'
import { ParentHeight } from './components/UIkit/ParentHeight'
import useSound from 'use-sound'

import { useSelector } from 'react-redux'
import { musicControl } from './reducers/controlBoolSlice'
import Music from './components/music/Music'

function App() {
  const playBool = useSelector(musicControl)
  return (
    <ParentHeight>
      {playBool && <Music />}
      <Router />
    </ParentHeight>
  )
}

export default App
