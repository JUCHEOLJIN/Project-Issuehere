import React from 'react';
import styled from 'styled-components';

const Repository = ({ repository, registeredRepos, handleRegister }) => {
  const handleClick = async () => {
    const newRegisteredRepos = handleRegister(repository);
    const repositoryJson = JSON.stringify(newRegisteredRepos);
    await localStorage.setItem('repoData', repositoryJson);
  };

  return (
    <Container>
      <TextBox>
        <Name>{repository.full_name}</Name>
        <Description>{repository.description}</Description>
      </TextBox>
      <RegistrationButton onClick={handleClick}>등 록</RegistrationButton>
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
  background-color: ${({ theme }) => theme.skyblue};
  border-radius: 6px;
  color: ${({ theme }) => theme.white};
  font-size: 1rem;
  cursor: pointer;
`;

export default Repository;
