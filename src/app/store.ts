import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import { useDispatch } from 'react-redux'
import authReducer from './auth/authSlice'
import profileReducer from './profile/profileSlice';

const middleware = [...getDefaultMiddleware(), logger];


const store = configureStore({
    reducer: {auth: authReducer, profile:profileReducer},
    middleware,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch()
export type RootState = ReturnType<typeof store.getState>
export default store