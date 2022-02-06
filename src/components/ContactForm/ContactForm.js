import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-operations";
import { getAllContacts } from "../../redux/contacts/contacts-selectors";
import s from "./ContactForm.module.css";

export default function ContactForm() {
  const [newContact, setNewContact] = useState({ name: "", number: "" });
  const allContacts = useSelector(getAllContacts);
  const dispatch = useDispatch();
  const handleInputChange = useCallback(
    ({ target: { name, value } }) => {
      setNewContact({ ...newContact, [name]: value });
    },
    [newContact]
  );
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (!newContact.name) {
        return;
      }
      const existingContact = allContacts.find(
        (contact) => contact.name === newContact.name
      );
      if (existingContact) {
        alert(`${existingContact.name} is already in contacts.`);
        return;
      }
      dispatch(addContact(newContact));
      setNewContact({ name: "", number: "" });
    },
    [allContacts, dispatch, newContact]
  );

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.inputWrapper}>
        <label className={s.label}>
          Name
          <input
            type="name"
            name="name"
            value={newContact.name}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div className={s.inputWrapper}>
        <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            value={newContact.number}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>

      <button type="submit" className={s.formButton}>
        Add contact
      </button>
    </form>
  );
}
