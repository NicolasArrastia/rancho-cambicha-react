import React from 'react'

// Styled
import { Item } from './styled'
import { Section, Title } from '../styled'


export default function IdealsSection() {
    return (
        <Section>
            <Title>
                Nuestros ideales
            </Title>
            <ul>
                <Item>
                    <h3>Ecoturismo</h3>
                    <p>Turismo basado en la naturaleza que busca proteger las áreas naturales y potenciar el respeto y preservacion del estilo de vida de las zonas rurales. Un estilo de turismo alternativo diferente al turismo tradicional en le cual se privilegia la sustentabilidad, la preservacion y la apreciación del medio. Viajar y ser responsable de las áreas naturales para conservar el medio ambiente y mejorar el bienestar de las personas locales.</p>
                </Item>
                <Item>
                    <h3>Turismo alternativo</h3>
                    <p>El Turismo Alternativo surge como una propuesta diferente al turismo de masas. Se caracteriza por el tipo de empresa, pequeña, mediana o familiar donde exista la posibilidad de mayor contacto con las comunidades y el respeto por la naturaleza. El Turismo Alternativo se asocia al descanso, el paisaje, a la cultura tradicional, a la huida de la masificación y al contacto con la naturaleza.</p>
                </Item>
                <Item>
                    <h3>Turismo sustentable</h3>
                    <p>El Turismo Sustentable es una actividad comprometida a hacer un bajo impacto sobre el medio ambiente y la cultura local, al tiempo que contribuye a generar ingresos y empleo para la población.</p>
                </Item>
            </ul>
        </Section>
    )
}
