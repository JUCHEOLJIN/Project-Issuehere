import React from 'react';
import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular/Search';

const SearchBar = ({ handleChange, handleSearch }) => {
  return (
    <Form onSubmit={handleSearch}>
      <Input onChange={handleChange} placeholder="검색어를 입력해주세요." />
      <Button>
        <SearchIcon />
      </Button>
    </Form>
  );
};

const Form = styled.form`
  margin: 0 auto;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.stone};
  border-radius: 6px;
`;

const Input = styled.input`
  width: 360px;
  color: ${({ theme }) => theme.stone};

  &::placeholder {
    color: ${({ theme }) => theme.stone};
  }
`;

const Button = styled.button`
  cursor: pointer;
`;

const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.stone};
`;

export default SearchBar;
