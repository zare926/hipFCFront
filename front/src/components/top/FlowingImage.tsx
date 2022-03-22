import React, { useMemo, useRef } from 'react'
import { useMove } from 'react-use-gesture'
import { styled } from '@mui/material/styles'
import { useSpring, a } from '@react-spring/web'
import { useOffsetTop } from '../../hooks/useOffsetTop'
import SpaceBox from '../UIkit/SpaceBox'
import image1 from '../../assets/images/biography.jpg'
import image2 from '../../assets/images/live1.jpg'
import image3 from '../../assets/images/biography2.jpg'
import image4 from '../../assets/images/live2.jpg'
import image5 from '../../assets/images/biography3.jpg'
import image6 from '../../assets/images/biography4.jpg'
import { useWindowDimensions } from '../../hooks/windowDimensions'

const FlowingImage = () => {
  const maxIconSize = 60 // 最大のアイコンサイズ
  const minIconSize = 20 // 最小のアイコンサイズ
  const iconRef = useRef(null)
  const { width, height } = useWindowDimensions()
  const { pageOffsetTop, viewportOffsetTop } = useOffsetTop(iconRef)

  console.log(viewportOffsetTop)
  // console.log(height)

  const iconSize = useMemo(() => {
    if (pageOffsetTop === undefined || viewportOffsetTop === undefined) return maxIconSize
    const size = (viewportOffsetTop / pageOffsetTop) * maxIconSize
    if (size <= minIconSize) return minIconSize
    return size.toFixed(1)
  }, [pageOffsetTop, viewportOffsetTop])

  const test = viewportOffsetTop! - (height - 100)

  const styles = useSpring({
    transform: `translate3d(${test}px, 0px, 0px)`,
  })

  const images = [image2, image1, image4, image3, image6, image5]

  return (
    <Container ref={iconRef}>
      <ConpectImageBlock style={styles}>
        {images.map((image) => (
          <FlowingBlock>
            <picture>
              <Image src={image}></Image>
            </picture>
          </FlowingBlock>
        ))}
      </ConpectImageBlock>
      <SpaceBox height={300} />
    </Container>
  )
}

export default FlowingImage

const Container = styled('div')({
  height: 1000,
  overflow: 'hidden',
})

const ConpectImageBlock = styled(a.div)({
  display: 'inline-flex',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
})

const FlowingBlock = styled('div')({
  padding: '0 1rem',
})

const Image = styled('img')({
  width: '30rem',
  height: '40rem',
  objectFit: 'cover',
  // width: 'calc(.3var(--w)',
})
