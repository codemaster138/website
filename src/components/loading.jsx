import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
    position: relative;
    padding: 10px;

    i {
        width: 50px;
        height: 25px;
        box-sizing: border-box;
        border: solid 6px #2172b8;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        border-bottom: none;
        display: block;
        position: absolute;
        top: 50%;
        bottom: 50%;
        transform-origin: bottom center;
        transform: translate(-50%, -100%) rotate(0deg);
        animation: rotate 1s linear infinite;

        &:nth-child(2) {
            width: 70px;
            height: 35px;
            border-top-left-radius: 70px;
            border-top-right-radius: 70px;
            animation-duration: 1.2s;
            border-color: #18a39b;
        }

        &:nth-child(3) {
            width: 90px;
            height: 45px;
            border-top-left-radius: 90px;
            border-top-right-radius: 90px;
            animation-duration: 1.4s;
            border-color: #82c545;
        }

        &:nth-child(4) {
            width: 110px;
            height: 55px;
            border-top-left-radius: 110px;
            border-top-right-radius: 110px;
            animation-duration: 1.6s;
            border-color: #f8b739;
        }

        &:nth-child(5) {
            width: 130px;
            height: 65px;
            border-top-left-radius: 130px;
            border-top-right-radius: 130px;
            animation-duration: 1.8s;
            border-color: #f06045;
        }

        &:nth-child(6) {
            width: 150px;
            height: 75px;
            border-top-left-radius: 150px;
            border-top-right-radius: 150px;
            animation-duration: 2s;
            border-color: #ed2861;
        }

        &:nth-child(7) {
            width: 170px;
            height: 85px;
            border-top-left-radius: 170px;
            border-top-right-radius: 170px;
            animation-duration: 2.2s;
            border-color: #c12680;
        }

        &:nth-child(8) {
            width: 190px;
            height: 95px;
            border-top-left-radius: 190px;
            border-top-right-radius: 190px;
            animation-duration: 2.4s;
            border-color: #5d3191;
        }
    }
`;

export default function LoadingAnimation({ amount }) {
    return (
        <LoaderContainer>
            { Array(amount || 8).fill(null).map((_, i) => (<i key={i}></i>)) }
        </LoaderContainer>
    );
}