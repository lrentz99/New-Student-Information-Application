import React from "react";
import {getFilteredPosts} from "../Functions/AppFunctions"

const Search = (props) => {

  const getFilterText = (event) =>{
  //editing somethign here broke this previously



  //Note when adding a new club searching for data will most likely crash the site
    props.setFilteredPosts(getFilteredPosts(event.target.value, props.data))
  }


  return (
    <div>
      <div style={{ marginTop: "10px", width: "100%", padding: "3%" }}>
        <div class="ui icon input">
          {/*Search Bar */}
          <input
            onChange={getFilterText}
            style={{width: "600px", borderRadius: "10px"}}
            class="prompt"
            type="text"
            placeholder="Filter Search..." >
          </input>
          <i class="search icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Search;
