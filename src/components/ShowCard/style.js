import styled from 'styled-components';

export const Container = styled.div`
 border-radius: 10px;
 overflow: hidden;
 text-align: center;
 margin: 2rem;
 position: relative;
`;

export const SoldOut = styled.div`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(222,222,222,0.5)
`;

export const HeroImage = styled.img`
 background-image: url(${({ imageUrl }) => imageUrl});
 background-size: cover;
 background-position: center;
 height: 250px;
 width: 100%;
 filter: ${({ isSoldOut }) => isSoldOut ? 'grayscale(1)' : 'none'};
`;

export const ShowTitle = styled.h2`

`;

export const ShowSubTitle = styled.h3`

`;
