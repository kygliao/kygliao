import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  align: center;
`;

const AppBody = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const WelcomeSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 60vh;
`;

const LinkSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 40vh;
`;

const WelcomeMessage = styled.span`
  line-height: 6vh;
`;

const Link = styled.a`
  color: #61dafb;
`;

function App() {
  return (
    <Main>
      <AppBody>
        <WelcomeSection>
          <WelcomeMessage>Welcome!</WelcomeMessage>
          <WelcomeMessage>欢迎光临!</WelcomeMessage>
          <WelcomeMessage>ようこそ!</WelcomeMessage>
        </WelcomeSection>
        <LinkSection>
          <Link href="https://www.linkedin.com/in/kaiying-liao-b6b05529">LinkedIn</Link>
          <br />
          Where I work:
          <Link href="https://www.trialspark.com/">TrialSpark</Link>
        </LinkSection>
      </AppBody>
    </Main>
  );
}

export default App;
