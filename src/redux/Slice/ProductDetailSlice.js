// src/redux/slice/ProductDetailSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 👉 Fetch product using SLUG
export const fetchProductBySlug = createAsyncThunk(
  "productDetail/fetchProductBySlug",
  async (slug, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://admin.gymequipementandsupplement.com/api/web/ecommerce/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ product_slug: slug }), // FIXED ✔
        }
      );

      if (!res.ok) throw new Error("Failed to fetch product by slug");

      const data = await res.json();
      return data.data; // API returns: { success: true, data: {...} }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const ProductDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    item: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(fetchProductBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ProductDetailSlice.reducer;
