import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material/styles'
import hipLogoWhite from '../../assets/icon/hipMarkWhite.svg'
import { topLoadingControl } from '../../reducers/controlBoolSlice'

const Container = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
})

const Overtlay = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2,
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
  transition: '.1s linear',
  animation: 'fadeEffect 1s ease-out',
  '@keyframes fadeEffect': {
    '0%': {
      opacity: 0,
      visibility: 'hidden',
    },
    '100%': {
      opacity: 1,
      width: '100%',
      height: '100%',
      visibility: 'visible',
    },
  },
})

const Horizon = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  borderBottom: 'solid 1px white',
  animation: 'horizonEffect 4.2s linear forwards',
  '@keyframes horizonEffect': {
    '0%': {
      width: '0%',
    },
    '20%': {
      width: '0%',
    },
    '100%': {
      width: '100%',
    },
  },
})

const LogoBlock = styled('div')({
  position: 'absolute',
  left: '50%',
  top: '40%',
  transform: 'translate(-50%,-50%)',
})

const Logo = styled('img')({
  width: '30%',
  height: '30%',
})

const TopLoading = () => {
  return (
    <Container>
      <Overtlay>
        <LogoBlock>
          <Logo src={hipLogoWhite}></Logo>
        </LogoBlock>
        <Horizon></Horizon>
      </Overtlay>
    </Container>
  )
}

export default TopLoading
