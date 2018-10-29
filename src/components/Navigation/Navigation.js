import React from 'react';
import './Navigation.css';

import {
  Container,
  Navbar,
  NavbarBrand
} from 'reactstrap';

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar fixed="top" dark color="dark" expand="md">
          <Container>
            <NavbarBrand href="/">
              Dad's Joke
            </NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;