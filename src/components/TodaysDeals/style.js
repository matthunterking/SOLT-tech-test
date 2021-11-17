import styled from 'styled-components';

export const Container = styled.div`
 background-color: #f4f4f4;
 padding: 1rem;
`;

export const ShowsContainer = styled.div`
 display: grid;
 grid-template-columns: 1fr;

 @media (min-width: 768px) {
  grid-template-columns: 1fr 1fr;
 }

 @media (min-width: 1024px) {
  grid-template-columns: 1fr 1fr 1fr;
 }
`;
