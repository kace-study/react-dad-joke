import React from 'react';
import PropTypes from 'prop-types';

import './SearchBox.css';

import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: this.props.keyword ? this.props.keyword : ''
    } 
  }

  onChange = (event) => {
    this.setState({ input: event.target.value});
  }

  onClick = () => {
    this.props.search(this.state.input);
  }

  onKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.search(this.state.input);
    }
  }

  render() {
    return (
      <div className="search-box-container">
        <InputGroup>
          <Input 
            type="search" 
            name="search" 
            id="search" 
            value={this.state.input}
            placeholder="キーワードを入力"
            onChange={this.onChange}
            onKeyPress={this.onKeyPress} 
            >
          </Input>
          <InputGroupAddon addonType="append">
            <Button className="search-button" onClick={this.onClick}>検索</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

SearchBox.propTypes =  {
  search:   PropTypes.func.isRequired,
  keyword:  PropTypes.string.isRequired
};

export default SearchBox;