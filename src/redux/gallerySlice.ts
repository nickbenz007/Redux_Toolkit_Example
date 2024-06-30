import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Collection, GalleryState } from "../types";
import { fetchCollections } from "../store/api";

const initialState: GalleryState = {
  isLoading: false,
  isError: false,
  data: [],
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState: initialState,
  reducers: {
    getGalleryCollection: (state, action: PayloadAction<Collection[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollections.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        fetchCollections.fulfilled,
        (state, action: PayloadAction<Collection[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchCollections.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { getGalleryCollection } = gallerySlice.actions;

export default gallerySlice.reducer;
