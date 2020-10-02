import Contact from "../../models/contact";

import { contactApi } from "../../api/contacts";

import {
  FETCH_CONTACTS,
  CONTACTS_ERROR,
  REMOVE_CONTACT,
  UPDATE_CONTACT,
  ADD_CONTACT,
} from "../types";

export const fetchContacts = () => async (dispatch: Function) => {
  try {
    const res = await contactApi.fetchContacts();

    dispatch({
      type: FETCH_CONTACTS,
      payload: res.data.map((d: Contact) => new Contact(d)),
    });
  } catch (e) {
    dispatch({
      type: CONTACTS_ERROR,
      payload: console.log(e),
    });
  }
};

export const removeContact = (id: number) => async (dispatch: Function) => {
  try {
    await contactApi.removeContact(id);

    dispatch({
      type: REMOVE_CONTACT,
      payload: { id },
    });
  } catch (e) {
    dispatch({
      type: CONTACTS_ERROR,
      payload: console.log(e),
    });
  }
};
export const updateContact = (contact: Contact) => async (
  dispatch: Function
) => {
  try {
    await contactApi.updateContact(contact);

    dispatch({
      type: UPDATE_CONTACT,
      payload: contact,
    });
  } catch (e) {
    dispatch({
      type: CONTACTS_ERROR,
      payload: console.log(e),
    });
  }
};
export const addContact = (contact: Contact) => async (dispatch: Function) => {
  try {
    await contactApi.addContact(contact);

    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  } catch (e) {
    dispatch({
      type: CONTACTS_ERROR,
      payload: console.log(e),
    });
  }
};
