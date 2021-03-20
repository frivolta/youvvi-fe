import { configureStore, Action,getDefaultMiddleware  } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import { useDispatch } from 'react-redux'
import { ThunkAction } from 'redux-thunk'
import authReducer from './auth/authSlice'

const middleware = [...getDefaultMiddleware(), logger];


const store = configureStore({
    reducer: {auth: authReducer},
    middleware,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch()
export type RootState = ReturnType<typeof store.getState>
export default store