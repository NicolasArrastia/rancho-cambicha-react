import styled from "styled-components";

import * as color from '../colors'

export const NotFoundCont = styled.div`
    /* width: 100%; */
    `

export const Title = styled.div`
    font-size: clamp(8rem,15vw,15rem);
    font-weight: bold;
    text-align: center;
    color: ${color.black_2};
`;
export const Subtitle = styled.h2`
    font-size: 2rem;
    text-align: center;
    color: ${color.black_2};
    a {
        color: ${color.blue_2};
        font-size: 2rem;
    }
`;