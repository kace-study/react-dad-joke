import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Footer.css';

const Footer = () => {

  const getYear = () =>  {
    return new Date().getFullYear();
  }

  return (
    <footer id="main-footer" className="pt-3 bg-light">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="small">Dad's Joke created by kace, Copyright &copy; {getYear()}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;