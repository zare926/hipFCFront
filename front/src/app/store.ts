import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import controlBoolReducer from '../reducers/controlBoolSlice'

export const history = createBrowserHistory()

const reducer = combineReducers({
  router: connectRouter(history),
  controlBool: controlBoolReducer,
})

export const store = configureStore({
  reducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(routerMiddleware(history))
  },
})
export type RootState = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
