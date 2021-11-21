import React from 'react';
import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';

const Nav = ({ handleChange, handleSearch }) => {
  return (
    <Container>
      <Wrapper>
        <Logo>ISSUE HERE</Logo>
        <SearchBox>
          <SearchBar handleChange={handleChange} handleSearch={handleSearch} />
        </SearchBox>
      </Wrapper>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  padding: 12px 0;
  background-color: ${({ theme }) => theme.skyblue};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.stone};
  font-size: 1.5rem;
  font-style: italic;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`;

export default Nav;
