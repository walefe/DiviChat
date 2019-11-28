import React from 'react';

import { useConversation } from '~/context/Conversation';
import { Container, Header, ChatList, Message } from './styles';

export default function Chat() {
  const { messages } = useConversation();

  return (
    <Container>
      <Header>
        <h3>{messages.name}</h3>
      </Header>
      <ChatList>
        {messages
          ? messages.messages.map(message => (
              <Message direction={message.direction}>
                <p>{message.value}</p>
              </Message>
            ))
          : 'Aguardando menssagens!'}
      </ChatList>
      <input type="text" placeholder="Send a message.." />
    </Container>
  );
}
