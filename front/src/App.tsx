import React from 'react'
import logo from './logo.svg'
import './App.css'
import Router from './Router'
import { ParentHeight } from './components/UIkit/ParentHeight'

function App() {
  return (
    <ParentHeight>
      <Router />
    </ParentHeight>
  )
}

export default App
