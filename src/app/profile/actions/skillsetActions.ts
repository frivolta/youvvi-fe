import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiAddress } from "../../../api";
import {
  EditOrCreateSkillsetInput,
  GetCompleteUserProfileOutput,
  QueryOutput,
} from "../../../types/api.types";
import { CompleteProfile, QueryError } from "../../../types/entities.types";

// Update skillset or create new one and fetch profile
export const updateSkillset = createAsyncThunk<
  CompleteProfile,
  EditOrCreateSkillsetInput,
  { rejectValue: QueryError }
>("profile/updateSkillset", async (updatedSkillset, thunkApi) => {
  try {
    const { id, ...updateData } = updatedSkillset;
    // If profile exists update otherwise create a new one
    id
      ? await axios.patch<QueryOutput>(
          `${apiAddress.SKILLSET}/${id}`,
          updateData
        )
      : await axios.post<QueryOutput>(apiAddress.SKILLSET, updatedSkillset);
    const response = await axios.get<GetCompleteUserProfileOutput>(
      apiAddress.GET_PROFILE
    );

    // Check if user has profile
    if (response.data.ok && response.data.user) {
      return response.data.user as CompleteProfile;
    }
    // If user has no profile it has an error message
    return thunkApi.rejectWithValue({
      error: response.data.error || "Cannot update skillset",
    });
  } catch (e) {
    // If network error
    return thunkApi.rejectWithValue({
      error: e.message || "Cannot update skillset, network error",
    });
  }
});

// Delete skillset and fetch profile
export const deleteSkillset = createAsyncThunk<
  CompleteProfile,
  number,
  { rejectValue: QueryError }
>("profile/deleteSkillset", async (id, thunkApi) => {
  try {
    await axios.delete<QueryOutput>(`${apiAddress.SKILLSET}/${id}`);
    const response = await axios.get<GetCompleteUserProfileOutput>(
      apiAddress.GET_PROFILE
    );

    // Check if user has profile
    if (response.data.ok && response.data.user) {
      return response.data.user as CompleteProfile;
    }
    // If user has no profile it has an error message
    return thunkApi.rejectWithValue({
      error: response.data.error || "Cannot delete skillset",
    });
  } catch (e) {
    // If network error
    return thunkApi.rejectWithValue({
      error: e.message || "Cannot delete skillset, network error",
    });
  }
});
