import { NavLink } from "react-router-dom";
import routes from "../../routes";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import s from "./Navigation.module.css";

export default function Navigation() {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <nav>
      <ul className={s.NavLinksList}>
        <li>
          <NavLink exact to={routes.home} className={s.NavLink}></NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={routes.home}
            className={s.NavLink}
            activeClassName={s["NavLink-active"]}
          >
            Home
          </NavLink>
        </li>
        {isAuthenticated && (
          <li>
            <NavLink
              to={routes.contacts}
              className={s.NavLink}
              activeClassName={s["NavLink-active"]}
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
