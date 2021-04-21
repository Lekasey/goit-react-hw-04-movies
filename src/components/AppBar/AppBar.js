import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './AppBar.css';

const AppBar = () => {
  return (
    <header className="Header">
      <nav className="Navigation">
        <NavLink
          exact
          className="NavLink"
          activeClassName="NavLink--active"
          to={routes.home}
        >
          Home
        </NavLink>
        <NavLink
          className="NavLink"
          activeClassName="NavLink--active"
          to={routes.movies}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
