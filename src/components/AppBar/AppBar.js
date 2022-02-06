import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import { AppBar as PhoneBookBar } from "@material-ui/core";
import s from "./AppBar.module.css";

export default function AppBar() {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <PhoneBookBar position="static">
      <div className={s.AppBar}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </div>
    </PhoneBookBar>
  );
}
