import React from 'react';
import {
  Container,
  Navbar,
  NavbarBrand
} from 'reactstrap';

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <Container>
            <NavbarBrand href="/">Dad Joke</NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;