import React, {useEffect,useState} from 'react'

// Components
import PriceCard from './PriceCard/PriceCard';

// Styled
import { PriceSect, FlexCont, Title } from './styled';

const LINK = 'https://rancho-cambicha-default-rtdb.firebaseio.com/houses.json'

export default function PriceSection() {

    const [houses, setHouses] = useState([]);

    useEffect(() => {
        fetch(LINK)
            .then(res=>res.json())
            .then(data=>setHouses(data))
            .catch(err=>console.log(err))
    }, [])

    return (
        <PriceSect>
            <Title>
                Nuestros precios
            </Title>
            <FlexCont>
                {houses.map((data,i)=>{
                    return(
                        <PriceCard key={i} data={data}/>
                    )
                })}
            </FlexCont>
        </PriceSect>
    )
}
