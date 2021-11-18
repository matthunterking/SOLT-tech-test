import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: #f4f4f4;
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const Spinner = styled.div`
 border-radius: 100%;
 border-top: 30px solid #f28a42;
 border-bottom: 30px solid #d22e31;
 border-left: 30px solid transparent;
 border-right: 30px solid transparent;
 animation: ${rotate} 2s linear infinite;
`;


