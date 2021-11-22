import React from 'react';
import styled from 'styled-components';
import { NavigateBefore } from '@styled-icons/material/NavigateBefore';
import { NavigateNext } from '@styled-icons/material/NavigateNext';

const Pagination = ({ count, currentPage, handlePage }) => {
  const offset = parseInt((currentPage - 1) / 10) * 10;

  return (
    <Container>
      {count > 0 && (
        <>
          {' '}
          <PrevButton
            disabled={currentPage === 1}
            onClick={() => {
              if (currentPage === 1) {
                return;
              }
              handlePage(currentPage - 1);
            }}
          />
          {[...Array(count)].splice(0, 10).map(
            (item, index) =>
              index + 1 + offset < count + 1 && (
                <PageItem
                  key={index + 1}
                  isCurrent={currentPage === index + 1 + offset}
                  onClick={() => handlePage(index + 1 + offset)}
                >
                  {index + 1 + offset}
                </PageItem>
              )
          )}
          <NextButton
            disabled={currentPage === count}
            onClick={() => {
              if (currentPage === count) {
                return;
              }
              handlePage(currentPage + 1);
            }}
          />{' '}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin: 24px auto 100px;
`;

const PageItem = styled.div`
  width: 36px;
  height: 36px;
  padding: 7px 0;
  background-color: ${({ theme, isCurrent }) =>
    isCurrent ? theme.skyblue : theme.white};
  border: 1px solid ${({ theme }) => theme.stone};
  color: ${({ theme, isCurrent }) => (isCurrent ? theme.white : theme.skyblue)};
  font-size: 1.2rem;
  text-align: center;
  cursor: pointer;
`;

const PrevButton = styled(NavigateBefore)`
  width: 36px;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.stone};
  color: ${({ theme, disabled }) => (disabled ? theme.stone : theme.skyblue)};
  cursor: ${({ disabled }) => (disabled ? 'mouse' : 'pointer')};
`;

const NextButton = styled(NavigateNext)`
  width: 36px;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.stone};
  color: ${({ theme, disabled }) => (disabled ? theme.stone : theme.skyblue)};
  cursor: ${({ disabled }) => (disabled ? 'mouse' : 'pointer')};
`;

export default Pagination;
