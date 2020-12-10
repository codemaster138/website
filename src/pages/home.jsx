import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';
import deco from '../../public/deco1.svg';

const MainContent = styled.div`
  width: calc(100vw - var(--margin));
  margin-left: calc(var(--margin) / 2);
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const ContentElement = styled.div`
  width: 100%;
  margin-top: 20px;

  @media screen and (min-width: 900px) {
    max-width: calc(50% - 10px);
  }

  .buttons {
    margin-top: 30px;
    width: 100%;
    height: 50px;
  }
`;

export default function Home() {
  return (
    <MainContent>
      <ContentRow>
        <ContentElement>
          <h1>Hey, I'm Jake</h1>
          <p>I’m a full-stack Web Developer with experience in React, Next.js, Node.js, TypeScript, etc.</p>
          <div className="buttons">
            <Button href="/projects" primary>My Projects</Button>
            <Button href="/about" chevron>About me</Button>
          </div>
        </ContentElement>
        <ContentElement>
          <img src={deco} alt=""/>
        </ContentElement>
      </ContentRow>
    </MainContent>
  )
}