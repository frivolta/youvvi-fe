import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiAddress } from "../../../api";
import {
  EditOrCreateWorkingExperienceInput,
  GetCompleteUserProfileOutput,
  QueryOutput,
} from "../../../types/api.types";
import { CompleteProfile, QueryError } from "../../../types/entities.types";

// Update workingExperience or create new one and fetch profile
export const updateWorkingExperience = createAsyncThunk<
  CompleteProfile,
  EditOrCreateWorkingExperienceInput,
  { rejectValue: QueryError }
>(
  "profile/updateWorkingExperience",
  async (updatedWorkingExperience, thunkApi) => {
    try {
      const { id, ...updateData } = updatedWorkingExperience;
      // If profile exists update otherwise create a new one
      id
        ? await axios.patch<QueryOutput>(
            `${apiAddress.WORKING_EXPERIENCE}/${id}`,
            updateData
          )
        : await axios.post<QueryOutput>(
            apiAddress.WORKING_EXPERIENCE,
            updatedWorkingExperience
          );
      const response = await axios.get<GetCompleteUserProfileOutput>(
        apiAddress.GET_PROFILE
      );

      // Check if user has profile
      if (response.data.ok && response.data.user) {
        return response.data.user as CompleteProfile;
      }
      // If user has no profile it has an error message
      return thunkApi.rejectWithValue({
        error: response.data.error || "Cannot update working experience",
      });
    } catch (e) {
      // If network error
      return thunkApi.rejectWithValue({
        error: e.message || "Cannot update working experience, network error",
      });
    }
  }
);

// Delete workingExperience and fetch profile
export const deleteWorkingExperience = createAsyncThunk<
  CompleteProfile,
  number,
  { rejectValue: QueryError }
>("profile/deleteWorkingExperience", async (id, thunkApi) => {
  try {
    await axios.delete<QueryOutput>(`${apiAddress.WORKING_EXPERIENCE}/${id}`);
    const response = await axios.get<GetCompleteUserProfileOutput>(
      apiAddress.GET_PROFILE
    );

    // Check if user has profile
    if (response.data.ok && response.data.user) {
      return response.data.user as CompleteProfile;
    }
    // If user has no profile it has an error message
    return thunkApi.rejectWithValue({
      error: response.data.error || "Cannot delete working experience",
    });
  } catch (e) {
    // If network error
    return thunkApi.rejectWithValue({
      error: e.message || "Cannot delete working experience, network error",
    });
  }
});
