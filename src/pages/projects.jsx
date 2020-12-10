import React from 'react';
import styled from 'styled-components';
import eonImg from '../../public/projects/eonjs.svg';
import inertImg from '../../public/projects/inertjs.svg';
import Button from '../components/button';

const MainContent = styled.div`
  width: calc(100vw - var(--margin));
  margin-left: calc(var(--margin) / 2);
  position: relative;
  margin-top: 270px;
`;

const ContentRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row wrap;
  margin-bottom: 100px;
`;

const CoverImg = styled.img`
  max-width: 100%;
  width: 100%;
  @media screen and (min-width: 600px) {
    width: 50%;
  }
`;

const TextContent = styled.div`
  height: 100%;
  width: 100%;

  h1 {
    margin-top: 0;
    font-size: 36px;
  }

  p {
    font-size: 18px;
  }

  @media screen and (min-width: 600px) {
    width: 50%;
  }
`;

export default function Projects() {
  return (
    <MainContent data-scrollbar="true">
      <ContentRow>
        <CoverImg src={eonImg}/>
        <TextContent>
          <h1>Eon.js</h1>
          <p>Eon.js is a simple framework for creating web services and APIs in node.js.</p>
          <div className="buttons">
            <Button offpageHref="https://eon.js.org" color="#1FFF93" hovColor="#1FFF93" fgColor="var(--dark)" primary>View Website</Button>
            <Button offpageHref="https://github.com/eon-web/eon" chevron>Code on GitHub</Button>
          </div>
        </TextContent>
      </ContentRow>
      <ContentRow>
        <CoverImg src={inertImg}/>
        <TextContent>
          <h1>Inert</h1>
          <p>Inert is a simple static site generator designed for blogs and documentation sites.</p>
          <div className="buttons">
            <Button offpageHref="https://inert.js.org" color="#30c3f0" hovColor="#30c3f0" fgColor="var(--dark)" primary>View Website</Button>
            <Button offpageHref="https://github.com/codemaster138/inert" chevron>Code on GitHub</Button>
          </div>
        </TextContent>
      </ContentRow>
    </MainContent>
  )
}