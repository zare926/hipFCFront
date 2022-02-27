import React, { useEffect, useState } from 'react'
import InitialModal from '../components/top/InitialModal'
import { styled } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import {
  initialTopControl,
  topControl,
  topFadeControl,
  topFadeOpen,
  topLoadingControl,
} from '../reducers/controlBoolSlice'
import TopLoading from '../components/top/TopLoading'
import TopFade from '../components/top/TopFade'
import TopTitle from '../components/top/TopTitle'
import TopHeader from '../components/top/TopHeader'
import MusicControl from '../components/music/MusicControl'
import { MUSICSWITCH } from '../types/musicType'
import ScrollInduction from '../components/UIkit/ScrollInduction'
import ArtistImage from '../components/top/ArtistImage'
import SpaceBox from '../components/UIkit/SpaceBox'

const Container = styled('div')({
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

const MusicControlBlock = styled('div')({
  position: 'absolute',
  right: '4.5rem',
  marginTop: 150,
  cursor: 'pointer',
  '@media screen and (max-width: 1024px)': {
    marginTop: 100,
  },
  '@media screen and (max-width: 599px)': {
    marginTop: 100,
  },
  animation: 'fadeDisc 4s linear forwards',
  '@keyframes fadeDisc': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
})

const Top = (props: MUSICSWITCH) => {
  const dispatch = useDispatch()
  // Loadingを出すためのReduxBool
  const topLoading = useSelector(topLoadingControl)
  // Loading後Fadeを出すためのReduxBool
  const topFade = useSelector(topFadeControl)
  // 初期トップの表示をするかどうかのReduxBool
  const initialTop = useSelector(initialTopControl)
  // メインのトップ画面の表示制御用ReduxBool
  const topBool = useSelector(topControl)

  return (
    <Container>
      {topLoading.isOpen && <TopLoading />}
      {topFade.isOpen && <TopFade />}
      {/* <TopPiece /> */}
      {initialTop.isOpen && <InitialModal />}
      {topBool.isOpen && (
        <>
          <TopHeader />
          <MusicControlBlock>
            <MusicControl play={props.play} pause={props.pause} />
          </MusicControlBlock>
          <TopTitle />
          {/* <ScrollInduction /> */}
          <ArtistImage />
          <SpaceBox height={1000} />
        </>
      )}
    </Container>
  )
}

export default Top
