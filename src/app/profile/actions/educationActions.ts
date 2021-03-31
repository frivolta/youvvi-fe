import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiAddress } from "../../../api";
import {
  EditEducationInput,
  GetCompleteUserProfileOutput,
  QueryOutput,
} from "../../../types/api.types";
import { CompleteProfile, QueryError } from "../../../types/entities.types";

// Update education or create new one and fetch profile
export const updateEducation = createAsyncThunk<
  CompleteProfile,
  EditEducationInput,
  { rejectValue: QueryError }
>("profile/updateEducation", async (updatedEducation, thunkApi) => {
  try {
    const { id, ...updateData } = updatedEducation;
    // If profile exists update otherwise create a new one
    id
      ? await axios.patch<QueryOutput>(
          `${apiAddress.EDUCATION}/${id}`,
          updateData
        )
      : await axios.post<QueryOutput>(apiAddress.EDUCATION, updatedEducation);
    const response = await axios.get<GetCompleteUserProfileOutput>(
      apiAddress.GET_PROFILE
    );

    // Check if user has profile
    if (response.data.ok && response.data.user) {
      return response.data.user as CompleteProfile;
    }
    // If user has no profile it has an error message
    return thunkApi.rejectWithValue({
      error: response.data.error || "Cannot update education",
    });
  } catch (e) {
    // If network error
    return thunkApi.rejectWithValue({
      error: e.message || "Cannot update education, network error",
    });
  }
});

// Delete education and fetch profile
export const deleteEducation = createAsyncThunk<
  CompleteProfile,
  number,
  { rejectValue: QueryError }
>("profile/deleteEducation", async (id, thunkApi) => {
  try {
    await axios.delete<QueryOutput>(`${apiAddress.EDUCATION}/${id}`);
    const response = await axios.get<GetCompleteUserProfileOutput>(
      apiAddress.GET_PROFILE
    );

    // Check if user has profile
    if (response.data.ok && response.data.user) {
      return response.data.user as CompleteProfile;
    }
    // If user has no profile it has an error message
    return thunkApi.rejectWithValue({
      error: response.data.error || "Cannot delete education",
    });
  } catch (e) {
    // If network error
    return thunkApi.rejectWithValue({
      error: e.message || "Cannot delete education, network error",
    });
  }
});
