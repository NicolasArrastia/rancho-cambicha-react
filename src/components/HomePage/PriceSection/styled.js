import styled from 'styled-components'

// Colors
import * as color from '../../colors'

export const PriceSect = styled.section`
    /* border: 1px solid blue; */
`;

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