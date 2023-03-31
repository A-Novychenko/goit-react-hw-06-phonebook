import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {},
});

export const { filterActions } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
