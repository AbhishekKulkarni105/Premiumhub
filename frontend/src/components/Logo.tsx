import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="navbar-brand text-primary" to="/">
      {/* <i className="fas fa-dragon" style={{ fontSize: "1.2em" }}></i> Store */}
      <img src="https://www.premiumhub.site/wp-content/uploads/2020/11/a-1.png" alt="" width="100px"  />
    </Link>
  );
}
