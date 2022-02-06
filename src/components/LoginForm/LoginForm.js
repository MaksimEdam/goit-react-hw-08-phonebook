import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/auth-operations";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import s from "./LoginForm.module.css";

export default function LoginForm() {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      setUser({ ...user, [name]: value.trim() });
    },
    [user]
  );
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(loginUser(user));
      setUser({ email: "", password: "" });
    },
    [dispatch, user]
  );

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
      <TextField
        variant="outlined"
        label="Email"
        required
        inputProps={{
          type: "email",
          name: "email",
          value: user.email,
          onChange: handleChange,
        }}
        className={s.input}
      />
      <TextField
        variant="outlined"
        label="Password"
        required
        inputProps={{
          type: "password",
          name: "password",
          value: user.password,
          onChange: handleChange,
        }}
        className={s.input}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className={s.button}
      >
        Login
      </Button>
    </form>
  );
}
