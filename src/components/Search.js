import React from "react";

function Search({onSearchChange}) {

  function handleSearchChange(e){
    onSearchChange(e.target.value)
    console.log(e.target.value)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
