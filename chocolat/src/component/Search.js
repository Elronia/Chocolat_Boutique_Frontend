import React from 'react'


const Search = (props) => {
    //updates SearchTerm
    let handleChange = (evt) => {
      props.changeSearchTerm(evt.target.value)
    }

    return (
        <div className="ui large fluid icon input">
          <input class="select" type="text" 
            placeholder="Search Chocolates by Name..." 
            value={props.searchTerm} 
            onChange={handleChange} aria-label="Search" />
          <i className="circular search link icon"></i>
        </div>
    );
  }

export default Search;
