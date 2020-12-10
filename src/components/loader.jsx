import React from 'react';
import LoadingAnimation from './loading';
import styled from 'styled-components';

const LoadingSpinner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function Loader({ rings }) {
    return (
        <LoadingSpinner>
            <LoadingAnimation amount={rings}/>
        </LoadingSpinner>
    );
}