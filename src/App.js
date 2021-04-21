import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar';
import routes from './routes';

const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-view"*/),
);
const MoviesView = lazy(() =>
  import('./views/MoviesView.js' /* webpackChunkName: "movies-view"*/),
);
const MovieDetailsView = lazy(() =>
  import(
    './views/MovieDetailsView.js' /* webpackChunkName: "movie-details-view"*/
  ),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView.js' /* webpackChunkName: "not-found-view" */),
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path={routes.movieDetails} component={MovieDetailsView} />
        <Route exact path={routes.movies} component={MoviesView} />
        <Route exact path={routes.home} component={HomeView} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
