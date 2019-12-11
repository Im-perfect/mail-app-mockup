import React, { Component } from "react";
import { connect } from "react-redux";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class SearchBar extends Component {
  state = {
    term: ""
  };

  searchHandler = event => {
    this.setState({
      term: event.target.value
    });
  };

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search.."
          onChange={this.searchHandler}
          value={this.state.term}
          className="search-text"
        />
        <button className="search-button" onClick={()=>this.props.searchSubject(this.state.term)}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
