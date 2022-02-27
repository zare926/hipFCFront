import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useSound from 'use-sound'
import { initialTopOpen, musicControl, topFadeOpen, topLoadingOpen, topOpen } from '../../reducers/controlBoolSlice'
import DayByDay from '../../assets/music/daybyday.mp3'
import { MUSICSWITCH } from '../../types/musicType'

const Music = (props: MUSICSWITCH) => {
  // const [play, { stop, pause }] = useSound(DayByDay)
  const playBool = useSelector(musicControl)
  const dispatch = useDispatch()

  useEffect(() => {
    playBool.isPlay && props.play()
    playBool.isPlay && dispatch(topLoadingOpen({ isOpen: true }))
  })
  return <></>
}

export default React.memo(Music)
