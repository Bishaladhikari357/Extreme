import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch ALL media
export const fetchAllMedia = createAsyncThunk(
  "media/fetchAllMedia",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "https://admin.gymequipementandsupplement.com/api/web/ecommerce/media/all"
      );

      // IMPORTANT: return only data array
      return res.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch gallery data"
      );
    }
  }
);

const mediaSlice = createSlice({
  name: "media",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMedia.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllMedia.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; // ALL media groups
      })
      .addCase(fetchAllMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default mediaSlice.reducer;
