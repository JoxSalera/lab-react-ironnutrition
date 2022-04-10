import React from 'react';
import { Divider, Input } from 'antd';

const Search = ({ setSearchValue, searchValue }) => {
  const updateSearch = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input value={searchValue} type="text" onChange={updateSearch} />
    </>
  );
};

export default Search;
