import React from 'react';

import Chat from '~/components/Chat';
import MenuChat from '~/components/MenuChat';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <MenuChat />
      <Chat />
    </Container>
  );
}
