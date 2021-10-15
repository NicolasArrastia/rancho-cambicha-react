import React from 'react'

// Styled
import * as HP from '../styled'
import * as SC from './styled'

export default function FaqSection() {
    return (
        <HP.Section style={{padding:'15px 10%'}}>
            <HP.Title>Preguntas Frecuentes</HP.Title>
            <SC.List>
                <SC.Item>
                    <SC.NumberCont>1</SC.NumberCont>
                    <SC.Question>¿Dónde estámos?</SC.Question>
                        <SC.Answer>
                            Nos encontramos en General Juan Madariaga, ruta 74 kilometro 23, en la provincia de Buenos Aires, Argentina. A 316 Km del obelisco y 290 Km de la ciudad de La Plata.
                            <iframe title="nuestra ubicación" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d815501.7679798031!2d-57.66128213437501!3d-37.0204403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959b794a561f5a27%3A0x8f2fb7134cd1bff0!2sRancho%20Cambicha!5e0!3m2!1ses-419!2sar!4v1608408842309!5m2!1ses-419!2sar" allowFullScreen="allowfullscreen" aria-hidden="false" tabIndex="0" width="600" height="450" frameBorder="0"></iframe>
                        </SC.Answer>
                </SC.Item>
                
                <SC.Item>
                    <SC.NumberCont>2</SC.NumberCont>
                    <SC.Question>¿Aceptan mascotas?</SC.Question>
                    <SC.Answer>Sí, somos Pet friendly, no dudes en venir con tu mejor amigo animal.</SC.Answer>
                </SC.Item>
                
                <SC.Item>
                    <SC.NumberCont>3</SC.NumberCont>
                    <SC.Question>¿Qué es el salón SUM?</SC.Question>
                    <SC.Answer>
                        El salón SUM es un salón multi usos, multi propósitos y compartido, que está compuesto por:
                        <ul>
                            <li>Cocina</li>
                            <li>Microondas</li>
                            <li>Horno eléctrico</li>
                            <li>Zona cine</li>
                            <li>Lavarropas</li>
                            <li>Futones</li>
                            <li>Billar Pool</li>
                            <li>Ping Pong</li>
                            <li>Parrilla</li>
                            <li>Heladera</li>
                        </ul>
                    </SC.Answer>
                </SC.Item>
            </SC.List>
        </HP.Section>
    )
}

// SC.List>SC.Item*3>SC.NumberCont{$}+SC.Question{Texto de prueba $}+SC.Answer{Respuesta $}