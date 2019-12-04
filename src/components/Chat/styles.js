import styled from 'styled-components';

export const Container = styled.div`
  width: 1000px;
  height: 600px;

  background: #6272a4;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    margin: 5px 0;
    padding: 10px 10px;
    height: 30px;
    width: 800px;
    border-radius: 4px;
    border: none;
  }

  button {
    height: 30px;
    padding: 3px 3px;
    margin-left: 5px;
    border-radius: 4px;
    border: none;
    background: #fff;
    color: black;

    svg {
      align-self: center;
    }
  }
`;

export const Header = styled.header`
  padding: 15px 15px;
  height: 50px;
  width: auto;
  background: rgba(40, 42, 54, 0.2);

  h3 {
    color: #fff;
    font-weight: bold;
  }
`;

export const ChatList = styled.ul`
  padding: 20px 20px;
  height: 510px;

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

export const Message = styled.li`
  height: 50px;
  padding: 10px 10px;
  border-radius: 4px;

  & + li {
    margin-top: 10px;
  }

  background: ${props =>
    props.direction === 'incoming' ? '#434f75' : '#596a9b'};

  p {
    color: #fff;
  }
`;
