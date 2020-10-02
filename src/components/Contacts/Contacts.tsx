import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchContacts,
  removeContact,
} from "../../store/actions/contactsActions";
import Contact from "../../models/contact";
import ContactList from "./partials/ContactList";
import "../../css/table.css";

interface Contacts {
  contacts: Array<Contact>;
  loading: Boolean;
}

interface ContactsProps {
  contacts: Contacts;
  loading: Boolean;
  fetchContacts: Function;
  removeContact: Function;
}

class contacts extends Component<ContactsProps> {
  componentDidMount() {
    if (this.props.contacts.loading) this.props.fetchContacts();
  }

  handleRemoveContact = (id: number) => {
    console.log("id");
    console.log(id);
    this.props.removeContact(id);
  };
  render() {
    return (
      <div id="demo">
        <h1>Contacts</h1>
        <ContactList
          contacts={this.props.contacts.contacts}
          handleRemoveContact={this.handleRemoveContact}
          matchUrl="/contact"
        ></ContactList>
      </div>
    );
  }
}

const mapStateToProps = (state: ContactsProps) => ({
  contacts: state.contacts,
  loading: state.loading,
});

export default connect(mapStateToProps, { fetchContacts, removeContact })(
  contacts
);
