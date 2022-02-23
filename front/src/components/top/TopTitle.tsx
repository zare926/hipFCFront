import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { styled } from '@mui/material/styles'

const Container = styled('div')({})

const TitleBlock = styled('div')({})

const TopTitle = () => {
  return (
    <Container>
      <TitleBlock></TitleBlock>
    </Container>
  )
}

export default TopTitle
