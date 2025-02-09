import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ filter, onFilter }) {
  const searchId = useId();
  return (
    <div className={css.searchBox}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="name"
        id={searchId}
        value={filter}
        onChange={(e) => {
          onFilter(e.target.value);
        }}
        className={css.inputSearch}
      />
    </div>
  );
}