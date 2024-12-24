import React from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilter }) => {
  return (
    <div className={css.searchBox}>
      <label className={css.title}>
        Find contacts by name
        <input
          type="search"
          inputMode="search"
          value={filter}
          onChange={(e) => onFilter(e.target.value)}
          placeholder="Search contacts"
        />
      </label>
    </div>
  );
};

export default SearchBox;
