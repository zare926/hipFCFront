import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import TopFade from './components/top/TopFade'
import TopLoading from './components/top/TopLoading'
import TopPiece from './components/top/TopPiece'
import TopTitle from './components/top/TopTitle'
import { ParentHeight } from './components/UIkit/ParentHeight'
import Top from './containers/Top'
import Test from './Test'

const Router = () => {
  return (
    <ParentHeight>
      <BrowserRouter>
        <Route exact path='/test' component={Test} />
        <Route exact path='(/?)' component={Top} />
        <Route exact path='/exa' component={TopPiece} />
        <Route exact path='/title' component={TopTitle} />
        <Route exact path='/fade' component={TopFade} />
      </BrowserRouter>
    </ParentHeight>
  )
}

export default Router
