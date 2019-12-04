import React, { useState } from 'react';

import { MdSend } from 'react-icons/md';

import { useConversation } from '~/context/Conversation';
import { Container, Header, ChatList, Message } from './styles';

export default function Chat() {
  const { messages } = useConversation();
  const [newMessage] = useState([]);

  return (
    <Container>
      <Header>
        <h3>{messages.name}</h3>
      </Header>
      <ChatList>
        {messages
          ? messages.messages.map(message => (
              <Message key={message._id} direction={message.direction}>
                <p>{message.value}</p>
              </Message>
            ))
          : 'Aguardando menssagens!'}
      </ChatList>
      <form>
        <input type="text" placeholder="Send a message.." value={newMessage} />
        <button type="submit">
          <MdSend size={20} />
        </button>
      </form>
    </Container>
  );
}
