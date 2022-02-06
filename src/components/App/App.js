import React, { Suspense, lazy, useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import AppBar from "../AppBar";
import Loader from "react-loader-spinner";
import routes from "../../routes";
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../../redux/auth/auth-operations";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoginPage = lazy(() => import("../../views/LoginPage"));
const RegisterPage = lazy(() => import("../../views/RegisterPage"));
const ContactsPage = lazy(() => import("../../views/ContactsPage"));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <HashRouter basename="/">
      <Suspense
        fallback={
          <Loader
            type="TailSpin"
            color="#80cbc4"
            height={80}
            width={80}
            className="loader"
          />
        }
      >
        <AppBar />
        <Switch>
          <Route exact path={routes.home}></Route>

          <PublicRoute
            path={routes.register}
            redirectTo={routes.contacts}
            restricted
          >
            <RegisterPage />
          </PublicRoute>

          <PublicRoute
            path={routes.login}
            redirectTo={routes.contacts}
            restricted
          >
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
            <ContactsPage />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </HashRouter>
  );
}
