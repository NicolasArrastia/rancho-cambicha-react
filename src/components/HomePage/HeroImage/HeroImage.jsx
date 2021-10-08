import React, {useEffect,useState} from 'react'

const LINK = 'https://rancho-cambicha-default-rtdb.firebaseio.com/background.json'

export default function HeroImage() {

    const [image,setImage] = useState({});

    useEffect(() => {
        fetch(LINK)
            .then(res=>res.json())
            .then(data=>setImage(data))
    }, [])

    return (
        <div>
            <img title="hero image" style={{width:'200px'}} src={image.src} alt={image.alt} />
        </div>
    )
}
