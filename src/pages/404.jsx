import React from 'react';
import styled from 'styled-components';

const Styled404 = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-weight: 600;
    margin-right: 10px;
    padding-right: 10px;
    border-right: 1px solid #888;
  }
`;

export default function Error404() {
  return <Styled404>
    <p><span>Error 404</span>This page doesn't exist.</p>
  </Styled404>
}