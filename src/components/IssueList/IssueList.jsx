import React from 'react';
import styled from 'styled-components';
import Issue from './Issue';

const IssueList = ({ issues }) => {
  return (
    <Container>
      <Title>모든 이슈 모아보기</Title>
      {issues.map(issue => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 16px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.skyblue};
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
`;

export default IssueList;
