import React from "react";

const SearchInput = ({
  searchString,
  setSearchString,
  geTFilteredData,
  data
}) => {
  return (
    <div>
      <label for="searchInput">search</label>
      <input
        type="search"
        id="searchInput"
        placeholder="search...."
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchInput;
