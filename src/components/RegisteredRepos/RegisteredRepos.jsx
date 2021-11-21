import React from 'react';
import styled from 'styled-components';

const RegisteredRepos = ({ registeredRepos }) => {
  return (
    <Container>
      <Title>등록한 Repositories</Title>
      <ReposBox>
        {registeredRepos.map(repo => (
          <RegisteredRepo key={repo.id}>{repo.full_name}</RegisteredRepo>
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
  margin: 36px auto 0;
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
`;

const RegisteredRepo = styled.p`
  max-width: 200px;
  margin-right: 12px;
  padding: 12px;
  background-color: ${({ theme }) => theme.skyblue};
  border-radius: 24px;
  color: ${({ theme }) => theme.white};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;

export default RegisteredRepos;
