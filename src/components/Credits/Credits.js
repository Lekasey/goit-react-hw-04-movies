import React, { Component } from 'react';
import ServiceApi from '../ServiceApi';
import defaultImg from '../../default.jpg';
import PropTypes from 'prop-types';

class Credits extends Component {
  state = {
    cast: null,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const request = `/${movieId}/credits`;
    const response = await ServiceApi.getMovieById(request).then(
      data => data.cast,
    );
    this.setState({
      cast: response,
    });
  }
  render() {
    const { cast } = this.state;
    return (
      <>
        <h1>Cast</h1>
        <ul>
          {cast ? (
            cast.map(({ name, id, character, profile_path }) => (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                  width={100}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))
          ) : (
            <p>No actors added yet</p>
          )}
        </ul>
      </>
    );
  }
}
Credits.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  character: PropTypes.string,
  profile_path: PropTypes.string,
};

export default Credits;
