import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 280px;
  height: 600px;
  border-right: 1px solid rgba(68, 71, 90, 0.1);

  background: #6272a4;
  opacity: 0.8;

  h1 {
    align-self: flex-start;
    color: #fff;
    margin: 10px 10px;
  }

  svg {
    align-self: flex-end;
    margin-left: 90px;
  }
`;

export const SideBar = styled.ul`
  width: 260px;
  max-height: 600px;
  margin-left: 10px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const Conversation = styled.li`
  display: flex;

  width: 260;
  height: auto;
  margin-top: 10px;
  padding: 8px 8px;
  border-radius: 4px;
  transition: 0.1s;
  img {
    border-radius: 50%;
  }

  &:hover {
    border: 2px solid #bd93f9;
  }

  p {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    margin-left: 10px;
  }
  background: rgba(68, 71, 90, 0.8);
`;
