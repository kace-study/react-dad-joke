import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchBox from '../SearchBox/SearchBox';

import './Home.css';

class Home extends React.Component {
  render() {
    const { search, keyword } = this.props;
    return (
      <section id="home-section" className="text-center">
        <Container>
          <Row>
            <Col  md={{ size: 6, offset: 3 }} className="text-center">
              <div className="mb-5 prologue-text-container">
                <h1 className="pb-3 d-none d-md-block">おじさんはもっと<br/>面白くなれる</h1>
                <h2 className="pb-2 d-md-none">おじさんはもっと<br></br>面白くなれる</h2>
                <p>あなただけのオヤジギャクを見つけましょう</p>
              </div>
              <SearchBox search={search} keyword={keyword} />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Home;