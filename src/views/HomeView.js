import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';
import ServiceApi from '../components/ServiceApi';

class HomeView extends Component {
  state = {
    movies: null,
  };
  async componentDidMount() {
    const response = await ServiceApi.getTrending();
    this.setState({
      movies: response,
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="Wrapper">
        <h1>Trending today</h1>
        {movies && <MoviesList movies={movies} />}
      </div>
    );
  }
}

export default HomeView;
