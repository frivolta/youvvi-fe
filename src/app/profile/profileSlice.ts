import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiAddress } from "../../api";
import {
  GetCompleteUserProfileOutput,
  QueryOutput,
} from "../../types/api.types";
import {
  CompleteProfile,
  Profile,
  QueryError,
} from "../../types/entities.types";
import { toasterError, toasterSuccess } from "../../utils/toast";
import { RootState } from "../store";
import {
  deleteEducation,
  deleteSkillset,
  updateEducation,
  updateSkillset,
} from "./actions";
import {
  deleteWorkingExperience,
  updateWorkingExperience,
} from "./actions/workingExperienceActions";

interface ProfileState {
  hasProfile: boolean;
  currentProfile: CompleteProfile;
  isLoading: boolean;
  error: {
    hasErrors: boolean;
    message: string | null;
  };
}

const initialProfile: CompleteProfile = {
  email: null,
  userId: null,
  profile: {
    id: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    name: null,
    workTitle: null,
  },
};

const initialState: ProfileState = {
  hasProfile: false,
  currentProfile: initialProfile,
  isLoading: false,
  error: {
    hasErrors: false,
    message: null,
  },
};

// Async actions
export const fetchProfile = createAsyncThunk<
  CompleteProfile,
  undefined,
  { rejectValue: QueryError }
>("profile/fetchProfile", async (_, thunkApi) => {
  try {
    const response = await axios.get<GetCompleteUserProfileOutput>(
      apiAddress.GET_PROFILE
    );

    // Check if user has profile
    if (response.data.ok && response.data.user) {
      return response.data.user as CompleteProfile;
    }
    // If user has no profile it has an error message
    return thunkApi.rejectWithValue({
      error: response.data.error || "Cannot get profile",
    });
  } catch (e) {
    // If network error
    return thunkApi.rejectWithValue({
      error: e.message || "Cannot get profile, network error",
    });
  }
});

export const updateProfile = createAsyncThunk<
  CompleteProfile,
  Partial<Profile>,
  { rejectValue: QueryError }
>("profile/updateProfile", async (updatedProfile, thunkApi) => {
  try {
    // If profile exists update otherwise create a new one
    updatedProfile.id
      ? await axios.patch<QueryOutput>(apiAddress.PROFILE, updatedProfile)
      : await axios.post<QueryOutput>(apiAddress.PROFILE, updatedProfile);
    const response = await axios.get<GetCompleteUserProfileOutput>(
      apiAddress.GET_PROFILE
    );

    // Check if user has profile
    if (response.data.ok && response.data.user) {
      return response.data.user as CompleteProfile;
    }
    // If user has no profile it has an error message
    return thunkApi.rejectWithValue({
      error: response.data.error || "Cannot update profile",
    });
  } catch (e) {
    // If network error
    return thunkApi.rejectWithValue({
      error: e.message || "Cannot update profile, network error",
    });
  }
});

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.hasProfile = true;
      state.currentProfile = payload;
      state.error = { hasErrors: false, message: null };
    });
    builder.addCase(fetchProfile.rejected, (state, { payload }) => {
      state.isLoading = true;
      state.hasProfile = false;
      state.currentProfile = initialProfile;
      state.error = {
        hasErrors: true,
        message: payload?.error || "Cannot get profile",
      };
    });
    builder.addCase(fetchProfile.pending, (state) => {
      state.isLoading = true;
      state.hasProfile = false;
      state.currentProfile = initialProfile;
      state.error = { hasErrors: false, message: null };
    });
    builder.addCase(updateProfile.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.hasProfile = true;
      state.currentProfile = payload;
      state.error = { hasErrors: false, message: null };
      toasterSuccess("Profile updated");
    });
    builder.addCase(updateProfile.rejected, (state, { payload }) => {
      state.isLoading = true;
      state.hasProfile = false;
      state.currentProfile = initialProfile;
      state.error = {
        hasErrors: true,
        message: payload?.error || "Cannot update profile",
      };
      toasterError("Cannot update profile");
    });
    builder.addCase(updateProfile.pending, (state) => {
      state.isLoading = true;
      state.hasProfile = false;
      state.currentProfile = initialProfile;
      state.error = { hasErrors: false, message: null };
    });
    builder.addCase(updateEducation.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.hasProfile = true;
      state.currentProfile = payload;
      state.error = { hasErrors: false, message: null };
      toasterSuccess("Education updated");
    });
    builder.addCase(updateEducation.rejected, (state, { payload }) => {
      state.isLoading = true;
      state.hasProfile = false;
      state.currentProfile = initialProfile;
      state.error = {
        hasErrors: true,
        message: payload?.error || "Cannot update education",
      };
      toasterError("Cannot update education");
    });
    builder.addCase(updateEducation.pending, (state) => {
      state.isLoading = true;
      state.hasProfile = false;
      state.currentProfile = initialProfile;
      state.error = { hasErrors: false, message: null };
    });
    builder.addCase(deleteEducation.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.hasProfile = true;
      state.currentProfile = payload;
      state.error = { hasErrors: false, message: null };
      toasterSuccess("Education deleted");
    });
    builder.addCase(deleteEducation.rejected, (state, { payload }) => {
      state.isLoading = true;
      state.hasProfile = false;
      state.currentProfile = initialProfile;
      state.error = {
        hasErrors: true,
        message: payload?.error || "Cannot delete education",
      };
      toasterError("Cannot delete education");
    });
    builder.addCase(deleteEducation.pending, (state) => {
      state.isLoading = true;
      state.hasProfile = false;
      state.currentProfile = initialProfile;
      state.error = { hasErrors: false, message: null };
    });
    builder.addCase(updateWorkingExperience.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.hasProfile = true;
      state.currentProfile = payload;
      state.error = { hasErrors: false, message: null };
      toasterSuccess("Working experience updated");
    });
    builder.addCase(updateWorkingExperience.rejected, (state, { payload }) => {
      state.isLoading = true;
      state.hasProfile = false;
      state.currentProfile = initialProfile;
      state.error = {
        hasErrors: true,
        message: payload?.error || "Cannot update working experience",
      };
      toasterError("Cannot update working experience");
    });
    builder.addCase(updateWorkingExperience.pending, (state) => {
      state.isLoading = true;
      state.hasProfile = false;
      state.currentProfile = initialProfile;
      state.error = { hasErrors: false, message: null };
    });
    builder.addCase(deleteWorkingExperience.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.hasProfile = true;
      state.currentProfile = payload;
      state.error = { hasErrors: false, message: null };
      toasterSuccess("Skill Group deleted");
    });
    builder.addCase(deleteWorkingExperience.rejected, (state, { payload }) => {
      state.isLoading = true;
      state.hasProfile = false;
      state.currentProfile = initialProfile;
      state.error = {
        hasErrors: true,
        message: payload?.error || "Cannot delete skillset",
      };
      toasterError("Cannot delete skillset");
    });
    builder.addCase(deleteWorkingExperience.pending, (state) => {
      state.isLoading = true;
      state.hasProfile = false;
      state.currentProfile = initialProfile;
      state.error = { hasErrors: false, message: null };
    });
    builder.addCase(updateSkillset.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.hasProfile = true;
      state.currentProfile = payload;
      state.error = { hasErrors: false, message: null };
      toasterSuccess("Skill Group updated");
    });
    builder.addCase(updateSkillset.rejected, (state, { payload }) => {
      state.isLoading = true;
      state.hasProfile = false;
      state.currentProfile = initialProfile;
      state.error = {
        hasErrors: true,
        message: payload?.error || "Cannot update skillset",
      };
      toasterError("Cannot update skillset");
    });
    builder.addCase(updateSkillset.pending, (state) => {
      state.isLoading = true;
      state.hasProfile = false;
      state.currentProfile = initialProfile;
      state.error = { hasErrors: false, message: null };
    });
    builder.addCase(deleteSkillset.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.hasProfile = true;
      state.currentProfile = payload;
      state.error = { hasErrors: false, message: null };
      toasterSuccess("Skill Group deleted");
    });
    builder.addCase(deleteSkillset.rejected, (state, { payload }) => {
      state.isLoading = true;
      state.hasProfile = false;
      state.currentProfile = initialProfile;
      state.error = {
        hasErrors: true,
        message: payload?.error || "Cannot delete skillset",
      };
      toasterError("Cannot delete skillset");
    });
    builder.addCase(deleteSkillset.pending, (state) => {
      state.isLoading = true;
      state.hasProfile = false;
      state.currentProfile = initialProfile;
      state.error = { hasErrors: false, message: null };
    });
  },
});

export const profileSelector = (state: RootState) => state.profile;
export default profileSlice.reducer;
