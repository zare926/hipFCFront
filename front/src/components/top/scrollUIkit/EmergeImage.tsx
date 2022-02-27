import React, { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { styled } from '@mui/material/styles'
import SimpleImageSlider from 'react-simple-image-slider'
import image1 from '../../../assets/images/biography.jpg'
import image2 from '../../../assets/images/live1.jpg'
import image3 from '../../../assets/images/biography2.jpg'
import image4 from '../../../assets/images/live2.jpg'
import image5 from '../../../assets/images/biography3.jpg'
import { useWindowDimensions } from '../../../hooks/windowDimensions'

interface IMAGE {
  image: string
}

const TriggerBlock = styled('div')({
  width: '100%',
  height: 1000,
  position: 'relative',
  overflow: 'hidden',
  '@media screen and (max-width: 1024px)': {
    height: 600,
  },
  '@media screen and (max-width: 599px)': {
    height: 500,
  },
})

const FadeBlock = styled('div')({
  opacity: 0,
  animation: 'fadeImage 5s ease-in-out forwards',
  '@keyframes fadeImage': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
})

const ImageArea = styled('div')({
  position: 'absolute',
  top: '10rem',
  animation: 'image 40s linear infinite',
  '@keyframes image': {
    '0%': {
      transform: 'perspective(1000px) rotate(13deg) rotateX(10deg) rotateY(-30deg)',
      left: '50%',
    },
    '10%': {
      transform: 'perspective(920px) rotate(8deg) rotateX(7deg) rotateY(-40deg)',
      left: '55%',
    },
    '20%': {
      transform: 'perspective(860px) rotate(3deg) rotateX(3deg) rotateY(-35deg)',
      left: '58%',
      top: '11rem',
    },
    '30%': {
      transform: 'perspective(880px) rotate(-2deg) rotateX(0deg) rotateY(-40deg)',
      left: '58%',
      top: '11.5rem',
    },
    '40%': {
      transform: 'perspective(920px) rotate(-5deg) rotateX(-3deg) rotateY(-30deg)',
      left: '57%',
      top: '10rem',
    },
    '50%': {
      transform: 'perspective(960px) rotate(0deg) rotateX(1deg) rotateY(-20deg)',
      left: '54%',
      top: '12rem',
    },
    '60%': {
      transform: 'perspective(1000px) rotate(3deg) rotateX(5deg) rotateY(-25deg)',
      left: '51%',
      top: '12rem',
    },
    '70%': {
      transform: 'perspective(920px) rotate(0deg) rotateX(7deg) rotateY(-30deg)',
      left: '48%',
      top: '14rem',
    },
    '80%': {
      transform: 'perspective(840px) rotate(5deg) rotateX(5deg) rotateY(-40deg)',
      left: '47%',
      top: '13rem',
    },
    '90%': {
      transform: 'perspective(920px) rotate(8deg) rotateX(8deg) rotateY(-50deg)',
      left: '49%',
      top: '12rem',
    },
    '100%': {
      transform: 'perspective(1000px) rotate(13deg) rotateX(10deg) rotateY(-30deg)',
      left: '50%',
    },
  },
  '@media screen and (max-width: 599px)': {
    '@keyframes image': {
      '0%': {
        transform: 'perspective(1000px) rotate(deg) rotateX(10deg) rotateY(-30deg)',
        left: '20%',
      },
      '10%': {
        transform: 'perspective(920px) rotate(15deg) rotateX(7deg) rotateY(-40deg)',
        left: '25%',
      },
      '20%': {
        transform: 'perspective(860px) rotate(17deg) rotateX(3deg) rotateY(-35deg)',
        left: '28%',
        top: '11rem',
      },
      '30%': {
        transform: 'perspective(880px) rotate(20deg) rotateX(0deg) rotateY(-40deg)',
        left: '28%',
        top: '11.5rem',
      },
      '40%': {
        transform: 'perspective(920px) rotate(16deg) rotateX(-3deg) rotateY(-30deg)',
        left: '27%',
        top: '10rem',
      },
      '50%': {
        transform: 'perspective(960px) rotate(13deg) rotateX(1deg) rotateY(-20deg)',
        left: '24%',
        top: '12rem',
      },
      '60%': {
        transform: 'perspective(1000px) rotate(10deg) rotateX(5deg) rotateY(-25deg)',
        left: '21%',
        top: '12rem',
      },
      '70%': {
        transform: 'perspective(920px) rotate(13deg) rotateX(7deg) rotateY(-30deg)',
        left: '18%',
        top: '14rem',
      },
      '80%': {
        transform: 'perspective(840px) rotate(15deg) rotateX(5deg) rotateY(-40deg)',
        left: '17%',
        top: '13rem',
      },
      '90%': {
        transform: 'perspective(920px) rotate(14deg) rotateX(8deg) rotateY(-50deg)',
        left: '19%',
        top: '12rem',
      },
      '100%': {
        transform: 'perspective(1000px) rotate(13deg) rotateX(10deg) rotateY(-30deg)',
        left: '20%',
      },
    },
  },
})

const Image = styled(SimpleImageSlider)({
  objectFit: 'cover',
})

const images = [{ url: image1 }, { url: image2 }, { url: image3 }, { url: image4 }, { url: image5 }]

const EmergeImage = (props: IMAGE) => {
  const { ref, inView } = useInView({
    rootMargin: '-100px',
    triggerOnce: true,
  })

  const { width, height } = useWindowDimensions()
  console.log(width)

  useEffect(() => {}, [])

  return (
    <TriggerBlock ref={ref}>
      <div id='widthCheck'>
        {inView && (
          <FadeBlock>
            <ImageArea>
              <Image
                showNavs={false}
                showBullets={false}
                autoPlay={true}
                autoPlayDelay={5.0}
                images={images}
                width={width * 0.6}
                height={width * 0.45}
                slideDuration={2}
              ></Image>
            </ImageArea>
          </FadeBlock>
        )}
      </div>
    </TriggerBlock>
  )
}

export default EmergeImage
