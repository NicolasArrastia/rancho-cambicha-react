import React, { useEffect, useState } from 'react'

// Styled
import { PromoCont, PromoTitle, PromoDetail, PromoSubtitle } from './styled'
import * as HP from '../styled'

const LINK = 'https://rancho-cambicha-default-rtdb.firebaseio.com/promo.json'

export default function Promo() {

    const [promo, setPromo] = useState([])

    useEffect(() => {
        fetch(LINK)
            .then(res=>res.json())
            .then(data=>setPromo(data))
            .catch(err=>setPromo([]))
    }, [])

    if (promo===null){
        return null
    }
    else
    return (
        <HP.Section>
            <HP.Title>Nuestras promos</HP.Title>
            {promo.map((data,i)=>{
                return(
                    <PromoCont key={i}>
                        <PromoTitle>{data.title}</PromoTitle>
                        <PromoDetail>{data.description}</PromoDetail>
                        <PromoSubtitle>{data.subtitle}</PromoSubtitle>
                    </PromoCont>
                )
            })}
        </HP.Section>
    )
}