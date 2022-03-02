import React from 'react'
import { styled } from '@mui/material/styles'
import EmergeImage from './scrollUIkit/EmergeImage'

const Container = styled('div')({
  backgroundColor: 'rgba(107, 107, 107, 0.34)',
  height: '100%',
  width: '100%',
  zIndex: 3,
})

const ImageBlock = styled('div')({
  zIndex: 2,
})
const BackgroundGray = () => {
  return (
    <Container>
      <ImageBlock>
        <EmergeImage image={''} />
      </ImageBlock>
    </Container>
  )
}

export default BackgroundGray
