import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { ParentHeight } from './components/UIkit/ParentHeight'
import Top from './containers/Top'
import Test from './Test'

const Router = () => {
  return (
    <ParentHeight>
      <BrowserRouter>
        <Route path='/test' component={Test} />
        <Route path='/' component={Top} />
      </BrowserRouter>
    </ParentHeight>
  )
}

export default Router
