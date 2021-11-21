import React from 'react';
import styled from 'styled-components';

const Repository = ({
  repository,
  registeredRepos,
  handleRegister,
  handleDelete,
  getIssue,
  deleteIssue,
}) => {
  const isRegistered = registeredRepos.some(item => item.id === repository.id);

  const registerRepo = () => {
    const newRegisteredRepos = handleRegister(repository);
    const repositoryJson = JSON.stringify(newRegisteredRepos);
    localStorage.setItem('repoData', repositoryJson);
  };

  const deleteRepo = () => {
    const nextRegisteredRepos = handleDelete(repository);
    const repositoryJson = JSON.stringify(nextRegisteredRepos);
    localStorage.setItem('repoData', repositoryJson);
  };

  const handleClick = () => {
    isRegistered ? deleteRepo() : registerRepo();
    isRegistered ? deleteIssue(repository) : getIssue(repository.full_name);
  };

  return (
    <Container>
      <TextBox>
        <Name>{repository.full_name}</Name>
        <Description>{repository.description}</Description>
      </TextBox>
      {isRegistered ? (
        <RegistrationButton isRegistered={isRegistered} onClick={handleClick}>
          취 소
        </RegistrationButton>
      ) : (
        <RegistrationButton isRegistered={isRegistered} onClick={handleClick}>
          등 록
        </RegistrationButton>
      )}
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 12px;
  background-color: #fafafa;
  border: 1px solid ${({ theme }) => theme.stone};
  border-radius: 6px;
`;

const Name = styled.h3`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.skyblue};
  font-size: 1.2rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.black};
`;

const TextBox = styled.div``;

const RegistrationButton = styled.button`
  width: 100px;
  padding: 16px;
  background-color: ${({ theme, isRegistered }) =>
    isRegistered ? theme.red : theme.skyblue};
  border-radius: 6px;
  color: ${({ theme }) => theme.white};
  font-size: 1rem;
  cursor: pointer;
`;

export default Repository;
