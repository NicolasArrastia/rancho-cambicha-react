import React from 'react'

// Styled
import { CopyRight, Developer, FooterCont, Icon, Social } from './styled'

export default function Footer() {
    return (
        <FooterCont>
            <Social>

                <Icon href="/facebook">
                    <img src="./img/facebook.png" alt="facebook" />
                </Icon>

                <Icon href="/booking">
                    <img src="./img/booking.svg" alt="booking" />
                </Icon>

                <Icon href="/instagram">
                    <img src="./img/instagram.svg" alt="instagram" />
                </Icon>

            </Social>
            <Developer href="/galeria">Desarrollador Web</Developer>
            <CopyRight>
                © {new Date().getFullYear()} | Rancho Cambicha - Ruta 74 Kilómetro 23
            </CopyRight>
        </FooterCont>
    )
}
