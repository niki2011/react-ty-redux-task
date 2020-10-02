import {
  FETCH_CONTACTS,
  REMOVE_CONTACT,
  UPDATE_CONTACT,
  ADD_CONTACT,
} from "../types";

import Contact from "../../models/contact";
import { Action } from "../../types";

export interface StateInterface {
  contacts: Array<Contact>;
  loading: Boolean;
}

const initialState = {
  contacts: [],
  loading: true,
};

const setNewId = (contacts: Array<Contact>, contact: Contact) => {
  const newContact = { ...contact };
  const ids = contacts.map(({ id }) => Number(id)).sort((a, b) => b - a);

  newContact.id = ids[0] + 1;
  return newContact;
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (u: Contact) => u.id !== action.payload.id
        ),
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((u: Contact) =>
          u.id === action.payload.id ? action.payload : u
        ),
        loading: false,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, setNewId(state.contacts, action.payload)],
      };
    default:
      return state;
  }
}
