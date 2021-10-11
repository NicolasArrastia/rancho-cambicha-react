import styled from "styled-components";

export const PhotoCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 black;
    background-color: #ddd;

    /* Masonry Item */
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 10px;
    break-inside: avoid;
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