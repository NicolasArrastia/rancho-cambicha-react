import React from 'react'

// Styled
import { Container, DetailItem, Details, LinkButton, Name, Price } from './styled';

export default function PriceCard(props) {
    const {name,price,link,details} = props.data;
    return (
        <Container>
            <Name>{name}</Name>
            <Price>{price}</Price>
            <Details>
                {details.map((data,i)=>{
                    return(
                        <DetailItem key={i}>
                            {data}
                        </DetailItem>
                    )
                })}
            </Details>
            <LinkButton href={link} target="_blank">Alquilar</LinkButton>
        </Container>
    )
}
