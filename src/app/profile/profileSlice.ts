import { createAsyncThunk, createSlice, isRejectedWithValue, PayloadAction, ThunkDispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiAddress } from '../../api'
import { WorkingExperiences } from '../../resumeTemplates/default/WorkingExperience'
import { tempToken } from '../../temp'
import { CompleteProfile } from '../../types/entities.types'
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
export const fetchProfile = createAsyncThunk<CompleteProfile>('profile/fetchProfile', async()=>{
    const response = await axios.get<any>(apiAddress.GET_PROFILE,  {
        headers: { Authorization: `Bearer ${tempToken}` },
      })
    return response.data as CompleteProfile
}) 

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        getProfile: state=>{
            state.isLoading = true
            state.hasProfile = false
            state.currentProfile = initialProfile
            state.error = {hasErrors: false, message: null}
        },
        getProfileSuccess: (state, {payload}:{payload: CompleteProfile})=>{
            state.isLoading = false
            state.hasProfile = true
            state.currentProfile = payload
            state.error = {hasErrors: false, message: null}
        },
        getProfileFailure: (state, {payload}:{payload: string})=>{
            state.isLoading = true
            state.hasProfile = false
            state.currentProfile = initialProfile
            state.error = {hasErrors: true, message: payload}
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchProfile.fulfilled, (state, {payload})=>{
            state.isLoading = false
            state.hasProfile = true
            state.currentProfile = payload
            state.error = {hasErrors: false, message: null}
        })
    }
})

export const { getProfile, getProfileSuccess, getProfileFailure} = profileSlice.actions
export const profileSelector = (state: RootState) => state.auth
export default profileSlice.reducer


