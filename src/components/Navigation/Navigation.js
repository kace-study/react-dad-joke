import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

import './Navigation.css';

const Navigation = () => {
  return (
    <Navbar fixed="top" dark color="dark" expand="md">
      <Container>
        <NavbarBrand href="/">
          Dad's Joke
        </NavbarBrand>
      </Container>
    </Navbar>
  );
}

export default Navigation;