import React, { Component } from "react";

import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { TParams } from "../../types";
import { Contacts } from "../../interfaces";

import {
  updateContact,
  fetchContacts,
} from "../../store/actions/contactsActions";
import Contact from "../../models/contact";
import SubmitForm from "./partials/SubmitForm";

import "../../css/form.css";

interface EditContactState {
  contact: Contact | {};
}

interface EditContactProps extends RouteComponentProps<TParams> {
  contacts: Contacts;
  fetchContacts: Function;
  updateContact: Function;
}

class EditContact extends Component<EditContactProps, EditContactState> {
  state = {
    contact: new Contact({}),
  };
  async componentDidMount() {
    if (this.props.contacts.loading) await this.props.fetchContacts();
    const { id } = this.props.match.params;
    this.getUser(id);
  }

  getUser(id: string) {
    const contact = this.props.contacts.contacts.find(
      (c: Contact) => c.id === Number(id)
    );
    if (contact) this.setState({ contact });
  }

  handleUpdateContact(contact: Contact) {
    this.props.history.push("/contacts");
    this.props.updateContact(new Contact(contact));
  }

  render() {
    if (this.state.contact.id) {
      return (
        <SubmitForm
          contact={this.state.contact}
          title="Edit contact"
          handleFormSubmision={this.handleUpdateContact.bind(this)}
        ></SubmitForm>
      );
    } else {
      return <div></div>;
    }
  }
}

const mapStateToProps = (state: EditContactProps) => ({
  contacts: state.contacts,
  loading: state.contacts.loading,
});

export default connect(mapStateToProps, { updateContact, fetchContacts })(
  EditContact
);
