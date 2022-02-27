import React from 'react'
import { styled } from '@mui/material/styles'

const Container = styled('div')({
  width: '100%',
  position: 'relative',
})

const ScrollText = styled('div')({
  position: 'absolute',
  left: '50%',
  height: 100,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    width: 1,
    height: 50,
    background: '#333',
    animation: 'pathmove 2s ease-in-out infinite',
    opacity: 0,
    '@keyframes pathmove': {
      '0%': {
        height: 0,
        top: 0,
        opacity: 0,
      },
      '30%': {
        height: 80,
        opacity: 1,
      },
      '100%': {
        height: 0,
        top: 160,
        opacity: 0,
      },
    },
  },
  animation: 'fadeScroll 3s ease-out forwards',
  '@keyframes fadeScroll': {
    '0%': {
      opacity: 0,
    },
    '60%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
})

const InductionLine = styled('span')({
  position: 'absolute',
  left: '-23px',
  top: '-18px',
  color: '#333',
  fontSize: 15,
  letterSpacing: '0.05em',
})

const ScrollInduction = () => {
  return (
    <Container>
      <ScrollText>
        <InductionLine>Scroll</InductionLine>
      </ScrollText>
    </Container>
  )
}

export default ScrollInduction
