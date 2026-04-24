import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch all articles
export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://admin.gymequipementandsupplement.com/api/web/ecommerce/articles/all"
      );

      if (!res.ok) {
        throw new Error("Failed to load articles");
      }

      const json = await res.json();

      // Normalize structure
      const normalized = json.data.map((item) => ({
        article_type_id: item.article_type_id,
        name: item.name,
        articles: Array.isArray(item.data) ? item.data : [item.data],
      }));

      return normalized;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const ArticleSlice = createSlice({
  name: "articles",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; // Store normalized data
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ArticleSlice.reducer;
