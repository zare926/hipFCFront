import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { styled } from '@mui/material/styles'
import HIPLOGO from '../../assets/icon/hipMark.svg'
import Link from '@mui/material/Link'
import HamburgerMenu from './HamburgerMenu'
import { push } from 'connected-react-router'

const HeaderContainer = styled('header')({
  width: '100%',
})

const LogoBlock = styled('div')({
  width: 100,
  zIndex: 10,
  position: 'fixed',
  left: '4.5rem',
  top: 20,
  animation: 'fallLogo 2.5s linear forwards',
  // '@keyframes fallLogo': {
  //   '0%': {
  //     opacity: 0,
  //     top: 0,
  //   },
  //   '60%': {
  //     opacity: 1,
  //     top: 30,
  //   },
  //   '80%': {
  //     transform: 'rotate3d(1, 1, 0, 0deg)',
  //   },
  //   '85%': {
  //     transform: 'rotate3d(1, 1, 0, 90deg)',
  //   },
  //   '90%': {
  //     transform: 'rotate3d(1, 1, 0, 180deg)',
  //   },
  //   '95%': {
  //     transform: 'rotate3d(1, 1, 0, 270deg)',
  //   },
  //   '100%': {
  //     transform: 'rotate3d(1, 1, 0, 359deg)',
  //   },
  // },
  '@keyframes fallLogo': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
})

const Logo = styled('img')({
  cursor: 'pointer',
  width: '75%',
  height: '75%',
})

const HamburgerMenuBlock = styled('div')({
  width: 100,
  zIndex: 10,
  position: 'fixed',
  right: '0.5rem',
  top: 14,
  animation: 'fallHam 1.5s linear forwards',
  '@keyframes fallHam': {
    '0%': {
      opacity: 0,
      top: 0,
    },
    '100%': {
      opacity: 1,
      top: 14,
    },
  },
})

const TopHeader = () => {
  return (
    <HeaderContainer>
      <LogoBlock>
        <Logo src={HIPLOGO} onClick={() => push('/')}></Logo>
      </LogoBlock>
      <HamburgerMenuBlock>
        <HamburgerMenu />
      </HamburgerMenuBlock>
    </HeaderContainer>
  )
}

export default TopHeader
