import styled from 'styled-components'

// Colors
import * as color from '../colors'

export const CommingSoon = styled.div`
    width: clamp(300px, 75%, 800px);
    padding: 15px;
    margin: 50px auto;

    border: 4px solid ${color.black_3};
    border-radius: 15px;

    background-color: ${color.black_2};

    font-weight: bold;
    text-align: center;
`;