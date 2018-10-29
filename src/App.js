import React, { Component } from 'react';

// Custom Component
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import SearchResult from './components/SearchResult/SearchResult';
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
    // get dataset of jokes via webapi
    this.setState({ results: jokes });
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  search = (keyword) => {
    if (this.state.route === 'home' && !keyword) {
      // no route change
    } else if (this.state.keyword !== keyword) {

      const param = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      };
      fetch(`${process.env.REACT_APP_DEV_QUERY_API_URL}?query=${keyword}`, param)
        .then(response => response.json())
        .then(jokes => {
          const filteredJokes = jokes.filter((data) => {
            const jokeLowerCase = data.joke.toLowerCase();
            return jokeLowerCase.includes(keyword.toLowerCase());
        })
        .map((data) => {
          return   {
            id: data.id,
            joke: data.joke,
            category: data.categoryName,
            like: data.like,
            username: data.userName
          }
        });
          this.setState({ keyword: keyword, results: filteredJokes });
          this.onRouteChange('search');
        })
        .catch(console.log);
    } 
  }

  render() {
    const { route, keyword, results } = this.state;
    return (
        <div className="app">

          <Navigation />

          { route === 'search' ? 
            <SearchResult 
              search={this.search} 
              keyword={keyword} 
              results={results} /> : 
            <Home 
              search={this.search} 
              keyword={keyword} /> 
          }

          <Footer />

        </div>
    );
  }
}

export default App;
