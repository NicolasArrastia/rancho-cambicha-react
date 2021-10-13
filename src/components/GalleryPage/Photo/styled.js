import styled from "styled-components";

// Colors
import * as color from '../../colors'

export const PhotoCont = styled.div`
    cursor: pointer;
    
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 300px;
    height: 300px;
    margin: 20px 5px;
    border-radius: 5px;
    overflow: hidden;

    box-shadow: 0 0 5px 0 black;
    background-color: #ddd;
`;

export const ImgCont = styled.div`
    width: 100%;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* object-fit: contain; */
`;

export const Dark = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    
    /* display: flex; */
    display: none;

    width: 100%;
    height: 100%;

    background-color: ${color.black_1};
`;