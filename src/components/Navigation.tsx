import React from "react";
import { Link } from "react-router-dom";
import "../css/menu.css";

export default () => {
  return (
    <div className="topnav">
      <Link to="/contacts">Contacts</Link>
    </div>
  );
};
