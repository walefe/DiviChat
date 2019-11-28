import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { Container, ChatList, Conversation } from './styles';

export default function MenuChat() {
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    async function loadConversation() {
      const response = await api.get('conversation');

      setConversation(response.data);
    }

    loadConversation();
  }, []);

  function handleClick() {}

  return (
    <Container>
      <ChatList>
        <h1>Conversas</h1>
        {conversation.map(conversate => (
          <Conversation key={conversate._id} onClick={handleClick}>
            <img
              src="https://api.adorable.io/avatars/40/abott@adorable.png"
              alt="Avatar"
            />
            <p>{conversate.name}</p>
          </Conversation>
        ))}
      </ChatList>
    </Container>
  );
}
