import React from 'react';
import styled from 'styled-components';

const Empty = ({ view }) => {
  return (
    <>
      {view === 'repo' ? (
        <Content>검색 결과가 없습니다. 다시 시도해 주세요.</Content>
      ) : (
        <Content>현재 등록된 Issue가 없습니다.</Content>
      )}
    </>
  );
};

const Content = styled.p`
  margin-top: 60px;
  color: ${({ theme }) => theme.skyblue};
  font-size: 1.5rem;
  text-align: center;
`;

export default Empty;
