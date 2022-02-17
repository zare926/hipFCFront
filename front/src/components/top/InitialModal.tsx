import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import InitialModalCenter from './InitialModalCenter'
import InitialModalLeft from './InitialModalLeft'
import InitialModalRight from './InitialModalRight'

// 大枠
const FlexContainer = styled('div')({
  height: '100%',
  overflowY: 'scroll',
})

const InitialModal = () => {
  return (
    <Fragment>
      <FlexContainer>
        <InitialModalLeft />
        <InitialModalCenter />
        <InitialModalRight />
      </FlexContainer>
    </Fragment>
  )
}

export default InitialModal
