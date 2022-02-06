import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFilter } from "../../redux/contacts/contacts-actions";
import { getFilterValue } from "../../redux/contacts/contacts-selectors";
import s from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const onUpdateFilter = useCallback(
    (event) => dispatch(updateFilter(event.target.value)),
    [dispatch]
  );
  const filterValue = useSelector(getFilterValue);

  return (
    <div className={s.filter}>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={onUpdateFilter}
          autoComplete="off"
          required
        />
      </label>
    </div>
  );
}
