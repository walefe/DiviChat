import React from 'react';

import ConversationProvider from '~/context/Conversation';

import Dashboard from '~/pages/Dashboard';
import GlobalStyle from '~/styles/global';

function App() {
  return (
    <ConversationProvider>
      <Dashboard />
      <GlobalStyle />
    </ConversationProvider>
  );
}

export default App;
