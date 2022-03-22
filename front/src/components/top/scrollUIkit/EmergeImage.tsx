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
  zIndex: 0,
  width: '100%',
  height: 1200,
  position: 'relative',
  overflow: 'hidden',
  '@media screen and (max-width: 1024px)': {
    height: 800,
  },
  '@media screen and (max-width: 599px)': {
    height: 500,
  },
  animation: 'fadeImage 10s ease-in-out forwards',
  '@keyframes fadeImage': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 0.6,
    },
  },
})

const FadeBlock = styled('div')({
  // animation: 'fadeOut 3s ease-out forwards',
  // backgroundColor: 'white',
  // '@keyframes fadeOut': {
  //   '0%': {
  //     opacity: 0,
  //   },
  //   '100%': {
  //     opacity: 1,
  //   },
  // },
})

const ImageArea = styled('div')({
  backgroundColor: 'red',
  position: 'absolute',
  top: '10rem',
  animation: 'image 60s linear infinite',
  '@keyframes image': {
    '0%': {
      transform: 'perspective(1000px) rotate(13deg) rotateX(10deg) rotateY(-30deg)',
      left: '30%',
    },
    '10%': {
      transform: 'perspective(920px) rotate(8deg) rotateX(7deg) rotateY(-40deg)',
      left: '35%',
    },
    '20%': {
      transform: 'perspective(860px) rotate(3deg) rotateX(3deg) rotateY(-35deg)',
      left: '38%',
      top: '11rem',
    },
    '30%': {
      transform: 'perspective(880px) rotate(-2deg) rotateX(0deg) rotateY(-40deg)',
      left: '38%',
      top: '11.5rem',
    },
    '40%': {
      transform: 'perspective(920px) rotate(-5deg) rotateX(2deg) rotateY(-35deg)',
      left: '37%',
      top: '10rem',
    },
    '50%': {
      transform: 'perspective(960px) rotate(0deg) rotateX(1deg) rotateY(-20deg)',
      left: '34%',
      top: '11rem',
    },
    '60%': {
      transform: 'perspective(1000px) rotate(3deg) rotateX(5deg) rotateY(-25deg)',
      left: '31%',
      top: '12rem',
    },
    '70%': {
      transform: 'perspective(920px) rotate(0deg) rotateX(7deg) rotateY(-30deg)',
      left: '28%',
      top: '14rem',
    },
    '80%': {
      transform: 'perspective(840px) rotate(5deg) rotateX(5deg) rotateY(-40deg)',
      left: '27%',
      top: '13rem',
    },
    '90%': {
      transform: 'perspective(920px) rotate(8deg) rotateX(8deg) rotateY(-50deg)',
      left: '29%',
      top: '12rem',
    },
    '100%': {
      transform: 'perspective(1000px) rotate(13deg) rotateX(10deg) rotateY(-30deg)',
      left: '30%',
    },
  },
  '@media screen and (max-width: 599px)': {
    '@keyframes image': {
      '0%': {
        transform: 'perspective(1000px) rotate(13deg) rotateX(10deg) rotateY(-30deg)',
        left: '30%',
      },
      '10%': {
        transform: 'perspective(920px) rotate(8deg) rotateX(7deg) rotateY(-40deg)',
        left: '35%',
      },
      '20%': {
        transform: 'perspective(860px) rotate(3deg) rotateX(3deg) rotateY(-35deg)',
        left: '38%',
        top: '11rem',
      },
      '30%': {
        transform: 'perspective(880px) rotate(-2deg) rotateX(0deg) rotateY(-40deg)',
        left: '38%',
        top: '11.5rem',
      },
      '40%': {
        transform: 'perspective(920px) rotate(-5deg) rotateX(-3deg) rotateY(-30deg)',
        left: '37%',
        top: '10rem',
      },
      '50%': {
        transform: 'perspective(960px) rotate(0deg) rotateX(1deg) rotateY(-20deg)',
        left: '34%',
        top: '12rem',
      },
      '60%': {
        transform: 'perspective(1000px) rotate(3deg) rotateX(5deg) rotateY(-25deg)',
        left: '31%',
        top: '12rem',
      },
      '70%': {
        transform: 'perspective(920px) rotate(0deg) rotateX(7deg) rotateY(-30deg)',
        left: '28%',
        top: '14rem',
      },
      '80%': {
        transform: 'perspective(840px) rotate(5deg) rotateX(5deg) rotateY(-40deg)',
        left: '27%',
        top: '13rem',
      },
      '90%': {
        transform: 'perspective(920px) rotate(8deg) rotateX(8deg) rotateY(-50deg)',
        left: '29%',
        top: '12rem',
      },
      '100%': {
        transform: 'perspective(1000px) rotate(13deg) rotateX(10deg) rotateY(-30deg)',
        left: '30%',
      },
    },
  },
})

const Image = styled(SimpleImageSlider)({
  objectFit: 'cover',
  backdropFilter: 'blur(10px)',
})

const images = [{ url: image1 }, { url: image2 }, { url: image3 }, { url: image4 }, { url: image5 }]

const EmergeImage = (props: IMAGE) => {
  const { width, height } = useWindowDimensions()
  const { ref, inView } = useInView({
    rootMargin: width >= 599 ? '-200px' : '-100px',
    triggerOnce: true,
  })

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
