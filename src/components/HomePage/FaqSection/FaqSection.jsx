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
                </SC.Item>
                
                <SC.Item>
                    <SC.NumberCont>2</SC.NumberCont>
                    <SC.Question>¿Aceptan mascotas?</SC.Question>
                </SC.Item>
                
                <SC.Item>
                    <SC.NumberCont>3</SC.NumberCont>
                    <SC.Question>¿Qué es el salón SUM?</SC.Question>
                </SC.Item>
            </SC.List>
        </HP.Section>
    )
}

// SC.List>SC.Item*3>SC.NumberCont{$}+SC.Question{Texto de prueba $}+SC.Answer{Respuesta $}