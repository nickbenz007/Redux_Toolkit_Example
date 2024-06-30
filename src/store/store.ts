import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "../redux/gallerySlice";
import photoSlice from "../redux/photoSlice";

export const store = configureStore({
  reducer: {
    collections: gallerySlice,
    photos: photoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
