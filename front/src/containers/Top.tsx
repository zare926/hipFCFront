import React, { useState } from 'react'
import InitialModal from '../components/top/InitialModal'
import { styled } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { topLoadingControl } from '../reducers/controlBoolSlice'
import TopLoading from '../components/top/TopLoading'

const Container = styled('div')({
  overflowY: 'scroll',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

const Top = () => {
  const topLoading = useSelector(topLoadingControl)
  console.log(topLoading)
  return (
    <Container>
      {topLoading.isOpen && <TopLoading />}
      <InitialModal />
    </Container>
  )
}

export default Top
