import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InitialModal from './components/top/InitialModal'
import { ParentHeight } from './components/UIkit/ParentHeight'
import Test from './Test'

const Router = () => {
  return (
    <ParentHeight>
      <BrowserRouter>
        <Routes>
          <Route path='/test' element={<Test />} />
          <Route path='/modal' element={<InitialModal />} />
        </Routes>
      </BrowserRouter>
    </ParentHeight>
  )
}

export default Router
