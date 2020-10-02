import React from "react";
// import { connect } from "react-redux";
// import { removeContact } from "../../../store/actions/contactsActions";

import { Link } from "react-router-dom";

import Contact from "../../../models/contact";
interface ContactProps {
  contacts: Array<Contact>;
  matchUrl: String;
  handleRemoveContact: Function;
}

const contactList = ({
  contacts,
  matchUrl,
  handleRemoveContact,
}: ContactProps) => {
  return (
    <div className="table-responsive-vertical shadow-z-1">
      <table id="table" className="table table-hover table-mc-light-blue">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody data-testid="artistTable">
          {contacts.map((contact: Contact, index: number) => (
            <tr key={index}>
              <td data-title="ID">{contact.firstName}</td>
              <td data-title="Title">{contact.lastName}</td>
              <td data-title="Title">
                <Link to={`${matchUrl}/edit/${contact.id}`}>Edit</Link>
              </td>
              <td data-title="Details">
                <Link to={`${matchUrl}/details/${contact.id}`}>Details</Link>
              </td>
              <td data-title="Remove">
                <span
                  onClick={() => handleRemoveContact(contact.id)}
                  className="click"
                >
                  {" "}
                  Remove{" "}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Link to="/contact/new">Add Contact</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default contactList;
