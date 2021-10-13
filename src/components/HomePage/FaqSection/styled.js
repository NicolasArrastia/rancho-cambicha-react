import styled from 'styled-components'

// Colors
import * as color from '../../colors'

export const List = styled.ul`
    /* border: 1px solid red; */
`;

export const Item = styled.li`
    position: relative;

    padding: 15px 20px;
    margin: 50px 0;
    border-radius: 15px;

    box-shadow: 0 0 10px 0 black;
`;

export const NumberCont = styled.div`
    position: absolute;
    top: -25px;
    left: -25px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-top-left-radius: 0;

    background: linear-gradient(135deg, ${color.watergreen_2}, ${color.watergreen_1});
    box-shadow: 0 0 10px 0 black;

    font-size: 3rem;
    font-weight: bold;
`;

export const Question = styled.p`
    font-size: 2.5rem;
    text-decoration: underline;
`;