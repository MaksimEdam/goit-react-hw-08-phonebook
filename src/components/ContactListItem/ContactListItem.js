import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-operations";
import EditorButton from "../EditorButton";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "./ContactListItem.module.css";

export default function ContactListItem({ contact: { id, name, number } }) {
  const [editedContact, setEditedContact] = useState({
    name: name,
    number: number,
  });
  const dispatch = useDispatch();
  const onDeleteContact = (contactId) => dispatch(deleteContact(contactId));
  const handleInputChange = useCallback(
    ({ target: { name, value } }) => {
      setEditedContact({ ...editedContact, [name]: value });
    },
    [editedContact]
  );

  return (
    <li className={s.item}>
      <>
        <div className={s.editorInput}>
          <input
            type="name"
            name="name"
            value={editedContact.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="number"
            value={editedContact.number}
            onChange={handleInputChange}
            required
          />
        </div>
      </>

      <div className={s.btnGroup}>
        <EditorButton purpose="delete" callback={() => onDeleteContact(id)} />
      </div>
    </li>
  );
}
