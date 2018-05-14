import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'components/Container/Container.jsx';
import css from 'components/Header/Header.scss';

const Header = () => (
  <div className={css.header}>
    <Container>
      <img
        src="/img/react.svg"
        className={css.logo}
        alt="hatch-react"
        width="80"
      />
      <h1 className={css.title}>hatch-react</h1>
      <p className={css.subTitle}>A React starter kit</p>
      <nav className={css.nav}>
        <NavLink
          exact
          to="/"
          className={css.navItem}
          activeClassName={css.navItemIsActive}
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/counter"
          className={css.navItem}
          activeClassName={css.navItemIsActive}
        >
          Counter Example
        </NavLink>
      </nav>
    </Container>
  </div>
);

export default Header;
