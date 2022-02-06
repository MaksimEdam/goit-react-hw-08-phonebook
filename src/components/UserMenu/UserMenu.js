import React, { useCallback } from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector, useDispatch } from "react-redux";
import { getUserEmail } from "../../redux/auth/auth-selectors";
import { logoutUser } from "../../redux/auth/auth-operations";
import { withStyles } from "@material-ui/core/styles";
import s from "./UserMenu.module.css";

const StyledChip = withStyles({
  root: {
    backgroundColor: "rgb(71, 126, 128)",
    color: "#ffffff",
  },
})(Chip);

export default function UserMenu() {
  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(logoutUser()), [dispatch]);
  const userEmail = useSelector(getUserEmail);

  return (
    <div className={s.UserMenu}>
      <StyledChip avatar={<Avatar />} label={userEmail} />
      <button onClick={onLogout} className={s.logoutbutton}>
        <ExitToAppIcon />
      </button>
    </div>
  );
}
