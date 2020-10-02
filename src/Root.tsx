import React from "react";
import { connect } from "react-redux";
import { fetchContacts } from "./store/actions/contactsActions";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { StateInterface } from "./store/reducers/contactReducer";

import Navigation from "./components/Navigation";
import Contacts from "./components/Contacts/Contacts";
import EditContact from "./components/Contacts/EditContact";
import CreateContact from "./components/Contacts/CreateContact";
import ContactDetails from "./components/Contacts/ContactDetails";

const Root = ({ store }: any) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Navigation} />
      <Route exact path="/">
        <Redirect to="/contacts" />
      </Route>
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/contact/new" component={CreateContact} />
      <Route exact path="/contact/edit/:id" component={EditContact} />
      <Route exact path="/contact/details/:id" component={ContactDetails} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

const mapStateToProps = (state: StateInterface) => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps, { fetchContacts })(Root);
