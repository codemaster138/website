import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainContent = styled.div`
  width: calc(100vw - var(--margin));
  margin-left: calc(var(--margin) / 2);
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function About() {
  return (
    <MainContent>
      <div>
        <h1>About Me</h1>
        <p>I'm a <b>full-stack</b> web &amp; software developer from <b>Bavaria, Germany</b>. I started programming in <a href="https://scratch.mit.edu">scratch</a>,
        and have since begun to build <b>full-scale websites and webapps</b> using react.js, next.js, node.js, typescript, etc.</p>
      </div>
    </MainContent>
  )
}