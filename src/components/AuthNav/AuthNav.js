// React imports
import React from "react";
import { NavLink } from "react-router-dom";

// Imports of routes
import routes from "../../routes";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <ul className={s.NavLinksList}>
      <li>
        <NavLink
          to={routes.register}
          className={s.NavLink}
          activeClassName={s["NavLink-active"]}
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.login}
          className={s.NavLink}
          activeClassName={s["NavLink-active"]}
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
