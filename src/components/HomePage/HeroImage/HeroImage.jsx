import React, {useEffect,useState} from 'react'

// Styled
import { HeroBlack, HeroCont, HeroImg, HeroSubtitle, HeroTitle } from './styled';

export default function HeroImage() {

    return (
        <HeroCont>
            <HeroImg title="hero image" src='./img/hero_image.jpg' alt='rancho cambicha background' />
            <HeroBlack>
                <HeroTitle>Rancho Cambicha</HeroTitle>
                <HeroSubtitle>Hay lugares donde uno se queda, y lugares que se quedan en uno</HeroSubtitle>
            </HeroBlack>
        </HeroCont>
    )
}
