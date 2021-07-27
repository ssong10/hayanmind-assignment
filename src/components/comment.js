import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  margin-bottom: 12px;
  padding: 20px;
  width: 500px;
  border: 0.5px solid #ced4da;
  border-radius: 20px;
  font-family: SFProDisplay;
  background-color: #f8f9fa;
  div {
    flex-direction: row;
    margin-bottom: 12px;
  }
`;
const Title = styled.p`
  display: inline;
  margin-right: 12px;
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;
  color: #212529;
`;
const Description = styled.p`
  display: inline;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  color: #212529;
`;

const Body = styled.p`
  margin-top: 2px;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  color: #212529;
  margin-bottom: 0px;
`;

const Comment = ({ comment }) => {
  const { id,email,body } = comment;
  return (
    <Container>
      <div>
        <Title>Comment Id</Title>
        <Description>{id}</Description>
      </div>
      <div>
        <Title>Email</Title>
        <Description>{email}</Description>
      </div>
      <Title>Comment</Title>
      <Body>{body}</Body>
    </Container>
  );
};
export default Comment;
