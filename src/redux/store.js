import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/addContact');
export const deleteContact = createAction('contact/deleteContact')

const clickAddContact = createReducer([], {
    [addContact]: (state, action) => state.push(action.payload),
    [deleteContact]: (state, action )=> state.filter(item => item.id !== action.payload),
});

export const store =  configureStore({
    reducer: {
      contact: clickAddContact,
  },
})

