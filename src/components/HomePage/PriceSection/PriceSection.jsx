import React, {useEffect,useState} from 'react'

// Components
import PriceCard from './PriceCard/PriceCard';

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
        <div>
            {houses.map((data,i)=>{
                return(
                    <PriceCard data={data}/>
                )
            })}
        </div>
    )
}
