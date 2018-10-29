import React from 'react';
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

  onInputChange = (e) => {
    this.setState({ input: e.target.value});
  }

  onButtonClick = () => {
    this.props.search(this.state.input);
  }

  render() {
    const { input } = this.state;
    return (
      <div className="search-box-container">
        <InputGroup>
          <Input 
            type="search" 
            name="search" 
            id="search" 
            value={input}
            placeholder="キーワードを入力"
            onChange={this.onInputChange}
            >
          </Input>
          <InputGroupAddon addonType="append">
            <Button className="search-button" onClick={this.onButtonClick}>検索</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

export default SearchBox;