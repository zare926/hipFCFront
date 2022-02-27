import React, { useCallback, useState } from 'react'
import { styled } from '@mui/material/styles'

const HamburgerMenuContainer = styled('div')({
  paddingTop: 10,
  width: '100%',
  textAlign: 'center',
})

const MenuButton = styled('button')({
  display: 'inline-block',
  transition: 'all 0.4s',
  boxSizing: 'border-box',
  position: 'relative',
  width: 35,
  height: 21,
  background: 'none',
  border: 'none',
  appearance: 'none',
  cursor: 'pointer',
  '&::after': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    display: 'block',
    content: '""',
    width: 20,
    height: 20,
    margin: '-12px 0 0 -12px',
    borderRadius: '50%',
    border: '1px solid rgba(136, 136, 136, 0.534)',
    transition: 'all 0.1s',
    opacity: 0,
  },
})

const Line = styled('span')({
  display: 'inline-block',
  transition: 'all 0.4s',
  boxSizing: 'border-box',
  position: 'absolute',
  left: 0,
  width: '100%',
  height: 1,
  backgroundColor: '#333',
})

const LineTop = styled(Line)({
  animation: 'menubar1 0.5s forwards',
  top: 0,
  '@keyframes menubar1': {
    '0%': {
      transform: 'translateY(20px) rotate(-45deg)',
      top: '-10px',
    },
    '100%': {
      transform: 'translateY(0) rotate(0)',
      top: 0,
    },
  },
})

const LineMiddle = styled(Line)({
  animation: 'menubar2 0.5s forwards',
  top: 10,
  '@keyframes menubar2': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
})

const LineBottom = styled(Line)({
  animation: 'menubar3 0.5s forwards',
  bottom: 0,
  '@keyframes menubar3': {
    '0%': {
      transform: 'translateY(-20px) rotate(45deg)',
      bottom: '-10px',
    },
    '100%': {
      transform: 'translateY(0) rotate(0)',
      bottom: 0,
    },
  },
})

const LineActive = styled(MenuButton)({
  '&::after': {
    animation: 'circle 0.5s',
    '@keyframes circle': {
      '0%': {
        transform: 'scale(0.1)',
        opacity: 0,
      },
      '50%': {
        opacity: 1,
      },
      '100%': {
        transform: 'scale(3.5)',
        opacity: 0,
      },
    },
  },
})

const LineTopActive = styled(Line)({
  animation: 'active-menubar1 0.5s 0.5s forwards',
  opacity: 1,
  '@keyframes active-menubar1': {
    '0%': {
      transform: 'translateY(0) rotate(0)',
      top: 0,
    },
    '100%': {
      transform: ' translateY(20px) rotate(-45deg)',
      top: '-10px',
    },
  },
})

const LineMiddleActive = styled(Line)({
  animation: 'active-menubar2 0.5s 0.5s forwards',
  '@keyframes active-menubar2': {
    '0%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
})

const LineBottomActive = styled(Line)({
  animation: 'active-menubar3 0.5s 0.5s forwards',
  opacity: 1,
  '@keyframes active-menubar3': {
    '0%': {
      transform: 'translateY(0) rotate(0)',
      bottom: 0,
    },
    '100%': {
      transform: ' translateY(-20px) rotate(45deg)',
      bottom: '-10px',
    },
  },
})

const MenuText = styled('p')({
  marginTop: 5,
  fontSize: 10,
  cursor: 'pointer',
})

const HamburgerMenu = () => {
  const [active, setActive] = useState(false)

  const boolSwitch = useCallback((bool: boolean) => {
    setActive(bool)
  }, [])
  return (
    <HamburgerMenuContainer>
      {!active ? (
        <>
          <MenuButton onClick={() => boolSwitch(true)}>
            <LineTop></LineTop>
            <LineMiddle></LineMiddle>
            <LineBottom></LineBottom>
          </MenuButton>
          <MenuText onClick={() => boolSwitch(!active)}>menu</MenuText>
        </>
      ) : (
        <>
          <LineActive onClick={() => boolSwitch(false)}>
            <LineTopActive></LineTopActive>
            <LineMiddleActive></LineMiddleActive>
            <LineBottomActive></LineBottomActive>
          </LineActive>
          <MenuText onClick={() => boolSwitch(!active)}>menu</MenuText>
        </>
      )}
    </HamburgerMenuContainer>
  )
}

export default HamburgerMenu
