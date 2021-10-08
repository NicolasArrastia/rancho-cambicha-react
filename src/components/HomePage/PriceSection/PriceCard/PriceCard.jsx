import React from 'react'

// Styled
import { Container } from './styled';

export default function PriceCard(props) {
    const {name,price} = props.data;
    return (
        <Container>
            <div>{name}</div>
            <div>{price}</div>
        </Container>
    )
}
