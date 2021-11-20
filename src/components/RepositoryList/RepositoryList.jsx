import React from 'react';
import styled from 'styled-components';
import Repository from './Repository';

const RepositoryList = ({ repositories }) => {
  return (
    <Container>
      {repositories &&
        repositories.map(item => (
          <Repository key={item.id} repository={item} />
        ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 16px;
`;

export default RepositoryList;
