import React, {useEffect,useState} from 'react'

// Styled
import * as SC from './styled'

const LINK = 'https://rancho-cambicha-default-rtdb.firebaseio.com/gallery'

export default function GalleryPage() {

    const [photos,setPhotos] = useState([])
    const [isLoading,setLoading] = useState(true)
    // const [aux, setAux] = useState(true)

    useEffect(() => {
        let i=3;

        // while(i!=-1){
        //     fetch(`${LINK}${i}.json`)
        //     i++;
        // }
        let lista = [];
        fetch(`${LINK}/${i}/src.json`)
            .then(res=>{
                res.json()
            })
            .then(data=> {
                lista.push(data)
                console.log(data)
                setLoading(false)
                console.log(lista)
            })
            //     .catch(err=>console.log(err))
            //     console.log(photos)
            
        setPhotos(lista)
    }, [])
    return (
        <SC.GalleryCont>
            
            {(isLoading)?
            <h4>cargando...</h4>
            :
            <>
            {JSON.stringify(photos)}
            </>
            }

            {/* {photos.map((data,i)=>{return(
                <div key={i}>
                    {JSON.stringify(data.alt)}
                    <img style={{width:'100px'}} src={data.src} alt={`rancho ${i}`} />
                </div>
            )})} */}

        </SC.GalleryCont>
    )
}
