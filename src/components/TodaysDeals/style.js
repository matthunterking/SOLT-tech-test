import styled from 'styled-components';
import { breakpoints } from '../../environment';

export const Container = styled.div`
 background-color: #f4f4f4;
 padding: 1rem;
`;

export const ShowsContainer = styled.div`
 display: grid;
 grid-template-columns: 1fr;

 @media (${breakpoints.tablet}) {
  grid-template-columns: 1fr 1fr;
 }

 @media (${breakpoints.desktop}) {
  grid-template-columns: 1fr 1fr 1fr;
 }
`;
