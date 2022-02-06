import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  updateFilter,
  updateContactRequest,
  updateContactSuccess,
  updateContactError,
} from "./contacts-actions";
import { logoutSuccess } from "../auth/auth-actions";

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
  [logoutSuccess]: () => [],
  [updateContactSuccess]: (state, { payload }) =>
    state.map((contact) => (contact.id === payload.id ? payload : contact)),
});
const filter = createReducer("", {
  [updateFilter]: (_, { payload }) => payload,
});
const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});
const updateLoading = createReducer(false, {
  [updateContactRequest]: () => true,
  [updateContactSuccess]: () => false,
  [updateContactError]: () => false,
});
const error = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
  [updateContactError]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items,
  filter,
  loading,
  error,
  updateLoading,
});
