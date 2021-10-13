import React from 'react'

// Components
import HeroImage from './HeroImage/HeroImage'
import PriceSection from './PriceSection/PriceSection'
import Promo from './Promo/Promo'
import GallerySection from './GallerySection/GallerySection'
import IdealsSection from './IdealsSection/IdealsSection'
import TipsSection from './TipsSection/TipsSection'
import FaqSection from './FaqSection/FaqSection'

// Styled

// Colors
import * as colors from '../colors'
import AboutSection from './AboutSection/AboutSection'

function ColorTest(props){
    const color = props.color;
    return(
        <div style={{margin:'3px', display:'inline-block',width:'20px',height:'20px',backgroundColor:color}}/>
    )
}

export default function HomePage() {
    return (
        <>
            <HeroImage/>

            <Promo/>
            <AboutSection/>
            <IdealsSection/>
            <TipsSection/>
            <FaqSection/>


            <GallerySection/>
            <PriceSection/>

            <section>
                <ColorTest color={colors.orange_1}/>
                <ColorTest color={colors.orange_2}/>
                <ColorTest color={colors.orange_3}/>
                <ColorTest color={colors.orange_4}/>
                <ColorTest color={colors.orange_5}/>
                <br/>
                <ColorTest color={colors.blue_1}/>
                <ColorTest color={colors.blue_2}/>
                <ColorTest color={colors.blue_3}/>
                <ColorTest color={colors.blue_4}/>
                <ColorTest color={colors.blue_5}/>
                <br/>
                <ColorTest color={colors.green_1}/>
                <ColorTest color={colors.green_2}/>
                <ColorTest color={colors.green_3}/>
                <ColorTest color={colors.green_4}/>
                <ColorTest color={colors.green_5}/>
                <br/>
                <ColorTest color={colors.watergreen_1}/>
                <ColorTest color={colors.watergreen_2}/>
                <ColorTest color={colors.watergreen_3}/>
                <ColorTest color={colors.watergreen_4}/>
                <ColorTest color={colors.watergreen_5}/>
                <br/>
                <ColorTest color={colors.white}/>
                <ColorTest color={colors.black_1}/>
                <ColorTest color={colors.black_2}/>
                <ColorTest color={colors.black_3}/>
                <ColorTest color={colors.black_4}/>
            </section>

        </>
    )
}

