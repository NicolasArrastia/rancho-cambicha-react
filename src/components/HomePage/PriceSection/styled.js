import styled from 'styled-components'

// Colors
import * as color from '../../colors'

export const Title = styled.h2`
    font-size: 4rem;
    text-align: center;
    margin-bottom: 40px;
    color: ${color.black_4};
`;

export const FlexCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
`;


export const Offer = styled.div`
    width: clamp(300px, 90%, 1000px);
    margin: 10px auto;
    overflow: hidden;
    
    border: 10px solid ${color.orange_3};
    border-radius: 20px;
    background-color: ${color.orange_2};

    @media (max-width: 576px){
        width: 100%;
    }
`;

export const OfferTitle = styled.h3`
    width: 100%;
    padding: 5px 5%;

    background-color: ${color.orange_3};

    text-align: center;
    font-size: 2.5rem;
`;

export const OfferDesc = styled.p`
    width: 100%;
    padding: 10px 5%;
    font-size: 1.8rem;
    text-align: center;
`;

export const OfferLittle = styled.span`
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 1.4rem;
    color: ${color.orange_5};
    padding: 5px 5%;
`;