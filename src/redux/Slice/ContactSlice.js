import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// POST Contact Form
export const sendContactForm = createAsyncThunk(
  "contact/sendContactForm",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://admin.gymequipementandsupplement.com/api/web/ecommerce/contact/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData?.message || "Failed to submit form");
      }

      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const ContactSlice = createSlice({
  name: "contact",
  initialState: {
    loading: false,
    success: false,
    error: null,
    data: null,
  },
  reducers: {
    resetContactState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactForm.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(sendContactForm.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(sendContactForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { resetContactState } = ContactSlice.actions;
export default ContactSlice.reducer;
