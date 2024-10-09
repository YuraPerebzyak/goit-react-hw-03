import { useId } from "react";

const SearchBox = ({ searchValue, onSearch }) => {
  const searchInput = useId();
  return (
    <div>
      <label htmlFor={searchInput}>Find contact by name</label>
      <input
        type="text"
        id={searchInput}
        value={searchValue}
        onChange={(evt) => {
          onSearch(evt.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
