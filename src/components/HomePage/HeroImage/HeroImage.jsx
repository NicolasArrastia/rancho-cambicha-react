import React, {useEffect,useState} from 'react'

// Styled
import { HeroBlack, HeroCont, HeroImg, HeroSubtitle, HeroTitle } from './styled';

const LINK = 'https://rancho-cambicha-default-rtdb.firebaseio.com/background.json'

export default function HeroImage() {

    const [image,setImage] = useState({src:'',alt:''});

    useEffect(() => {
        fetch(LINK)
            .then(res=>res.json())
            .then(data=>setImage(data))
    }, [])

    return (
        <HeroCont>
            <HeroImg title="hero image" src={image.src} alt={image.alt} />
            <HeroBlack>
                <HeroTitle>Rancho Cambicha</HeroTitle>
                <HeroSubtitle>Hay lugares donde uno se queda, y lugares que se quedan en uno</HeroSubtitle>
            </HeroBlack>
        </HeroCont>
    )
}
