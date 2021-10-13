import React from 'react'

// Styled
import { GalleryCont, Title } from './styled'
import * as HP from '../styled'
import * as SC from './styled'

import * as color from '../../colors'

const ALBUM = 'https://photos.app.goo.gl/7uZvjzVafkNFjGdt9'

export default function GallerySection() {
    const fotostest = [
        'foto 1 debería ir aquí',
        'foto 2 debería ir aquí',
        'foto 3 debería ir aquí',
        'foto 4 debería ir aquí']

    return (
        <HP.Section dark>
            <HP.Title>Algunas fotos nuestras</HP.Title>
            <SC.Flex>
                {fotostest.map((data,i)=>{
                    return(
                        <SC.Photo key={i} src={data} alt={data}/>
                    )
                })}
            </SC.Flex>
        </HP.Section>
    )
}
