import React, { useEffect } from "react";
import ContactListItem from "../ContactListItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/contacts-operations";
import {
  getFilteredItems,
  getLoading,
} from "../../redux/contacts/contacts-selectors";
import _ from "lodash";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "./ContactList.module.css";

export default function ContactList() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);
  const filtered = useSelector(getFilteredItems);
  const isLoading = useSelector(getLoading);
  const loaderConfig = {
    type: "TailSpin",
    color: "#80cbc4",
    height: 50,
    width: 50,
    className: s.loader,
  };

  return (
    <>
      {isLoading && <Loader {...loaderConfig} />}
      {!_.isEmpty(filtered) && (
        <ul className={s.contacts}>
          {filtered.map((contact) => (
            <ContactListItem key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
      {_.isEmpty(filtered) && !isLoading && (
        <p className={s.notification}>No contact found.</p>
      )}
    </>
  );
}
