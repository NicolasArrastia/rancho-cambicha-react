import React, { useState } from 'react'

// Styled
import { HeaderCont, HeaderNav, LogoCont, LogoImg, LogoText, MenuBar, MenuCont, NavItem, NavUl, StyledA } from './styled'

export default function Header(props) {

    const [menu, setMenu] = useState(false)

    function toggleMenu (){
        setMenu(!menu)
    }

    return (
        <HeaderCont {...props}>
            <LogoCont href="/">
                <LogoImg src="./img/logo.svg" alt="Rancho Cambicha logo" />
                <LogoText>Rancho Cambicha</LogoText>
            </LogoCont>

            <MenuCont state={menu} onClick={ ()=> toggleMenu()}>
                <MenuBar/>
                <MenuBar/>
                <MenuBar/>
            </MenuCont>

            <HeaderNav state={menu}>
                <NavUl {...props} state={menu}>
                    <NavItem>
                        <StyledA href="/">Inicio</StyledA>
                    </NavItem>
                    <NavItem>
                        <StyledA href="https://photos.app.goo.gl/7uZvjzVafkNFjGdt9">Galería</StyledA>
                    </NavItem>
                    <NavItem>
                        <StyledA href="/rancho-deli">Rancho Deli</StyledA>
                    </NavItem>
                </NavUl>
            </HeaderNav>
        </HeaderCont>
    )
}
