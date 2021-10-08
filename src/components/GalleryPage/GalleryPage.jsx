import React, {useEffect,useState} from 'react'
import Photo from './Photo/Photo'


const LINK = 'https://rancho-cambicha-default-rtdb.firebaseio.com/gallery.json'

export default function GalleryPage() {

    const [photos,setPhotos] = useState([])

    useEffect(() => {
        fetch(LINK)
            .then(res=>res.json())
            .then(data=> setPhotos(data))
    }, [])

    return (
        <div>
            galería
            {photos.map((data,i)=>{
                return(
                    <Photo id={i} data={data}/>
                )
            })}
        </div>
    )
}
