import React from 'react'
import ReactDOM from 'react-dom'
import '../css/styles.css'
import axios from 'axios';
import SearchList from './SearchList.jsx'

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      ebaySearchItems : [],
      amazonSearchItems: [],
      queryString: ''
    };

    this.searchEbay = this.searchEbay.bind(this);
    this.query = this.query.bind(this);
  }

  componentDidMount() {

  }

  searchEbay(keyword) {
    axios.get('/searchEbay', {
      params: {
        keyword: keyword
      }
    })
    .then((response) => {
      var items = response.data;
      console.log(items);
      this.setState({ebaySearchItems: items});
    })
  }


  query(input) {
    this.setState({queryString : input.target.value});
  }

  render() {
    return (
      <div>
        <div className="ebaySearch">
         <h3>Search Ebay</h3>
         <div className="search">
          <input className="search-form" placeholder="search for an item" onChange= {(input) => this.query(input)} type="text"/>
          <button className="button" onClick={()=>{this.searchEbay(this.state.queryString)}}><i className="fa fa-search" aria-hidden="true"></i></button>
         </div>
        </div>
      <div>
        <SearchList items={this.state.ebaySearchItems}/>
      </div>
    </div>
    )
  }
}
export default Search
