import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IssueList from '../../components/IssueList/IssueList';
import Nav from '../../components/Nav/Nav';
import RegisteredRepos from '../../components/RegisteredRepos/RegisteredRepos';
import RepositoryList from '../../components/RepositoryList/RepositoryList';

const Main = () => {
  const [searchValue, setSearchValue] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [registeredRepos, setRegisteredRepos] = useState([]);
  const [issues, setIssues] = useState([]);
  const [currentView, setCurrentView] = useState('issue');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const prevRegisteredRepos =
      JSON.parse(localStorage.getItem('repoData')) || [];
    setRegisteredRepos(prevRegisteredRepos);
  }, []);

  useEffect(() => {
    const prevIssues = JSON.parse(localStorage.getItem('issueData')) || [];
    setIssues(prevIssues);
  }, []);

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const handleView = view => {
    setCurrentView(view);
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

  const handleSearch = e => {
    e.preventDefault();
    getRepo();
    setCurrentView('repo');
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

  const handleDelete = repo => {
    const nextRegisteredRepos = [...registeredRepos].filter(
      item => item.id !== repo.id
    );
    setRegisteredRepos(nextRegisteredRepos);
    return nextRegisteredRepos;
  };

  const getIssue = repo => {
    // registered repo 4개 이상일 시, issue 추가
    if (registeredRepos.length > 3) {
      return registeredRepos;
    }

    fetch(`https://api.github.com/repos/${repo}/issues`, {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3_json',
      },
    })
      .then(res => res.json())
      .then(res => {
        const newIssues = [...issues];
        res.forEach(issue => newIssues.push(issue));
        const issueJson = JSON.stringify(newIssues);
        localStorage.setItem('issueData', issueJson);
        setIssues(newIssues);
      });
  };

  const deleteIssue = repo => {
    const nextIssues = issues.filter(
      issue => issue.repository_url !== repo.url
    );
    const issueJson = JSON.stringify(nextIssues);
    localStorage.setItem('issueData', issueJson);
    setIssues(nextIssues);
  };

  const handlePage = page => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  return (
    <>
      <Nav
        handleChange={handleChange}
        handleSearch={handleSearch}
        handleView={handleView}
        currentView={currentView}
      />
      <Container>
        <RegisteredRepos
          registeredRepos={registeredRepos}
          handleDelete={handleDelete}
          deleteIssue={deleteIssue}
        />
        {currentView === 'repo' ? (
          <RepositoryList
            repositories={repositories.items}
            registeredRepos={registeredRepos}
            handleRegister={handleRegister}
            handleDelete={handleDelete}
            getIssue={getIssue}
            deleteIssue={deleteIssue}
          />
        ) : (
          <IssueList
            issues={issues}
            currentPage={currentPage}
            handlePage={handlePage}
          />
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export default Main;
