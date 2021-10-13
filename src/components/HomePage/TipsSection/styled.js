import styled from 'styled-components'

// Colors
import * as color from '../../colors'

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;

    width: 300px;
    /* height: 200px; */
    padding: 20px 10px;
    margin: 10px;

    border: 5px solid ${color.orange_5};
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;

    background-color: ${color.orange_2};

    p{
        font-size: 2rem;
    }
`;