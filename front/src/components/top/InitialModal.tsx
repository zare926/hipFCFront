import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import InitialModalCenter from './InitialModalCenter'

// 大枠
const FlexContainer = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100%',
})

// 左側
const Left = styled('div')({
  flex: 1,
  height: '100%',
})

// 中央
const Center = styled('div')({
  flex: 1,
  height: '100%',
})

// 右側
const Right = styled('div')({
  flex: 1,
  height: '100%',
})
const InitialModal = () => {
  const dispatch = useDispatch()
  return (
    <Fragment>
      <FlexContainer>
        <Left></Left>
        <Center>
          <InitialModalCenter />
        </Center>
        <Right></Right>
      </FlexContainer>
    </Fragment>
  )
}

export default InitialModal
