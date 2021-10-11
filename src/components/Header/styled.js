import styled, { css, keyframes } from "styled-components";

// Colors
import * as color from '../colors'

export const HeaderCont = styled.header`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 10px 5%;

    background-color: ${color.black_4};

    ${({homepage}) => homepage && css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background-color: transparent;
        z-index: 1000;
    `}
`;

const LogoAnim = keyframes`
    0%{
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(-12deg);
    }
    50%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(-12deg);
    }
`;

export const LogoCont = styled.a`
    display: flex;
    align-items: center;
    &:hover{
        >img{
            transform: rotate(-12deg);
            animation: ${LogoAnim} .5s ease;
        }
    }
    >img{
        border-radius: 5px;
        transition: .2s ease;
    }
`;

export const LogoImg = styled.img`
    width: 40px;
`;

export const LogoText = styled.span`
    color: ${color.white};
    font-size: 2.4rem;
    margin-left: 15px;

    @media (max-width: 576px){
        display:none;
    }
`;

export const HeaderNav = styled.nav`
    @media(max-width:576px){
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        transform: translateY(50%);
    }
    ${({state}) => state || css`
        transform: translateY(0%);
    `}

    /*  */
    border: 1px dashed red;
`;
export const NavUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    @media (max-width: 576px){
        flex-direction: column;
        >li:not(:last-child){
            margin-bottom: 10px;
        }
    }
    /*  */
    /* border: 1px dashed blue; */
`;
export const NavItem = styled.li`
    margin-left: 15px;
    cursor: pointer;

    &:hover{
        &::after{
            width: 100%;
            transition: 0.5s ease;
        }
    }
    &::after{
        content: '';
        display: block;
        height: 1px;
        width: 0%;
        margin: 2px auto 0;
        background-color: ${color.white};
        transition: 0.2s ease;
    }
    /*  */
    /* border: 1px dashed white; */
`;

export const StyledA = styled.a`
    font-size: 2rem;
    color: ${color.white};
`;

export const MenuCont = styled.div`
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 40px;
    height: 40px;
    padding: 8px;

    /* border: 1px solid red; */
    border-radius: 50%;

    transition: .4s ease-out;
    :active{
        background-color: ${color.black_2};
        transition: .2s ease-out;
    }


`;

export const MenuBar = styled.div`
    width: 100%;
    height: 20%;
    background-color: ${color.white};
    border-radius: 100px;
`;