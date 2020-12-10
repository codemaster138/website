import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import caret from '../../public/arrow/chevron_right.svg';

const StyledButton = styled.button`
  font-size: 18px;
  color: var(--primary);
  font-weight: 500;
  background: transparent;
  border: none;
  padding: 16px 24px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  font-family: 'Raleway', sans-serif;
  cursor: pointer;
  transition: 300ms ease-in-out;
  margin-right: 20px;
  margin-bottom: 20px;

  &.primary {
    color: ${props => props.fgColor || '#fff'};
    background: ${props => props.color || 'var(--primary)'};

    &:hover {
      transform: translateY(-2.5px);
      background: ${props => props.hovColor || 'var(--primary-shade)'};
    }
  }

  &.link {
    &:focus {
      outline: none;
    }
  }

  .decoCaret {
    margin-left: 13px;
    transition: 300ms ease-in-out;
  }

  &:hover {
    .decoCaret {
      transform: translateX(5px);
    }
    box-shadow: 0px 4px 14px rgba(0,0,0,0.15)
  }
`;

export default function Button({ children, chevron, href, onClick, primary, color, fgColor, hovColor, offpageHref }) {
  const history = useHistory();
  const onclick = onClick || (href ? (() => {
    history.push(href);
  }) : (offpageHref ? (() => {
    location.href = offpageHref;
  }) : undefined));
  return (
    <StyledButton color={color} hovColor={hovColor} fgColor={fgColor} className={((href || offpageHref) ? 'link ' : '') + (primary ? 'primary' : '')} onClick={onclick}>
      { children }
      { chevron ? <img className="decoCaret" src={caret}/> : null}
    </StyledButton>
  )
}