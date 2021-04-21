import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleInputChange = event => {
    this.setState({
      query: event.currentTarget.value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.query);

    this.setState({
      query: '',
    });
  };

  render() {
    const { query } = this.state;
    return (
      <form className="SearchForm" onSubmit={this.handleFormSubmit}>
        <label className="SearchForm__label">
          <input
            className="SearchForm__input"
            type="text"
            value={query}
            onChange={this.handleInputChange}
          />
        </label>
        <button className="SearchForm__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchForm;
