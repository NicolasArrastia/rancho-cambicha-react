import styled from 'styled-components';

// Colors
import * as color from '../colors'

export const HomeCont = styled.main`
    background-color: ${color.white};
    > section{
        padding: 15px 5%;
        &:nth-of-type(2n){
            background-color: ${color.black_1};
        }
    }
`;


// Para las secciones
export const Section = styled.section`
    padding: 15px 5%;
    color: ${color.black_4};
    &:nth-of-type(2n){
        background-color: ${color.black_1};
    }
`;

export const Title = styled.h2`
    font-size: 4rem;
    text-align: center;
    margin-bottom: 20px;
`;

export const Text = styled.p`
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 10px;
`;