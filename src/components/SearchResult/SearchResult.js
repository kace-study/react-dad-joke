import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import JokeList from '../JokeList/JokeList';
import SearchBox from '../SearchBox/SearchBox';

import './SearchResult.css';

const SearchResult = ({ search, keyword, results }) => {
  return (
    <section id="search-result-section">
      <Container>
        <Row className="py-5">
          <Col md={{ size: 6, offset: 3 }} className="text-center"> 
            <SearchBox search={search} keyword={keyword}/>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 8, offset: 2 }} className="text-left">
            <p>キーワード：{keyword}, &nbsp;&nbsp; ヒット：{results.length} 件</p>
            <JokeList jokes={results} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SearchResult;