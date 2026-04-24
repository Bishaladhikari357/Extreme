import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch all social media
export const fetchSocialMedia = createAsyncThunk(
  "socialmedia/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://admin.gymequipementandsupplement.com/api/web/ecommerce/social-media/all"
      );

      const data = await res.json();

      if (!res.ok) {
        return rejectWithValue(data.message || "Failed to fetch social media");
      }

      // FIXED: API returns { success, data: [...] }
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const SocialMediaSlice = createSlice({
  name: "socialmedia",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSocialMedia.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSocialMedia.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchSocialMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default SocialMediaSlice.reducer;
