import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'


export interface AuthState {
    isAuth: boolean
    currentUser?: CurrentUser
    isLoading: boolean
    error: string | null
}

export interface CurrentUser {
    id: string
    token: string
}
export const initialState: AuthState = {
    isAuth: false,
    isLoading: false,
    error: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading: (state, {payload}: PayloadAction<boolean>) => {
            state.isLoading = payload
        },
        setAuthSuccess: (state, { payload }: PayloadAction<CurrentUser>) => {
            state.currentUser = payload
            state.isAuth = true
        },
        setLogOut: (state) => {
            state.isAuth = false
            state.currentUser = undefined
        },
        setAuthFailed: (state, { payload }: PayloadAction<string>) => {
            state.error = payload
            state.isAuth = false
        },
    },
})


export const { setAuthSuccess, setLogOut, setLoading, setAuthFailed} = authSlice.actions
export const authSelector = (state: RootState) => state.auth
export default authSlice.reducer
