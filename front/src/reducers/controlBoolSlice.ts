import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

interface TopLoading {
  isOpen: boolean
}

interface Play {
  isPlay: boolean
}

export const controlBoolSlice = createSlice({
  name: 'controlBool',
  initialState: {
    // 音が流れる間のLoading
    topLoading: {
      isOpen: false,
    },
    // Loading後のfade
    topFade: {
      isOpen: false,
    },
    // initialの画面を制御
    initialTop: {
      isOpen: true,
    },
    // Topの画面制御
    top: {
      isOpen: false,
    },
    // 音楽再生制御
    playState: {
      isPlay: false,
    },
  },
  reducers: {
    topLoadingOpen: (state, action: PayloadAction<TopLoading>) => {
      state.topLoading.isOpen = action.payload.isOpen
    },
    topFadeOpen: (state, action: PayloadAction<TopLoading>) => {
      state.topFade.isOpen = action.payload.isOpen
    },
    initialTopOpen: (state, action: PayloadAction<TopLoading>) => {
      state.initialTop.isOpen = action.payload.isOpen
    },
    topOpen: (state, action: PayloadAction<TopLoading>) => {
      state.top.isOpen = action.payload.isOpen
    },
    musicPlay: (state, action: PayloadAction<Play>) => {
      state.playState.isPlay = action.payload.isPlay
    },
  },
})

export const { topLoadingOpen, topFadeOpen, initialTopOpen, topOpen, musicPlay } = controlBoolSlice.actions
export const topLoadingControl = (state: RootState) => state.controlBool.topLoading
export const topFadeControl = (state: RootState) => state.controlBool.topFade
export const initialTopControl = (state: RootState) => state.controlBool.initialTop
export const topControl = (state: RootState) => state.controlBool.top
export const musicControl = (state: RootState) => state.controlBool.playState
export default controlBoolSlice.reducer
