import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Collection, Photo } from "../types";

export const fetchCollections = createAsyncThunk<
  Collection[],
  void,
  { rejectValue: string }
>("collections/fetchCollections", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/collections`,
      {
        method: "GET",
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return rejectWithValue("Faild to fetch Collections");
  }
});

export const fetchPhotos = createAsyncThunk<
  Photo[],
  { page?: number; per_page?: number },
  { rejectValue: string }
>(
  "photos/fetchPhotos",
  async ({ page = 1, per_page = 20 }, { rejectWithValue }) => {
    try {
      const response = axios.get<Photo[]>(
        `${import.meta.env.VITE_BASE_URL}/photos`,
        {
          params: {
            page,
            per_page,
          },
          headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
          },
        }
      );
      return (await response).data;
    } catch (error) {
      return rejectWithValue("Failed to fetch Photos");
    }
  }
);
