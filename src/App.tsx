import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  align: center;
`;


const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLink = styled.div`
  color: #61dafb;
`;

const WelcomeMessage = styled.span`
  line-height: 6vh;
`;

function App() {
  return (
    <Main>
      <AppHeader>
        <WelcomeMessage>Welcome!</WelcomeMessage>
        <WelcomeMessage>欢迎光临!</WelcomeMessage>
        <WelcomeMessage>ようこそ!</WelcomeMessage>
      </AppHeader>
    </Main>
  );
}

export default App;
