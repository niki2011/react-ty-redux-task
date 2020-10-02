import Contact from "./models/contact";

export interface Contacts {
  contacts: Array<Contact>;
  loading: Boolean;
}
