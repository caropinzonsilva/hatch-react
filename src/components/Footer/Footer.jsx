import React from 'react';
import Container from 'components/Container/Container.jsx';
import css from 'components/Footer/Footer.scss';

function Footer() {
  return (
    <footer className={css.footer}>
      <Container>
        <small>Made with ♥ by Axiom Zen</small>
      </Container>
    </footer>
  );
}

export default Footer;
