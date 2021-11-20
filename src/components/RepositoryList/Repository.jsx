import React from 'react';
import styled from 'styled-components';

const Repository = ({ repository }) => {
  return (
    <Container>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
    </Container>
  );
};

const Container = styled.li`
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

export default Repository;
