import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filterSlice';

configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});
