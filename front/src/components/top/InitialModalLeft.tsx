import { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

// 文字を入れるブロック
const TopTextBlock = styled('div')({
  paddingTop: 40,
  marginLeft: 50,
})

const TopText = styled('p')({
  fontWeight: 'bold',
  fontSize: 35,
  display: 'block',
  letterSpacing: 5,
  animation: 'moveInLeft 1.7s ease-out',
  '@keyframes moveInLeft': {
    '0%': {
      opacity: 0,
      transform: 'translateX(-140px)',
    },
    '80%': {
      transform: 'translateX(20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translate(0)',
    },
  },
  '@media screen and (max-width: 599px)': {
    fontSize: 24,
  },
})

const ButtomText = styled('p')({
  fontSize: 24,
  display: 'block',
  letterSpacing: 5,
  animation: 'moveInRight 2s ease-out',
  '@keyframes moveInRight': {
    '0%': {
      opacity: 0,
      transform: 'translateX(140px)',
    },
    '80%': {
      transform: 'translateX(-20px)',
    },
    '100%': {
      opacity: 1,
      transform: ' translate(0)',
    },
  },
  '@media screen and (max-width: 599px)': {
    fontSize: 20,
  },
})

const InitialModalLeft = () => {
  return (
    <div>
      <TopTextBlock>
        <TopText>HIP BEAN SPORUT</TopText>
        <ButtomText>unOfficial FanCLUB</ButtomText>
      </TopTextBlock>
    </div>
  )
}

export default InitialModalLeft
