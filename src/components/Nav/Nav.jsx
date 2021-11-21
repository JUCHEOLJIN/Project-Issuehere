import React from 'react';
import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';

const Nav = ({ handleChange, handleSearch, handleView, currentView }) => {
  return (
    <Container>
      <Wrapper>
        <Logo>ISSUE HERE</Logo>
        <SearchBox>
          <SearchBar handleChange={handleChange} handleSearch={handleSearch} />
        </SearchBox>
        <MenuBox>
          <Menu
            isActive={currentView === 'repo'}
            onClick={() => handleView('repo')}
          >
            Repo
          </Menu>
          <Menu
            isActive={currentView === 'issue'}
            onClick={() => handleView('issue')}
          >
            Issue
          </Menu>
        </MenuBox>
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
  justify-content: space-between;
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
`;

const MenuBox = styled.div``;

const Menu = styled.button`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.white : theme.skyblue};
  border-radius: 50%;
  color: ${({ theme, isActive }) => (isActive ? theme.skyblue : theme.white)};
  font-size: 1rem;
  cursor: pointer;
`;

export default Nav;
