import { BrowserRouter, Route } from 'react-router-dom'
import MusicControl from './components/music/MusicControl'
import ArtistImage from './components/top/ArtistImage'
import BackgroundGray from './components/top/BackgroundGray'
import FlowingImage from './components/top/FlowingImage'
import EmergeBiography from './components/top/scrollUIkit/EmergeBiography'
import EmergeImage from './components/top/scrollUIkit/EmergeImage'
import TopHeader from './components/top/TopHeader'
import { ParentHeight } from './components/UIkit/ParentHeight'
import ScrollInduction from './components/UIkit/ScrollInduction'
import Top from './containers/Top'
import { MUSICSWITCH } from './types/musicType'

const Router = (props: MUSICSWITCH) => {
  return (
    <ParentHeight>
      <BrowserRouter>
        {/* <Route play={props.play} pause={props.pause} exact path='(/?)' component={Top} /> */}
        <Route exact path='(/?)' render={() => <Top play={props.play} pause={props.pause} />} />
        <Route exact path='/scroll' component={ArtistImage} />
        <Route exact path='/image' component={BackgroundGray} />
        <Route exact path='/text' component={EmergeBiography} />
        <Route exact path='/images' component={FlowingImage} />
      </BrowserRouter>
    </ParentHeight>
  )
}

export default Router
