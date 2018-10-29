import React, { Component } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Navbar,
  NavbarBrand 
} from 'reactstrap';

// Custom Component
import Navigation from './components/Navigation/Navigation';
import SearchBox from './components/SearchBox/SearchBox';
import SearchResult from './components/SearchResult/SearchResult';
import JokeList from './components/JokeList/JokeList';
import Home from './components/Home/Home';
import jokes from './seeds/jokes/jokes';

// CSS 
import './App.css';

const initialState = {
  route: 'home',
  keyword: '',
  results: []
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount = () =>  {
    this.setState({ results: jokes });
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  search = (keyword) => {
    if (this.state.route === 'home' && !keyword) {
      // no route change
    } else if (this.state.keyword !== keyword) {
      const filteredJokes = jokes.filter((data) => {
        return data.joke.includes(keyword);
      });
      this.setState({ keyword: keyword, results: filteredJokes });
      this.onRouteChange('search');
    } 
  }

  getYear() {
    return new Date().getFullYear();
  }

  render() {
    const { route, keyword, results } = this.state;

    return (
        <div className="app">

          <Navbar fixed="top" dark color="dark" expand="md">
            <Container>
              <NavbarBrand href="/">
                  Dad's Joke
              </NavbarBrand>
            </Container>
          </Navbar>

          { route === 'search' ? 
            <SearchResult search={this.search} keyword={keyword} results={results} /> : 
            <Home search={this.search} /> }


          {/* <section id="search-result-section" className="py-4">
            <Container>
              <Row>
                <Col md={{ size: 8, offset: 2 }}>
                  <h5>検索結果：{keyword} ヒット数：{results.length} </h5>
                  <JokeList jokes={results} />
                </Col>
              </Row>
            </Container>
          </section> */}

          <footer id="main-footer" className="pt-3 bg-light">
            <Container>
              <Row>
                <Col className="text-center">
                  <p className="small">Dad's Joke created by kace, Copyright &copy; {this.getYear()}</p>
                </Col>
              </Row>
            </Container>
          </footer>
        </div>
    );
  }
}

export default App;
