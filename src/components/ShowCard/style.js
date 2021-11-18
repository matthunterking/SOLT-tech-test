import styled from 'styled-components';
import { breakpoints } from '../../environment';

export const Container = styled.div`
 border-radius: 10px;
 overflow: hidden;
 text-align: center;
 margin: 2rem;
 position: relative;
 background-color: #FFFFFF;
 width: 300px;

 @media(${breakpoints.desktop}) {
  width: 400px
 }
`;

export const SoldOut = styled.div`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(222,222,222,0.5);
`;

export const HeroImage = styled.img`
 height: 150px;
 width: 100%;
 object-fit: cover;
 filter: ${({ isSoldOut }) => isSoldOut ? 'grayscale(1)' : 'none'};
 
 @media(${breakpoints.desktop}) {
  height: 200px;
 }
`;

export const ShowTitle = styled.h2`
 font-size: 20px;
 padding: 0.25rem;
`;

export const ShowSubTitle = styled.h3`
 font-size: 12px;
 color: #757575;
 padding-bottom: 0.25rem;
`;
