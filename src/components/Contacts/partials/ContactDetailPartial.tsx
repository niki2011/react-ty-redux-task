import React from "react";

import Contact from "../../../models/contact";
interface ContactDetail {
    contact: Contact;
}

const ContactDetail = ({ contact }: ContactDetail) => {
    return (
        <div className="table-responsive-vertical shadow-z-1">
            <h1>Details</h1>
            <table id="table" className="table table-hover table-mc-light-blue">
                <tbody data-testid="artistTable" className="details">
                    <tr>
                        <td>Contact Id</td>
                        <td>{contact.id}</td>
                    </tr>
                    <tr>
                        <td>First Name</td>
                        <td>{contact.firstName}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{contact.lastName}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{contact.email}</td>
                    </tr>
                    <tr>
                        <td>Code</td>
                        <td>{contact.code}</td>
                    </tr>
                    <tr>
                        <td>Oib</td>
                        <td>{contact.oib}</td>
                    </tr>
                    <tr>
                        <td>Phone Number</td>
                        <td>{contact.phone}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default ContactDetail;
