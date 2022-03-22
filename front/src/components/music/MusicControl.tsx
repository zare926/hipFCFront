import React from 'react'
import { styled } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { discControl, discSpin } from '../../reducers/controlBoolSlice'
import { MUSICSWITCH } from '../../types/musicType'

const DiscContainer = styled('div')({
  width: 180,
  height: 180,
  border: '1px solid #333',
  borderRadius: '50%',
  position: 'relative',
  '&:hover': {
    backgroundColor: '#333',
  },
  '&:hover span': {
    color: 'white',
  },
  '@media screen and (max-width: 1024px)': {
    width: 120,
    height: 120,
  },
  '@media screen and (max-width: 599px)': {
    width: 90,
    height: 90,
  },
})

const SpinDisc = styled(DiscContainer)({
  animation: 'spin 10s linear infinite',
  '@keyframes spin': {
    '0%': { transform: 'rotate(0)' },
    '100%': { transform: 'rotate(360deg)' },
  },
})

const CenterHole = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 18,
  height: 18,
  border: '1px solid black',
  borderRadius: '50%',
  backgroundColor: 'white',
  '@media screen and (max-width: 1024px)': {
    width: 12,
    height: 12,
  },
  '@media screen and (max-width: 599px)': {
    width: 9,
    height: 9,
  },
})

const Text = styled('span')({
  textAlign: 'center',
  fontSize: 14,
  display: 'block',
  lineHeight: 2,
})

const MusicControl = (props: MUSICSWITCH) => {
  const discBool = useSelector(discControl)
  const dispatch = useDispatch()

  // Music停止
  const musicPause = () => {
    props.pause()
    dispatch(discSpin({ isSpin: false }))
  }

  // Music再生
  const musicStart = () => {
    props.play()
    dispatch(discSpin({ isSpin: true }))
  }

  return (
    <>
      {discBool.isSpin ? (
        <SpinDisc onClick={() => musicPause()}>
          <Text>stop</Text>
          <CenterHole></CenterHole>
        </SpinDisc>
      ) : (
        <DiscContainer onClick={() => musicStart()}>
          <Text>play</Text>
          <CenterHole></CenterHole>
        </DiscContainer>
      )}
    </>
  )
}

export default MusicControl
