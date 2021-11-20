import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav/Nav';
import RepositoryList from '../../components/RepositoryList/RepositoryList';

const Main = () => {
  const [searchValue, setSearchValue] = useState('');
  const [repositories, setRepositories] = useState([]);

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const getRepo = () => {
    fetch(`https://api.github.com/search/repositories?q=${searchValue}`, {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3_json',
      },
    })
      .then(res => res.json())
      .then(res => setRepositories(res));
  };

  const handleSearch = (e, searchValue) => {
    e.preventDefault();
    getRepo();
  };

  console.log(repositories);

  return (
    <>
      <Nav handleChange={handleChange} handleSearch={handleSearch} />
      <Container>
        <RepositoryList repositories={repositories.items} />
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export default Main;
