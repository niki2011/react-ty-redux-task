import React from "react";

import { connect } from "react-redux";
import { addContact } from "../../store/actions/contactsActions";
import Contact from "../../models/contact";
import SubmitForm from "./partials/SubmitForm";

import "../../css/form.css";

interface Contacts {
  contacts: Array<Contact>;
}

interface ContactsProps {
  contacts: Contacts;
  loading: Boolean;
  addContact: Function;
  history: any;
}

const createContact = ({ addContact, history }: ContactsProps) => {
  const handleAddContact = (contact: Contact) => {
    addContact(new Contact(contact));
    history.push("/contacts");
  };

  return (
    <SubmitForm
      contact={new Contact({})}
      title="Add contact"
      handleFormSubmision={handleAddContact}
    ></SubmitForm>
  );
};

const mapStateToProps = (state: ContactsProps) => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps, { addContact })(createContact);
