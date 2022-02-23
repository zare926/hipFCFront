import React from 'react'
import Logo from '../../assets/icon/hipMark.svg'
import { styled } from '@mui/material/styles'

const Container = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
  zIndex: '-100',
  overflow: 'hidden',
})

// 1
const LogoBlock1 = styled('div')({
  position: 'absolute',
  height: '100%',
  animation: 'fallMotion linear infinite',
  animationDuration: '19s',
  '@keyframes fallMotion': {
    '0%': {
      transform: 'translate(0%, -50%)',
    },
    '25%': {
      transform: 'translate(0%, 0%)',
    },
    '50%': {
      transform: 'translate(0%, 33.3%)',
    },
    '75%': {
      transform: 'translate(0%, 66.6%)',
    },
    '100%': {
      transform: 'translate(0%, 100%)',
    },
  },
})

const Logo1 = styled('img')({
  width: '22%',
  height: '22%',
  animation: 'rotateMotion linear infinite',
  animationDuration: '3s',
  '@keyframes rotateMotion': {
    '0%': {
      transform: 'rotate3d(2, 1, 1, 0deg)',
    },
    '25%': {
      transform: 'rotate3d(2, 1, 1, -90deg)',
    },
    '50%': {
      transform: 'rotate3d(2, 1, 1, -180deg)',
    },
    '75%': {
      transform: 'rotate3d(2, 1, 1, -270deg)',
    },
    '100%': {
      transform: 'rotate3d(2, 1, 1, -359deg)',
    },
  },
})

// 1L
const LogoBlockLate1 = styled('div')({
  position: 'absolute',
  height: '100%',
  animation: 'fallMotion linear infinite',
  animationDuration: '16s',
  marginLeft: '2%',
  '@keyframes fallMotion': {
    '0%': {
      transform: 'translate(0%, -200%)',
    },
    '20%': {
      transform: 'translate(0%, -140%)',
    },
    '40%': {
      transform: 'translate(0%, -80%)',
    },
    '60%': {
      transform: 'translate(0%, -20%)',
    },
    '80%': {
      transform: 'translate(0%, 40%)',
    },
    '100%': {
      transform: 'translate(0%, 100%)',
    },
  },
})

const LogoLate1 = styled('img')({
  width: '26%',
  height: '26%',
  animation: 'rotateMotion linear infinite',
  animationDuration: '4s',
  '@keyframes rotateMotion': {
    '0%': {
      transform: 'rotate3d(1, 1, 1, 0deg)',
    },
    '25%': {
      transform: 'rotate3d(1, 1, 1, 90deg)',
    },
    '50%': {
      transform: 'rotate3d(1, 1, 1, 180deg)',
    },
    '75%': {
      transform: 'rotate3d(1, 1, 1, 270deg)',
    },
    '100%': {
      transform: 'rotate3d(1, 1, 1, 359deg)',
    },
  },
})

// 2
const LogoBlock2 = styled('div')({
  position: 'absolute',
  height: '100%',
  animation: 'fallMotion1 linear infinite',
  animationDuration: '14s',
  marginLeft: '12%',
  '@keyframes fallMotion1': {
    '0%': {
      transform: 'translate(0%, -100%)',
    },
    '20%': {
      transform: 'translate(0%, -60%)',
    },
    '40%': {
      transform: 'translate(0%, -20%)',
    },
    '60%': {
      transform: 'translate(0%, 20%)',
    },
    '80%': {
      transform: 'translate(0%, 60%)',
    },
    '100%': {
      transform: 'translate(0%, 100%)',
    },
  },
})

const Logo2 = styled('img')({
  width: '24%',
  height: '24%',
  animation: 'rotateMotion linear infinite',
  animationDuration: '3s',
  '@keyframes rotateMotion': {
    '0%': {
      transform: 'rotate3d(1, 1, 1, 0deg)',
    },
    '25%': {
      transform: 'rotate3d(1, 1, 1, 90deg)',
    },
    '50%': {
      transform: 'rotate3d(1, 1, 1, 180deg)',
    },
    '75%': {
      transform: 'rotate3d(1, 1, 1, 270deg)',
    },
    '100%': {
      transform: 'rotate3d(1, 1, 1, 359deg)',
    },
  },
})

// 2L
const LogoBlockLate2 = styled('div')({
  position: 'absolute',
  height: '100%',
  animation: 'fallMotion linear infinite',
  animationDuration: '26s',
  marginLeft: '15%',
  '@keyframes fallMotion': {
    '0%': {
      transform: 'translate(0%, -180%)',
    },
    '20%': {
      transform: 'translate(0%, -124%)',
    },
    '40%': {
      transform: 'translate(0%, -68%)',
    },
    '60%': {
      transform: 'translate(0%, 12%)',
    },
    '80%': {
      transform: 'translate(0%, 44%)',
    },
    '100%': {
      transform: 'translate(0%, 100%)',
    },
  },
})

const LogoLate2 = styled('img')({
  width: '20%',
  height: '20%',
  animation: 'rotateMotion linear infinite',
  animationDuration: '3s',
  '@keyframes rotateMotion': {
    '0%': {
      transform: 'rotate3d(1, 2, 1, 0deg)',
    },
    '25%': {
      transform: 'rotate3d(1, 2, 1, -90deg)',
    },
    '50%': {
      transform: 'rotate3d(1, 2, 1, -180deg)',
    },
    '75%': {
      transform: 'rotate3d(1, 2, 1, -270deg)',
    },
    '100%': {
      transform: 'rotate3d(1, 2, 1, -359deg)',
    },
  },
})

const TopPiece = () => {
  return (
    <Container>
      <LogoBlock1>
        <Logo1 src={Logo}></Logo1>
      </LogoBlock1>
      <LogoBlockLate1>
        <LogoLate1 src={Logo}></LogoLate1>
      </LogoBlockLate1>
      <LogoBlock2>
        <Logo2 src={Logo}></Logo2>
      </LogoBlock2>
      <LogoBlockLate2>
        <LogoLate2 src={Logo}></LogoLate2>
      </LogoBlockLate2>
    </Container>
  )
}

export default TopPiece
