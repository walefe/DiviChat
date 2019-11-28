import React, { createContext, useState, useContext } from 'react';

const ConversationContext = createContext();

export default function ConversationProvider({ children }) {
  const [conversation, setConversation] = useState([]);
  const [messages, setMessages] = useState('');
  return (
    <ConversationContext.Provider
      value={{ conversation, setConversation, messages, setMessages }}
    >
      {children}
    </ConversationContext.Provider>
  );
}

export function useConversation() {
  const context = useContext(ConversationContext);
  const { conversation, setConversation, messages, setMessages } = context;
  return { conversation, setConversation, messages, setMessages };
}
