import React from 'react'

// Styled
import {Section,Title} from '../styled'
import { Item, List } from './styled'

export default function TipsSection() {
    return (
        <Section>
            <Title>Vacaciones sustentables en Rancho Cambicha</Title>
            <List>
                <Item>
                    <p>Por respeto a los lugares que visitas, lleva tu basura de vuelta.</p>
                </Item>
                <Item>
                    <p>Si visitas lugares contaminados, aprovecha a recoger basura durante tus caminatas, aunque no sea tuya.</p>
                </Item>
                <Item>
                    <p>Evita los plásticos de un solo uso y prioriza los reutilizables, para generar la menor cantidad de residuos posible.</p>
                </Item>
                <Item>
                    <p>Apoya a la economía local y respeta las tradiciones y costumbres locales.</p>
                </Item>
            </List>
        </Section>
    )
}
