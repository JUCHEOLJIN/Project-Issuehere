import React from 'react';
import styled from 'styled-components';
import Pagination from '../Pagination/Pagination';
import Empty from '../RepositoryList/Empty';
import Issue from './Issue';

const IssueList = ({ issues, currentPage, handlePage }) => {
  const offset = (currentPage - 1) * 5;

  const currentIssues = issues.filter(
    (issue, index) => index > offset - 1 && index < offset + 5
  );

  const count = parseInt(Math.ceil(issues.length / 5));

  return (
    <Container>
      {issues.length > 0 ? (
        <>
          <Title>모든 이슈 모아보기</Title>
          {currentIssues.map(issue => (
            <Issue key={issue.id} issue={issue} />
          ))}
          <Pagination
            count={count}
            currentPage={currentPage}
            handlePage={handlePage}
          />
        </>
      ) : (
        <Empty view="issue" />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.skyblue};
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
`;

export default IssueList;
