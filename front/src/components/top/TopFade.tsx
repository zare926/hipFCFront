import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { topFadeControl } from '../../reducers/controlBoolSlice'

const FadeContainer = styled('div')({
  position: 'fixed',
  width: '100%',
  height: '100%',
  background: '#fff',
  // zIndex: 9999999,
  textAlign: 'center',
  color: '#fff',
})

const TopFadeBlock = styled('div')({
  animationName: 'PageAnimeTop',
  animationDuration: '.15s',
  animationTimingFunction: 'linear',
  animationFillMode: 'forwards',
  content: '""',
  position: 'fixed',
  zIndex: 999,
  width: '100%',
  height: '100vh',
  bottom: '50%',
  left: 0,
  transform: 'scaleY(1)',
  backgroundColor: 'black',
  '@keyframes PageAnimeTop': {
    '0%': {
      transformOrigin: 'top',
      transform: 'scaleY(1)',
      opacity: 1,
    },
    '100%': {
      transformOrigin: 'top',
      transform: 'scaleY(0)',
      opacity: 0,
    },
  },
})

const BottomFadeBlock = styled('div')({
  animationName: 'PageAnimeBottom',
  animationDuration: '.15s',
  animationTimingFunction: 'linear',
  animationFillMode: 'forwards',
  content: '""',
  position: 'fixed',
  zIndex: 999,
  width: '100%',
  height: '100vh',
  top: '50%',
  left: 0,
  transform: 'scaleY(1)',
  backgroundColor: 'black',
  '@keyframes PageAnimeBottom': {
    '0%': {
      transformOrigin: 'bottom',
      transform: 'scaleY(1)',
      opacity: 1,
    },
    '100%': {
      transformOrigin: 'bottom',
      transform: 'scaleY(0)',
      opacity: 0,
    },
  },
})

// const Horizon = styled('div')({
//   borderBottom: 'solid 1px white',
// })

const TopFade = () => {
  const [opacity, setOpacity] = useState(1)
  const topFade = useSelector(topFadeControl)

  useEffect(() => {
    if (topFade) {
      setTimeout(() => {
        setOpacity(0)
      }, 1000)
    }
  }, [])
  return (
    <FadeContainer>
      {/* <FadeContainer style={{ opacity: opacity }}> */}
      <TopFadeBlock></TopFadeBlock>
      <BottomFadeBlock></BottomFadeBlock>
    </FadeContainer>
  )
}

export default TopFade
