import React from 'react'
import { useInView } from 'react-intersection-observer'
import { styled } from '@mui/material/styles'

interface TEXT {
  text: string
}

const TriggerBlock = styled('div')({
  // height: 100,
  height: '100%',
  // '@media screen and (max-width: 1024px)': {
  //   height: 80,
  // },
  // '@media screen and (max-width: 599px)': {
  //   height: 30,
  // },
})

const H1Block = styled('h1')({
  marginBottom: '-3.5rem',
  fontSize: '6em',
  overflow: 'hidden',
  padding: '0 4.875rem 0 4.5rem',
  letterSpacing: '-0.02em',
  color: '#999',
  fontWeight: 'lighter',
  marginTop: '1rem',
  '@media screen and (max-width: 1024px)': {
    marginTop: '0.5rem',
  },
  '@media screen and (max-width: 599px)': {
    marginTop: 20,
  },
  animation: 'slideText 2s linear forwards',
  '@keyframes slideText': {
    '0%': {
      marginLeft: 30,
      marginTop: 20,
    },
    '100%': {
      marginLeft: 0,
      marginTop: 0,
    },
  },
})

const TextBlock = styled('span')({
  animation: 'fadeText 1s ease-out forwards',
  '@keyframes fadeText': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
})

const EmergeText = (props: TEXT) => {
  const { ref, inView } = useInView({
    rootMargin: '-10px',
    triggerOnce: true,
  })
  return (
    <TriggerBlock ref={ref}>
      {inView && (
        <H1Block>
          <TextBlock>{props.text}</TextBlock>
        </H1Block>
      )}
    </TriggerBlock>
  )
}

export default EmergeText
