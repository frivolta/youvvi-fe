import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiAddress } from '../../api'
import { AuthenticationInput, AuthenticationOutput } from '../../types/api.types'
import { CurrentUser, QueryError } from '../../types/entities.types'
import setAuthToken from '../helpers/auth'
import { RootState } from '../store'


export interface AuthState {
    isAuth: boolean
    currentUser?: CurrentUser
    isLoading: boolean
    error: string | null
}

export const initialState: AuthState = {
    isAuth: false,
    isLoading: false,
    error: null,
}

export const authenticateUser = createAsyncThunk<CurrentUser, AuthenticationInput, {rejectValue:QueryError}>('auth/authenticate', async(input: AuthenticationInput, thunkApi)=>{
    try{
        const {name, password} = input
        const response = await axios.post<AuthenticationOutput>(apiAddress.AUTHENTICATE,  {
            name,
            password
          })

        if(response.data.ok && response.data.userId && response.data.token){
            const {userId, token} = response.data
            localStorage.setItem('yuvviToken', token);
            setAuthToken(token)
            return {userId, token} as CurrentUser
        }
        return thunkApi.rejectWithValue({error: response.data.error || 'Cannot login'})
    }catch(e){
        return thunkApi.rejectWithValue({error: e.message || 'Cannot login, network error'})
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogOut: (state) => {
            state.isAuth = false
            state.currentUser = undefined
            state.error = null
            localStorage.removeItem('yuvviToken');
            setAuthToken()
        },
        setAuthManually: (state, { payload }: PayloadAction<CurrentUser>) => {
            localStorage.setItem('yuvviToken', payload.token);
            setAuthToken(payload.token)
            state.currentUser = payload
            state.isAuth = true
            state.error = null
            state.isLoading =false
        },
    },
    extraReducers:builder=>{
        builder.addCase(authenticateUser.fulfilled, (state, {payload})=>{
            state.isAuth = true
            state.currentUser = payload
            state.error = null
            state.isLoading = false
        })
        builder.addCase(authenticateUser.rejected, (state, {payload})=>{
            state.isAuth = false
            state.isLoading = false
            state.error = payload?.error || 'Cannot login'
        })
        builder.addCase(authenticateUser.pending, (state)=>{
            state.isAuth = false
            state.isLoading = true
            state.error = null
        })
    }
})

export const {setLogOut, setAuthManually} = authSlice.actions 
export const authSelector = (state: RootState) => state.auth
export default authSlice.reducer
