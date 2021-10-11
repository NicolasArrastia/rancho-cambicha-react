import styled from "styled-components";

export const HeroCont = styled.div`
    position: relative;
    top: 0;
    left: 0;

    width: 100%;
    height: 100vh;
`;

export const HeroImg = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
`;

export const HeroBlack = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    padding: 0 5%;

    box-shadow: inset 0 80px 50px -50px black;

    background-color: #0008;
`;

export const HeroTitle = styled.h1`
    margin-bottom: 10px;
    /* font-size: 4rem; */
    font-size: clamp(3rem,5vw,5rem);
    text-align: center;
    color: #e5e5e5;
    text-transform: uppercase;
`;

export const HeroSubtitle = styled.h2`
    font-size: 3rem;
    font-size: clamp(2rem,3.5vw,3rem);
    text-align: center;
    color: #e5e5e5;
    font-style: italic;
`;