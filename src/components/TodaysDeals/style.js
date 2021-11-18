import styled from 'styled-components';
import { breakpoints } from '../../environment';

export const Heading = styled.h1`
 padding: 1rem;
`;

export const Container = styled.div`
 background-color: #f4f4f4;
`;

export const ShowsContainer = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 justify-items: center;
 align-items: center;
 width: 100%;

 @media (${breakpoints.tablet}) {
  grid-template-columns: 1fr 1fr;
 }

 @media (${breakpoints.desktop}) {
  grid-template-columns: 1fr 1fr 1fr;
 }
`;
