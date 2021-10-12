import styled from 'styled-components'

// Colors
import * as color from '../../colors'

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 1px solid blue;
`;

export const Item = styled.li`
    width: 300px;
    height: 200px;
    padding: 20px;
    margin: 20px auto;

    border: 5px solid ${color.green_4};
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;

    background-color: ${color.green_3};
`;