import React, {useEffect,useState} from 'react'

// Components
import Photo from './Photo/Photo'

// Styled
import { GalleryCont } from './styled'

const LINK = 'https://rancho-cambicha-default-rtdb.firebaseio.com/gallery.json'

export default function GalleryPage() {

    const [photos,setPhotos] = useState([])

    useEffect(() => {
        fetch(LINK)
            .then(res=>res.json())
            .then(data=> setPhotos(data))
    }, [])
    return (
        <GalleryCont>
            {photos.map((data,i)=>{
                return(
                    <Photo id={i} data={data}/>
                )
            })}
        </GalleryCont>
    )
}
