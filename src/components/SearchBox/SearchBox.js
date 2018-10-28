import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';

const SearchBox = ({ onSearchChange }) =>  {
  return (
    <div>
      <InputGroup>
        <Input 
          type="search" 
          name="search" 
          id="search-box" 
          placeholder="キーワードを入力してください"
          onChange={onSearchChange}
          >
        </Input>
        <InputGroupAddon addonType="append">
          <Button color="primary">検索</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

export default SearchBox;