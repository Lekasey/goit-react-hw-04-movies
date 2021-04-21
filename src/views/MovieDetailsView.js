import React, { Component } from 'react';
import ServiceApi from '../components/ServiceApi';
import routes from '../routes';
import defaultImg from '../default.jpg';
import { NavLink, Route, withRouter } from 'react-router-dom';
import Credits from '../components/Credits';
import Reviews from '../components/Reviews';

class MovieDetailsView extends Component {
  state = {
    title: '',
    imgUrl: '',
    descr: '',
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await ServiceApi.getMovieById(`/${movieId}`);
    const { title, poster_path, overview, vote_average, genres } = response;

    this.setState({
      title: title,
      imgUrl: `https://image.tmdb.org/t/p/w500${poster_path}`,
      descr: overview,
      vote: vote_average,
      genres: [...genres],
    });
    if (!poster_path) {
      this.setState({
        imgUrl: defaultImg,
      });
    }
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.movies);
  };
  render() {
    const { title, imgUrl, descr, vote, genres } = this.state;
    const { url } = this.props.match;
    return (
      <>
        <div className="Flex-Wrapper">
          <div className="image_block">
            <button
              className="GoBackButton"
              type="button"
              onClick={this.handleGoBack}
            >
              Go Back
            </button>
            <img
              className="image_block-image"
              src={imgUrl}
              alt={title}
              width={300}
            />
          </div>
          <div className="info-block">
            <h1>{title}</h1>
            <p>Average vote: {vote}</p>
            <p>Overview: </p>
            <p>{descr}</p>
            <ul>
              {genres &&
                genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/credits`,
                  state: {
                    ...this.props.location.state,
                  },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/reviews`,
                  state: {
                    ...this.props.location.state,
                  },
                }}
              >
                Rewiews
              </NavLink>
            </li>
          </ul>
        </div>
        <Route path={routes.credits} component={Credits} />
        <Route path={routes.reviews} component={Reviews} />
      </>
    );
  }
}

export default withRouter(MovieDetailsView);
