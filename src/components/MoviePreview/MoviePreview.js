import React, { Component } from 'react';
import './MoviePreview.css';
import defaultImage from '../../default.jpg';
import PropTypes from 'prop-types';

class MoviePreview extends Component {
  state = {
    url: '',
  };
  componentDidMount() {
    const { url } = this.props;
    let imgUrl = `https://image.tmdb.org/t/p/w300${url}`;
    if (url === null) {
      imgUrl = defaultImage;
    }
    this.setState({
      url: imgUrl,
    });
  }
  render() {
    const { url } = this.state;
    const { title } = this.props;
    return (
      <div className="card">
        <div className="card__thumb">
          <img className="card__img" src={url} alt={title} />
        </div>

        <h2 className="card__title">{title}</h2>
      </div>
    );
  }
}

MoviePreview.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};
export default MoviePreview;
