import {
  createAsyncThunk,
  createSlice,
  createSelector,
} from '@reduxjs/toolkit';

import { getData } from 'services/auth';
import { IImageHit } from 'common/types';
import { RootState } from 'redux/store';

interface HomeState {
  data: {
    totalHits: number;
    total: number;
    hits: IImageHit[];
  };
  isLoading: boolean;
}
const initialState = {
  data: {
    totalHits: 0,
    total: 0,
    hits: [],
  },
  isLoading: false,
} as HomeState;

export const getImages = createAsyncThunk('getImages', async () => {
  const response = await getData();
  return response;
});

export const HomeSlice = createSlice({
  name: 'equipment-requests',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getImages.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getImages.fulfilled, (state, action: any) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getImages.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default HomeSlice.reducer;

export const getMemoizedIsLoading = createSelector(
  (state: RootState) => state.home.isLoading,
  (isLoading) => {
    return isLoading;
  },
);

export const getMemoizedImages = createSelector(
  (state: RootState) => state.home.data,
  (data) => {
    return data.hits;
  },
);
