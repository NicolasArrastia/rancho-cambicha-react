import React from 'react'

// Styled
import { CopyRight, Developer, FooterCont, Icon, Social } from './styled'

export default function Footer() {
    return (
        <FooterCont>
            <Social>

                <Icon>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ranchocambicha">
                        <img src="./img/instagram.svg" alt="instagram" />
                    </a>
                </Icon>

                <Icon>
                    <a target="_blank" rel="noreferrer" href="https://es-la.facebook.com/ranchocambicha74">
                        <img src="./img/facebook.png" alt="facebook" />
                    </a>
                </Icon>

                <Icon>
                    <a target="_blank" rel="noreferrer" href="https://www.airbnb.com.ar/rooms/39398457">
                        <img src="./img/airbnb.svg" alt="airbnb" />
                    </a>
                </Icon>

                <Icon>
                    <a target="_blank" rel="noreferrer" href="https://www.booking.com/hotel/ar/rancho-cambicha-hostel-de-campo.es-ar.html">
                        <img src="./img/booking.svg" alt="booking" />
                    </a>
                </Icon>

            </Social>
            <Developer href="/galeria">Desarrollador Web</Developer>
            <CopyRight>
                © {new Date().getFullYear()} | Rancho Cambicha - Ruta 74 Kilómetro 23
            </CopyRight>
        </FooterCont>
    )
}
