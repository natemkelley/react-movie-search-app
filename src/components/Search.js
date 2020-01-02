import React, { useState } from "react";

const Search = props => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
      <form className="">
              <div className="row search-bar">

        <div className="input-field movie-input">
          <i className="material-icons prefix">movie</i>
          <input
            id="icon_prefix"
            type="text"
            className="validate"
            value={searchValue}
            onChange={handleSearchInputChanges}
          />
        </div>
        <div className="input-field search-btn">
          <button
            onClick={callSearchFunction}
            type="submit"
            value="SEARCH"
            className="btn waves-effect waves-light"           >
            Search
            <i class="material-icons right">send</i>
          </button>
        </div>
        </div>

      </form>
  );
};

export default Search;
