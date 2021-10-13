import styled from "styled-components";

// Colors
import * as color from '../../colors'

export const Flex = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const Photo = styled.img`
    width: clamp(300px, 50vw, 350px);
    height: clamp(300px, 50vw, 350px);
    margin: 10px;

    border: 15px solid ${color.white};
    background-color: ${color.black_2};
    object-fit: cover;
`;