import React from 'react'

import * as HP from '../styled'
import * as SC from './styled'

export default function SocialNetworks() {
    return (
        <HP.Section>
            <HP.Title>No olvides nuestras redes sociales</HP.Title>
            <SC.FlexCont>
                <li>
                    <a href="https://www.instagram.com/ranchocambicha">
                        <img src="./img/instagram.svg" alt="ig"/>
                    </a>
                </li>

                <li>
                    <a href="https://es-la.facebook.com/ranchocambicha74">
                        <img src="./img/facebook.png" alt="facebook"/>
                    </a>
                </li>

                <li>
                    <a href="https://www.airbnb.com.ar/rooms/39398457">
                        <img src="./img/airbnb.svg" alt="airbnb"/>
                    </a>
                </li>

                <li>
                    <a href="https://www.booking.com/hotel/ar/rancho-cambicha-hostel-de-campo.es-ar.html">
                        <img src="./img/booking.svg" alt="booking"/>
                    </a>
                </li>

            </SC.FlexCont>
        </HP.Section>
    )
}
