import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { styled } from '@mui/material/styles'
import ScrollInduction from '../UIkit/ScrollInduction'

const Container = styled('div')({
  display: 'flex',
  height: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
})

const H1Block = styled('h1')({
  fontSize: '10rem',
  lineHeight: '0.86222',
  padding: '7rem 4.5rem 0 4.5rem',
  overflow: 'hidden',
  margin: 0,
  letterSpacing: '-0.02em',
  '@media screen and (max-width: 1024px)': {
    fontSize: '12rem',
  },
  '@media screen and (max-width: 768px)': {
    lineHeight: '0.91',
  },
  '@media screen and (max-width: 599px)': {
    lineHeight: '0.94',
    fontSize: '13rem',
  },
  '@media screen and (max-width: 549px)': {
    lineHeight: '0.95',
  },
  '@media screen and (max-width: 499px)': {
    lineHeight: '0.98',
  },
  '@media screen and (max-width: 449px)': {
    lineHeight: '1.05',
  },
  '@media screen and (max-width: 399px)': {
    lineHeight: '1.07',
  },
  color: '#333',
})

const TitleBlock = styled('div')({
  padding: '0 5px',
  overflow: 'hidden',
})

const EmergingText1 = styled('span')({
  position: 'relative',
  height: '100%',
  display: 'inline-block',
  animation: 'emerging1  3.5s ease-out forwards',
  '@media screen and (max-width: 1024px)': {
    animation: 'emerging1  3s ease-out forwards',
  },
  '@media screen and (max-width: 599px)': {
    animation: 'emerging1  2.5s ease-out forwards',
  },
  '@keyframes emerging1': {
    '0%': {
      bottom: '-200px',
      opacity: 0,
      '@media screen and (max-width: 1024px)': {
        bottom: '-150px',
      },
      '@media screen and (max-width: 599px)': {
        bottom: '-100px',
      },
    },
    '90%': {
      bottom: 20,
      '@media screen and (max-width: 599px)': {
        bottom: 15,
      },
    },
    '100%': {
      bottom: 10,
      opacity: 1,
    },
  },
})

const EmergingText2 = styled('span')({
  position: 'relative',
  height: '100%',
  display: 'inline-block',
  animation: 'emerging2  3.5s ease-out forwards',
  '@media screen and (max-width: 1024px)': {
    animation: 'emerging2  3s ease-out forwards',
  },
  '@media screen and (max-width: 599px)': {
    animation: 'emerging2  2.5s ease-out forwards',
  },
  '@keyframes emerging2': {
    '0%': {
      bottom: '-300px',
      opacity: 0,
      '@media screen and (max-width: 1024px)': {
        bottom: '-225px',
      },
      '@media screen and (max-width: 599px)': {
        bottom: '-150px',
      },
    },
    '100%': {
      bottom: 10,
      opacity: 1,
    },
  },
})

const EmergingText3 = styled('span')({
  position: 'relative',
  height: '100%',
  display: 'inline-block',
  animation: 'emerging3  3.5s ease-out forwards',
  '@media screen and (max-width: 1024px)': {
    animation: 'emerging3  3s ease-out forwards',
  },
  '@media screen and (max-width: 599px)': {
    animation: 'emerging3  2.5s ease-out forwards',
  },
  '@keyframes emerging3': {
    '0%': {
      bottom: '-400px',
      opacity: 0,
      '@media screen and (max-width: 1024px)': {
        bottom: '-250px',
      },
      '@media screen and (max-width: 599px)': {
        bottom: '-200px',
      },
    },
    '100%': {
      bottom: 10,
      opacity: 1,
    },
  },
})

const EmergingText4 = styled('span')({
  position: 'relative',
  height: '100%',
  display: 'inline-block',
  fontSize: '6rem',
  letterSpacing: '0.1em',
  marginBottom: 100,
  animation: 'emerging4  3.5s ease-out forwards',
  '@media screen and (max-width: 1024px)': {
    animation: 'emerging4  3s ease-out forwards',
    fontSize: '7rem',
  },
  '@media screen and (max-width: 599px)': {
    animation: 'emerging4  2.5s ease-out forwards',
    fontSize: '7rem',
  },
  '@keyframes emerging4': {
    '0%': {
      bottom: '-400px',
      opacity: 0,
      '@media screen and (max-width: 1024px)': {
        bottom: '-250px',
      },
      '@media screen and (max-width: 599px)': {
        bottom: '-200px',
      },
    },
    '100%': {
      bottom: 10,
      opacity: 1,
    },
  },
})

const TopTitle = () => {
  return (
    <Container>
      <H1Block>
        <TitleBlock>
          <EmergingText1>HIP</EmergingText1>
        </TitleBlock>
        <TitleBlock>
          <EmergingText2>BEAN</EmergingText2>
        </TitleBlock>
        <TitleBlock>
          <EmergingText3>SPROUT</EmergingText3>
        </TitleBlock>
        <TitleBlock>
          <EmergingText4>unOfficial FanCLUB</EmergingText4>
        </TitleBlock>
      </H1Block>
      <ScrollInduction />
    </Container>
  )
}

export default TopTitle
