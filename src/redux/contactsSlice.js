import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
});

export const { contactsActions } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
