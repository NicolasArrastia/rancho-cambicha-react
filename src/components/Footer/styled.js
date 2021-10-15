import styled from "styled-components";

// Colors
import * as color from '../colors'

export const FooterCont = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 160px;
    padding: 15px 5%;

    background-color: ${color.black_4};
    color: ${color.white};
`;

export const Social = styled.ul`
    display: flex;
    justify-content: center;

    /* border: 1px solid white; */
`;

export const Icon = styled.li`
    width: 40px;
    height: 40px;
    /* border: 1px solid blue; */
    margin: 10px 20px;
    border-radius: 5px;
    /* overflow: hidden; */

    a,img{
        width: 100%;
        height: 100%;
    }
`;

export const Developer = styled.a`

    padding: 10px;
    
    text-align: center;
    color: ${color.white};

    border: 1px dotted red;
`;

export const CopyRight = styled.div`
    color: ${color.black_2};
    text-align: center;
`;