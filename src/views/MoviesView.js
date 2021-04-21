import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';
import SearchForm from '../components/SearchForm';
import ServiceApi from '../components/ServiceApi';

class MoviesView extends Component {
  state = {
    query: '',
    foundMovies: '',
  };

  async componentDidMount() {
    const { location } = this.props;
    if (location.search) {
      this.setState({
        query: location.search,
      });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (prevState.query !== query) {
      const response = await ServiceApi.getSearching(query);
      this.setState({
        foundMovies: response,
      });
    }
  }

  onFormSubmit = query => {
    const { history, location } = this.props;
    this.setState({
      query: `?query=${query}`,
    });
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  render() {
    const { foundMovies, query } = this.state;
    // const { match } = this.props;
    return (
      <div className="Wrapper">
        <SearchForm onFormSubmit={this.onFormSubmit} />

        {foundMovies && <MoviesList movies={foundMovies} query={query} />}
      </div>
    );
  }
}

export default MoviesView;
