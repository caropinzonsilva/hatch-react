import React from 'react';
import Container from 'components/Container/Container.jsx';
import 'components/Header/Header.scss';

const Header = () => (
  <div className="Header">
    <Container>
      <h1 className="Header-title">hatch-react</h1>
      <p className="Header-subTitle">A React starter kit</p>
    </Container>
  </div>
);

export default Header;
