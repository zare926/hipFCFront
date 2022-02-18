import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

interface TopLoading {
  isOpen: boolean
}

export const controlBoolSlice = createSlice({
  name: 'controlBool',
  initialState: {
    // 音が流れる間のLoading
    topLoading: {
      isOpen: false,
    },
  },
  reducers: {
    topLoadingOpen: (state, action: PayloadAction<TopLoading>) => {
      state.topLoading.isOpen = action.payload.isOpen
    },
  },
})

export const { topLoadingOpen } = controlBoolSlice.actions
export const topLoadingControl = (state: RootState) => state.controlBool.topLoading
export default controlBoolSlice.reducer
