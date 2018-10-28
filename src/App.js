import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

// Custom Component
import Navigation from './components/Navigation/Navigation';
import SearchBox from './components/SearchBox/SearchBox';
import JokeList from './components/JokeList/JokeList';
import jokes from './seeds/jokes/jokes'

// CSS 
import './App.css';

const initialState = {
  keyword: '',
  results: []
}

class App extends Component {

  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount = () =>  {
    this.setState({ results: jokes });
  }

  // confirm react lifecycle again
  // これはonChangeでやらない方良い。リクエスト数が半端なさそう。
  onSearchChange = (event) =>  {
    const filteredJokes = jokes.filter((data) => {
      return data.joke.includes(event.target.value);
    });
    this.setState({ keyword: event.target.value, results: filteredJokes });
  }

  getYear() {
    return new Date().getFullYear();
  }

  render() {
    const { keyword, results } = this.state;

    return (
      <div className="app">

        <Navigation id="navigation"/>

        <section id="prologue-section" className="py-5 text-center">
          <Container>
            <Row>
              <Col className="text-center">
                <h1 className="pb-3 d-none d-md-block">おじさんはもっと面白くなれる</h1>
                <h3 className="pb-2 d-md-none">おじさんは<br/>もっと面白くなれる</h3>
                <p className="small">もっと面白くなりたいおじさんのためのサイトです。<br/>あなただけのオヤジギャクを見つけましょう。</p>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="search-section" className="pb-4 text-center">
          <Container>
            <Row>
              <Col md={{ size: 6, offset: 3 }}>
                <SearchBox onSearchChange={this.onSearchChange}/>
              </Col>
            </Row>
          </Container>
        </section>

        <hr />

        <section id="search-result-section" className="py-4">
          <Container>
            <Row>
              <Col md={{ size: 10, offset: 1 }}>
                <h5>検索結果：{keyword} ヒット数：{results.length} </h5>
                <JokeList jokes={results} />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pt-5"></section>

        <footer id="main-footer" className="py-4 bg-light">
          <Container>
            <Row>
              <Col className="text-center">
                <p>Dad Joke created by kace, Copyright &copy; {this.getYear()}</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    );
  }
}

export default App;
