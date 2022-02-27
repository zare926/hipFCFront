import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material/styles'
import { initialTopOpen, musicPlay, topFadeOpen, topLoadingOpen, topOpen } from '../../reducers/controlBoolSlice'
import SpaceBox from '../UIkit/SpaceBox'
import { musicControl } from '../../features/music'

// 要素を包み込むブロック
const CenterBlock = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateY(-50%) translateX(-50%)',
  padding: 20,
  animation: 'fadeIn 4.5s ease-out',
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
})

// 説明文
const ExplainText = styled('p')({
  marginTop: 3,
  textAlign: 'center',
  '@media screen and (max-width: 599px)': {
    fontSize: 10,
  },
})

// ボタンの中の説明文
const ExplainButtonText = styled('p')({
  lineHeight: 2,
  textAlign: 'center',
  fontSize: 14,
  '@media screen and (max-width: 599px)': {
    lineHeight: 3,
    fontSize: 10,
  },
})

// 寄せるためのブロック
const CenterButtonBox = styled('div')({
  width: 300,
  margin: '30px auto 0',
})
// 波紋ボタン
const PlayButton = styled('div')({
  position: 'relative',
  margin: '0 auto',
  width: 200,
  height: 30,
  border: '1px solid #666',
  outline: 'none',
  transition: 'all .3s',
  cursor: 'pointer',
  '& span': {
    position: 'relative',
    zIndex: 3,
    backgroundColor: '#333',
  },
  '&:hover': {
    backgroundColor: '#333',
    transition: 'transform .3s cubic-bezier(0.8, 0, 0.2, 1) 0s',
    transform: 'scale(1.05, 1.05)',
    transformOrigin: 'top',
    color: '#FFFFFF',
  },
  '&::after,&::before': {
    content: '""',
    position: 'absolute',
    left: '-10%',
    top: '-23%',
    border: '1px solid #333',
    width: '120%',
    height: '140%',
    opacity: 1,
    animation: '1.2s circleanime linear infinite',
  },
  '&::before': {
    animationDelay: '.5s',
  },
  '@keyframes circleanime': {
    '0%': {
      transform: 'scale(0.8)',
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 0,
    },
  },
})

// 再生しないボタン
const NotPlayButton = styled('div')({
  margin: '0 auto',
  width: 200,
  height: 30,
  border: '1px solid #666',
  outline: 'none',
  transition: 'all .3s',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#333',
    transition: 'transform .3s cubic-bezier(0.8, 0, 0.2, 1) 0s',
    transform: 'scale(1.05, 1.05)',
    transformOrigin: 'top',
    color: '#FFFFFF',
  },
})

// Sound ONを押した一連の流れ
const InitialModalCenter = () => {
  const dispatch = useDispatch()

  const fadeFromLoading = () => {
    // 音楽再生用のコンポーネント読み込み
    dispatch(musicPlay({ isPlay: true }))
    dispatch(musicControl())
    // loading描画
    // dispatch(topLoadingOpen({ isOpen: true }))
    // ３.8秒後にまとめて色々出す
    setTimeout(() => {
      topBoolControl()
    }, 3800)
  }

  const topBoolControl = () => {
    // Fade描画
    dispatch(topFadeOpen({ isOpen: true }))
    // loading消す
    dispatch(topLoadingOpen({ isOpen: false }))
    // 最初の画面消す
    dispatch(initialTopOpen({ isOpen: false }))
    // メインのトップ画面描画
    dispatch(topOpen({ isOpen: true }))
  }

  // Sound OFFを押した場合
  const topPhetoho = () => {
    // 最初の画面消す
    dispatch(initialTopOpen({ isOpen: false }))
    // メインのトップ画面描画
    dispatch(topOpen({ isOpen: true }))
  }
  return (
    <CenterBlock>
      <ExplainText>このサイトは音が流れます。</ExplainText>
      <ExplainText>サウンドON、OFFを選択してください。</ExplainText>
      <SpaceBox height={8} />
      <CenterButtonBox>
        <PlayButton onClick={() => fadeFromLoading()}>
          <span></span>
          <ExplainButtonText>Sound ON</ExplainButtonText>
        </PlayButton>
      </CenterButtonBox>
      <CenterButtonBox>
        <NotPlayButton onClick={() => topPhetoho()}>
          <ExplainButtonText>Sound OFF</ExplainButtonText>
        </NotPlayButton>
      </CenterButtonBox>
    </CenterBlock>
  )
}

export default InitialModalCenter
