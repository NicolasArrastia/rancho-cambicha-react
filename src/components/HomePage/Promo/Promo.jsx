import React, { useEffect, useState } from 'react'

const LINK = 'https://rancho-cambicha-default-rtdb.firebaseio.com/promo.json'

export default function Promo() {

    const [promo, setPromo] = useState({title:'',description:'',subtitle:''})

    useEffect(() => {
        fetch(LINK)
            .then(res=>res.json())
            .then(data=>setPromo(data))
    }, [])
    return (
        <div>
            <div>{promo.title}</div>
            <div>{promo.description}</div>
            <div>{promo.subtitle}</div>
        </div>
    )
}
