import React, { Component } from 'react';
import ServiceApi from '../ServiceApi';
import PropTypes from 'prop-types';

class Reviews extends Component {
  state = {
    reviews: null,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const request = `/${movieId}/reviews`;
    const response = await ServiceApi.getMovieById(request).then(
      data => data.results,
    );
    this.setState({
      reviews: response,
    });
  }
  render() {
    const { reviews } = this.state;
    return (
      <>
        <h1>Reviews</h1>
        <ul>
          {reviews ? (
            reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            ))
          ) : (
            <p>No added reviews yet</p>
          )}
        </ul>
      </>
    );
  }
}

Reviews.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
};
export default Reviews;
