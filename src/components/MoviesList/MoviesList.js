import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MoviesList.css';
import MoviePreview from '../MoviePreview';
import routes from '../../routes';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, location, query }) => {
  return (
    <ul className="MoviesList">
      {movies.map(({ id, title, poster_path }) => {
        return (
          <li key={id}>
            <Link
              to={{
                pathname: `${routes.movies}/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              <MoviePreview title={title} url={poster_path} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
MoviesList.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  poster_path: PropTypes.string,
};

export default withRouter(MoviesList);
