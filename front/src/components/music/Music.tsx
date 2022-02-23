import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useSound from 'use-sound'
import { initialTopOpen, musicControl, topFadeOpen, topLoadingOpen, topOpen } from '../../reducers/controlBoolSlice'
import DayByDay from '../../assets/music/daybyday.mp3'

const Music = () => {
  const [play, { stop, pause }] = useSound(DayByDay)
  const playBool = useSelector(musicControl)
  const dispatch = useDispatch()

  const musicPlay = () => {
    play()
  }

  useEffect(() => {
    musicPlay()
  })
  return <></>
}

export default React.memo(Music)
