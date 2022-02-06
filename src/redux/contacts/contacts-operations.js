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
  updateContactRequest,
  updateContactSuccess,
  updateContactError,
} from "./contacts-actions";
import axios from "axios";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};
const addContact = (contact) => async (dispatch) => {
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post("/contacts", contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};
const deleteContact = (contactId) => async (dispatch) => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};
const updateContact =
  (contactId, updatedUser, setSaving) => async (dispatch) => {
    dispatch(updateContactRequest());
    try {
      const { data } = await axios.patch(`/contacts/${contactId}`, updatedUser);
      dispatch(updateContactSuccess(data));
      setSaving(false);
    } catch (error) {
      dispatch(updateContactError(error.message));
    }
  };

export { fetchContacts, addContact, deleteContact, updateContact };
