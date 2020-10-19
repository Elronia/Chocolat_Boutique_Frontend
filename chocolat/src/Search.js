import React from 'react'


class Search extends React.Component {
    state = {
        value: this.props.searchTerm,
        search: ""
    }

    filterSearch = (value) => {
        this.value = value
    }

    getSearch(term){
        fetch("http://localhost:3000/treats?q=" + String(term))
         .then(resp => resp.json())
         .then((treatsArr) => {
            this.state.search = Object.keys(treatsArr).map(function (key) {         
                return [Number(key), treatsArr[key]]; 
            });
        })
    }
        

    render(){
        return(<div>	
                {this.state.search.map((item, index) => (		
                <p> {item.name}, {item.value} </p>	
            ))}</div>);
    }
    
}

export default Search;
