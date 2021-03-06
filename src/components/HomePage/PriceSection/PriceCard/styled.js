import styled from "styled-components";

import * as color from '../../../colors'

export const Container = styled.div`
    width: 250px;
    margin: 0 10px 30px;
    overflow: hidden;

    border-radius: 10px;
    background-color: ${color.blue_1};
    color: ${color.black_4};
    box-shadow: 0 0 15px 0 ${color.black_4};
`;

export const Name = styled.div`
    padding: 5px 5%;

    background-color: ${color.orange_3};
    
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
`;

export const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px 5%;

    background-color: ${color.orange_2};

    text-align: center;
    font-size: 5rem;
    font-weight: bold;
    &::before, &::after{
        font-size: 2rem;
    }
    &::before{
        content: 'AR$';
        align-self: flex-start;
    }
    &::after{
        content: '/noche';
        align-self: flex-end;
    }
`;

export const Details = styled.ul`
    position: relative;

    padding: 5px;

    background-color: white;
`;

export const DetailItem = styled.li`
    margin: 5px;
`;

export const LinkButton = styled.a`
    display: block;
    
    padding: 5px 5%;

    background-color: ${color.orange_3};

    color: ${color.black_4};
    font-size: 2rem;
    text-align: center;
    transition: 0.3s ease;

    &:hover{
        background-color: ${color.orange_1};
        /* transition: 0.3s ease; */
    }
`;