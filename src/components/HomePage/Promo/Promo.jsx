import React, { useEffect, useState } from 'react'

// Styled
import { PromoSect, PromoCont, PromoTitle, PromoDetail, PromoSubtitle } from './styled'

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
        <PromoSect>
            {promo.map((data,i)=>{
                return(
                    <PromoCont>
                        <PromoTitle>{data.title}</PromoTitle>
                        <PromoDetail>{data.description}</PromoDetail>
                        <PromoSubtitle>{data.subtitle}</PromoSubtitle>
                    </PromoCont>
                )
            })}
        </PromoSect>
    )
}