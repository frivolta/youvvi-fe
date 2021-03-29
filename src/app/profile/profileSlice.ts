import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiAddress } from '../../api'
import { GetCompleteUserProfileOutput, QueryOutput } from '../../types/api.types'
import { CompleteProfile, Profile, QueryError } from '../../types/entities.types'
import { RootState } from '../store'

interface ProfileState{
    hasProfile: boolean;
    currentProfile: CompleteProfile;
    isLoading: boolean;
    error: {
        hasErrors: boolean;
        message: string | null;
    }
}

const initialProfile: CompleteProfile = {
    email: null,
    userId: null,
    profile:{
        id: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: null,
        workTitle: null,
    }
}

const initialState: ProfileState = {
    hasProfile:false,
    currentProfile: initialProfile,
    isLoading:false,
    error:{
        hasErrors:false,
        message: null
    }
}

// Async actions
export const fetchProfile = createAsyncThunk<CompleteProfile,undefined,{rejectValue: QueryError}>('profile/fetchProfile', async(_,thunkApi)=>{
    try{
    const response = await axios.get<GetCompleteUserProfileOutput>(apiAddress.GET_PROFILE)

    // Check if user has profile
    if (response.data.ok && response.data.user){
        return response.data.user as CompleteProfile
    }
    // If user has no profile it has an error message
        return thunkApi.rejectWithValue({error: response.data.error || 'Cannot get profile'})
    
    }catch(e){
        // If network error
        return thunkApi.rejectWithValue({error: e.message || 'Cannot get profile, network error'})
    }
}) 

export const updateProfile = createAsyncThunk<CompleteProfile,Partial<Profile>,{rejectValue: QueryError}>('profile/updateProfile', async(updatedProfile,thunkApi)=>{
    try{
    await axios.patch<QueryOutput>(apiAddress.PROFILE,{...updateProfile})
    const response = await axios.get<GetCompleteUserProfileOutput>(apiAddress.GET_PROFILE)

    // Check if user has profile
    if (response.data.ok && response.data.user){
        return response.data.user as CompleteProfile
    }
    // If user has no profile it has an error message
        return thunkApi.rejectWithValue({error: response.data.error || 'Cannot update profile'})
    
    }catch(e){
        // If network error
        return thunkApi.rejectWithValue({error: e.message || 'Cannot update profile, network error'})
    }
}) 


export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProfile.fulfilled, (state,{payload})=>{           
            state.isLoading = false
            state.hasProfile = true
            state.currentProfile = payload
            state.error = {hasErrors: false, message: null}
        })
        builder.addCase(fetchProfile.rejected, (state, {payload})=>{
            state.isLoading = true
            state.hasProfile = false
            state.currentProfile = initialProfile
            state.error = {hasErrors: true, message: payload?.error || 'Cannot get profile'}
        })
        builder.addCase(fetchProfile.pending, (state)=>{
            state.isLoading = true
            state.hasProfile = false
            state.currentProfile = initialProfile
            state.error = {hasErrors: false, message: null}
        })
        builder.addCase(updateProfile.fulfilled, (state,{payload})=>{           
            state.isLoading = false
            state.hasProfile = true
            state.currentProfile = payload
            state.error = {hasErrors: false, message: null}
        })
        builder.addCase(updateProfile.rejected, (state, {payload})=>{
            state.isLoading = true
            state.hasProfile = false
            state.currentProfile = initialProfile
            state.error = {hasErrors: true, message: payload?.error || 'Cannot update profile'}
        })
        builder.addCase(updateProfile.pending, (state)=>{
            state.isLoading = true
            state.hasProfile = false
            state.currentProfile = initialProfile
            state.error = {hasErrors: false, message: null}
        })
    }
})

export const profileSelector = (state: RootState) => state.profile
export default profileSlice.reducer


