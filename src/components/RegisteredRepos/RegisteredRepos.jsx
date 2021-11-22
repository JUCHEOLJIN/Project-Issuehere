import React from 'react';
import styled from 'styled-components';

const RegisteredRepos = ({ registeredRepos, handleDelete, deleteIssue }) => {
  const deleteRepo = repository => {
    const nextRegisteredRepos = handleDelete(repository);
    const repositoryJson = JSON.stringify(nextRegisteredRepos);
    localStorage.setItem('repoData', repositoryJson);
    deleteIssue(repository);
  };

  return (
    <Container>
      <Title>등록한 Repositories</Title>
      <ReposBox>
        {registeredRepos.map(repo => (
          <React.Fragment key={repo.id}>
            <RegisteredRepo>{repo.full_name}</RegisteredRepo>
            <DeleteButton onClick={() => deleteRepo(repo)}>X</DeleteButton>
          </React.Fragment>
        ))}
      </ReposBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 36px auto 16px;
  padding: 24px;
  background-color: #fafafa;
  border: 1px solid ${({ theme }) => theme.skyblue};
  border-radius: 6px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.skyblue};
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
`;

const ReposBox = styled.div`
  display: flex;
  align-items: center;
`;

const RegisteredRepo = styled.p`
  max-width: 200px;
  margin-right: 6px;
  padding: 12px;
  background-color: ${({ theme }) => theme.skyblue};
  border-radius: 24px;
  color: ${({ theme }) => theme.white};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;

const DeleteButton = styled.button`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border: 1px solid ${({ theme }) => theme.skyblue};
  border-radius: 50%;
  color: ${({ theme }) => theme.skyblue};
  cursor: pointer;
`;

export default RegisteredRepos;
