import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/auth-operations";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import s from "./RegisterForm.module.css";

export default function RegisterForm() {
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      setNewUser({ ...newUser, [name]: value.trim() });
    },
    [newUser]
  );
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(registerUser(newUser));
      setNewUser({ name: "", email: "", password: "" });
    },
    [dispatch, newUser]
  );

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
      <TextField
        variant="outlined"
        label="Name"
        required
        inputProps={{
          type: "text",
          name: "name",
          value: newUser.name,
          onChange: handleChange,
        }}
        className={s.input}
      />
      <TextField
        variant="outlined"
        label="Email"
        required
        inputProps={{
          type: "email",
          name: "email",
          value: newUser.email,
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
          value: newUser.password,
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
        Register
      </Button>
    </form>
  );
}
