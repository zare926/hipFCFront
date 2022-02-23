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
import TopPiece from '../components/top/TopPiece'
import TopFade from '../components/top/TopFade'
import TopTitle from '../components/top/TopTitle'

const Container = styled('div')({
  overflowY: 'scroll',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

const Top = () => {
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
      {topBool.isOpen && <TopTitle />}
    </Container>
  )
}

export default Top
