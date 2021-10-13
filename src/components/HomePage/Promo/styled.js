import styled from "styled-components";

// Colors
import * as color from '../../colors'

export const PromoSect = styled.section`
    width: 100%;
    padding: 15px 5%;
    /* border: 1px solid red; */
`;

export const PromoCont = styled.div`
    width: clamp(400px, 75%, 600px);
    margin: 10px auto;
    overflow: hidden;
    
    border: 5px solid ${color.watergreen_4};
    border-radius: 20px 0 20px 0;
    background-color: ${color.watergreen_2};

    @media (max-width: 576px){
        width: 100%;
    }

    >*{
        color: white;
    }
`;

export const PromoTitle = styled.h2`
    width: 100%;
    padding: 5px 5%;
    
    background-color: ${color.watergreen_3};

    text-align: center;
    color: ${color.white};
    font-size: 2.5rem;
`;

export const PromoDetail = styled.p`
    width: 100%;
    padding: 5px 5%;
    font-size: 1.8rem;
    text-align: center;
`;
export const PromoSubtitle = styled.span`
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 1.4rem;
    color: ${color.watergreen_1};
    padding: 5px 5%;
`;