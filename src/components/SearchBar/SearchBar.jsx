import React, { useState } from 'react';
import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular/Search';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  return (
    <Form>
      <Input onChange={handleChange} placeholder="검색어를 입력해주세요." />
      <Button>Enter</Button>
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

const Button = styled(Search)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.stone};
`;

export default SearchBar;
