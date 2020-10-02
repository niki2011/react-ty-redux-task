import React, { Component } from "react";

import { RouteComponentProps } from "react-router-dom";
import { TParams } from "../../types";
import { Contacts } from "../../interfaces";

import { connect } from "react-redux";
import {
  updateContact,
  fetchContacts,
} from "../../store/actions/contactsActions";
import Contact from "../../models/contact";
import ContactDetail from "./partials/ContactDetailPartial";

import "../../css/form.css";

interface EditContactState {
  contact: Contact | {};
}

interface ContacDetailstProps extends RouteComponentProps<TParams> {
  contacts: Contacts;
  fetchContacts: Function;
  updateContact: Function;
}

class EditContact extends Component<ContacDetailstProps, EditContactState> {
  state = {
    contact: new Contact({}),
  };
  contact = this.props.contacts.contacts.find(
    (c: Contact) => c.id === Number(this.props.match.params.id)
  );
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

  render() {
    if (this.state.contact.firstName) {
      return <ContactDetail contact={this.state.contact}></ContactDetail>;
    } else {
      return <div></div>;
    }
  }
}

const mapStateToProps = (state: ContacDetailstProps) => ({
  contacts: state.contacts,
  loading: state.contacts.loading,
});

export default connect(mapStateToProps, { updateContact, fetchContacts })(
  EditContact
);
