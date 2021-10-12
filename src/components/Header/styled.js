import styled, { css, keyframes } from "styled-components";

// Colors
import * as color from '../colors'

export const HeaderCont = styled.header`
    position: relative;

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
        top: 100%;
        left: 0;
        z-index: 1000;

        width: 100%;
        /* overflow: hidden; */
    }

    /*  */
    /* border: 1px dashed red; */
`;

function menuCSS(){
    let styles = ''
    for(let i =0; i<=3 ; i++){
        styles += `
        li:nth-child(${i}){
            opacity: 1;
            transform: translateY(0px);
            transition: 0.2s ease ${i*0.1+0.5}s;
            visibility: visible;
        }
        `
    }
    return css`${styles}`
}
function closedMenuCSS(){
    let styles = ''
    for(let i =0; i<=3 ; i++){
        styles += `
        li:nth-child(${i}){
            transition: 0.2s ease ${i*0.1}s;
        }
        `
    }
    return css`${styles}`
}

export const NavUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 100%;

    @media (max-width: 576px){
        flex-direction: column;
        
        /* height: 0; */
        /* min-height: 0%; */
        /* height: 100%; */
        
        >li:not(:last-child){
            margin-bottom: 10px;
        }
        li{
            transform: translateY(-10px);
            opacity: 0;
            transition: .2s ease;
            visibility: hidden;
        }
        ${closedMenuCSS()}
        transition: 0.5s ease 0.5s;
        
        /*  */
        /* border: 1px solid blue; */
    }
    
    ${({state}) => state && css`
        padding: 15px 5%;
        border-radius: 0 0 15px 15px;
        &&{
            background-color: ${({homepage})=> homepage ? `transparent` : `${color.black_3}`};
            transition: 0.5s ease 0.2s;
        }
        ${menuCSS()}
    `}
    /*  */
    /* border: 1px dashed blue; */
`;
export const NavItem = styled.li`
    cursor: pointer;
    
    margin-left: 25px;
    
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
    visibility: hidden;

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
    @media (max-width: 576px){
        visibility: visible;
    }
    
    ${({state}) => state && css`
        transform: rotate(45deg);
    `}
`;

export const MenuBar = styled.div`
    width: 100%;
    height: 20%;
    background-color: ${color.white};
    border-radius: 100px;
`;