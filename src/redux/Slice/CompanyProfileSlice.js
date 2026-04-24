import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch company profile
export const fetchCompanyProfile = createAsyncThunk(
  "companyProfile/fetchCompanyProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://admin.gymequipementandsupplement.com/api/web/ecommerce/company-profile/get"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const CompanyProfileSlice = createSlice({
  name: "companyProfile",
  initialState: {
    profile: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanyProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCompanyProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload.data; // assuming the API returns { success, data }
      })
      .addCase(fetchCompanyProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default CompanyProfileSlice.reducer;
