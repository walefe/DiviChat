import React, { useEffect } from 'react';

import { FaWhatsapp } from 'react-icons/fa';

import api from '~/services/api';
import { useConversation } from '~/context/Conversation';

import { Container, SideBar, Conversation } from './styles';

export default function MenuChat() {
  const { conversation, setConversation, setMessages } = useConversation();

  useEffect(() => {
    async function loadConversation() {
      const response = await api.get('conversation');

      setConversation(response.data);
    }

    loadConversation();
  }, [setConversation]);

  async function handleClick(id) {
    const response = await api.get(`conversation/${id}`);

    setMessages(response.data);
  }

  return (
    <Container>
      <h1>
        Conversas
        <FaWhatsapp color="#FFF" size={30} />
      </h1>
      <SideBar>
        {conversation.map(conversate => (
          <Conversation
            key={conversate._id}
            onClick={() => handleClick(conversate._id)}
          >
            <img
              src="https://api.adorable.io/avatars/40/abott@adorable.png"
              alt="Avatar"
            />
            <p>{conversate.name}</p>
          </Conversation>
        ))}
      </SideBar>
    </Container>
  );
}
