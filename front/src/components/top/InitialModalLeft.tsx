import { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

// 文字を入れるブロック
const TopTextBlock = styled('div')({
  paddingTop: 40,
  paddingLeft: 50,
  width: '100%',
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
})

const InitialModalLeft = () => {
  useEffect(() => {
    const element = document.getElementById('bandName') as HTMLParagraphElement
  }, [])
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
