import React from 'react';
import styled from 'styled-components';
import Empty from './Empty';
import Repository from './Repository';

const RepositoryList = ({
  repositories,
  registeredRepos,
  handleRegister,
  handleDelete,
  getIssue,
  deleteIssue,
}) => {
  return (
    <Container>
      {!repositories?.length ? (
        <Empty />
      ) : (
        repositories &&
        repositories.map(item => (
          <Repository
            key={item.id}
            repository={item}
            registeredRepos={registeredRepos}
            handleRegister={handleRegister}
            handleDelete={handleDelete}
            getIssue={getIssue}
            deleteIssue={deleteIssue}
          />
        ))
      )}
    </Container>
  );
};

const Container = styled.ul`
  margin-top: 16px;
`;

export default RepositoryList;
