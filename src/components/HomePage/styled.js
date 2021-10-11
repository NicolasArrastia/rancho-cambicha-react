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