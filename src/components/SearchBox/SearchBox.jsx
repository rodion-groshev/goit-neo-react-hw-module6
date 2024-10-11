import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, handleChange }) => {
  const searchID = useId();

  return (
    <div className={css.search}>
      <label htmlFor={searchID}>Find contacts by name</label>
      <input
        type="text"
        onChange={handleChange}
        value={value}
        id={searchID}
      ></input>
    </div>
  );
};

export default SearchBox;
