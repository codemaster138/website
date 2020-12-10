import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../../public/logo.svg';
import github from '../../public/brand/github.svg';
import hotdog from '../../public/menu.svg';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  position: fixed;
  top: 28px;
  left: calc(var(--margin) / 2);
  width: calc(100% - var(--margin));

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  nav {
    display: none;
    &.open {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      min-height: 300px;
      min-width: 200px;
      box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      border: 1px solid #ccc;
      position: fixed;
      top: 68px;
      right: 20px;
      z-index: 1000;
      background: #fff;
    }
  }

  a:not(.gh) {
    color: var(--dark);
    text-decoration: none;
    margin: 10px 22px;

    &:hover {
      text-decoration: underline;
    }
  }

  img#hotdog {
    margin-left: 10px;
    cursor: pointer;
  }

  @media screen and (min-width: 650px) {
    nav {
      display: block;
    }
    img#hotdog {
      display: none;
    }
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleResize() {
    if (window.innerWidth > 650) setMenuOpen(false);
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });
  return (
    <StyledHeader forcedMenuOpen={menuOpen}>
      <img src={logo}/>
      <nav className={menuOpen ? 'open' : undefined}>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <a href="https://github.com/codemaster138">GitHub</a>
      </nav>
      <div>
        <a className="gh" href="https://github.com/codemaster138">
          <img src={github}/>
        </a>
        <img id="hotdog" src={hotdog} width="30px" height="30px" onClick={() => {
          setMenuOpen(!menuOpen);
        }}/>
      </div>
    </StyledHeader>
  )
}