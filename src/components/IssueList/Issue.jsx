import React from 'react';
import styled from 'styled-components';

const Issue = ({ issue }) => {
  const url = new URL(issue.repository_url);
  const repository = url.pathname.replace('/repos/', '');

  return (
    <Container href={issue.html_url} target="_blank">
      <TextBox>
        <RepositoryName>{repository}</RepositoryName>
        <Title>{issue.title}</Title>
      </TextBox>
      <State>{issue.state}</State>
    </Container>
  );
};

const Container = styled.a`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 12px;
  background-color: #fafafa;
  border: 1px solid ${({ theme }) => theme.stone};
  border-radius: 6px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.black};
  margin-bottom: 12px;
  font-size: 1.2rem;
`;

const RepositoryName = styled.p`
  color: ${({ theme }) => theme.skyblue};
`;

const TextBox = styled.div``;

const State = styled.p`
  width: 100px;
  padding: 16px;
  background-color: ${({ theme, isRegistered }) =>
    isRegistered ? theme.red : theme.skyblue};
  border-radius: 6px;
  color: ${({ theme }) => theme.white};
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
`;

export default Issue;
