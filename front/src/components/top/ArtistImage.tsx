import React from 'react'
import { useInView } from 'react-intersection-observer'
import { styled } from '@mui/material/styles'
import EmergeText from './scrollUIkit/EmergeText'
import Artist from '../../assets/images/biography.jpg'
import EmergeImage from './scrollUIkit/EmergeImage'
const Container = styled('div')({
  height: '100%',
  width: '100%',
})

const BiographyBlock = styled('div')({
  position: 'relative',
})

const BiographyText = styled('div')({
  // position: 'absolute',
  // top: 10,
})

const ArtistImage = () => {
  return (
    <Container>
      <BiographyBlock>
        <BiographyText>
          <EmergeText text={'BIOGRAPHY'} />
        </BiographyText>
      </BiographyBlock>
      <EmergeImage image={Artist} />
    </Container>
  )
}

export default ArtistImage
