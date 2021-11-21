import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav/Nav';
import RegisteredRepos from '../../components/RegisteredRepos/RegisteredRepos';
import RepositoryList from '../../components/RepositoryList/RepositoryList';

const Main = () => {
  const [searchValue, setSearchValue] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [registeredRepos, setRegisteredRepos] = useState([]);

  useEffect(() => {
    const prevRegisteredRepos =
      JSON.parse(localStorage.getItem('repoData')) || [];
    setRegisteredRepos(prevRegisteredRepos);
  }, []);

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

  const handleRegister = repo => {
    // 4개까지만 등록
    if (registeredRepos.length > 3) {
      alert('repository는 4개까지만 등록이 가능합니다.');
      return registeredRepos;
    }
    // 동일한 요소 등록 차단
    if (registeredRepos.some(item => item.id === repo.id)) {
      alert('이미 등록한 repository 입니다.');
      return registeredRepos;
    }
    const newRegisteredRepos = [...registeredRepos, repo];
    setRegisteredRepos(newRegisteredRepos);
    return newRegisteredRepos;
  };

  return (
    <>
      <Nav handleChange={handleChange} handleSearch={handleSearch} />
      <Container>
        <RegisteredRepos registeredRepos={registeredRepos} />
        <RepositoryList
          repositories={repositories.items}
          registeredRepos={registeredRepos}
          handleRegister={handleRegister}
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export default Main;
