import React from 'react'

// Styled
import { GalleryCont, Title } from './styled'

export default function GallerySection() {
    const fotostest = ['a','a','a','a']
    return (
        <GalleryCont>
            <Title>Galería</Title>
            {fotostest.map((data,i)=>{
                return(
                    <div key={i} style={{width:'80px',height:'80px',border:'1px solid white'}} />
                )
            })}
        </GalleryCont>
    )
}
