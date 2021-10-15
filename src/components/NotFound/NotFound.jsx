import React from 'react'

// Styled
import { NotFoundCont, Title, Subtitle } from './styled'

export default function NotFound() {
    return (
        <NotFoundCont>
            <Title>404</Title>
            <Subtitle>La dirección a la que quieres acceder no existe :c</Subtitle>
            <Subtitle>Puedes volver a la página de inicio <a href="/">aquí</a></Subtitle>
        </NotFoundCont>
    )
}
