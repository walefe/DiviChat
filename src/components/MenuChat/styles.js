import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;

  width: 280px;
  height: 600px;

  background: #6272a4;
  opacity: 0.8;
`;

export const ChatList = styled.ul`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  width: 260px;
  max-height: 400px;
  padding: 15px 5px;
  margin-left: 10px;

  h1 {
    align-self: flex-start;
    color: #fff;
  }
`;

export const Conversation = styled.li`
  display: flex;

  width: 260;
  height: auto;
  margin-top: 15px;
  padding: 8px 8px;
  border-radius: 4px;

  img {
    border-radius: 50%;
  }

  &:hover {
    border: 1px solid #bd93f9;
  }

  p {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    margin-left: 10px;
  }
  background: rgba(68, 71, 90, 0.8);
`;
