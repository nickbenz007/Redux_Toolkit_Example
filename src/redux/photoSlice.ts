import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Photo } from "../types";
import { fetchPhotos } from "../store/api";
import type { PhotoState } from "../types";

const initialState: PhotoState = {
  data: [],
  isLoading: false,
  isError: false,
};

const photoSlice = createSlice({
  name: "photos",
  initialState: initialState,
  reducers: {
    getPhotos: (state, action: PayloadAction<Photo[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchPhotos.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { getPhotos } = photoSlice.actions;

export default photoSlice.reducer;
