import styled from 'styled-components'

// Colors
import * as color from '../colors'

export const GalleryCont = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 20px 10px;
`;

export const Img = styled.img`
    cursor: pointer;

    width: 300px;
    height: 200px;
    margin: 10px;
    border-radius: 5px;

    box-shadow: 0 0 5px 0 black;
    background-color: ${color.black_1};

    object-fit: cover;
`;