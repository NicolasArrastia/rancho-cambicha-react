import React from 'react'

// Components
import HeroImage from './HeroImage/HeroImage'
import PriceSection from './PriceSection/PriceSection'
import Promo from './Promo/Promo'
import GallerySection from './GallerySection/GallerySection'
import IdealsSection from './IdealsSection/IdealsSection'
import TipsSection from './TipsSection/TipsSection'
import FaqSection from './FaqSection/FaqSection'
import AboutSection from './AboutSection/AboutSection'
import SocialNetworks from './SocialNetworks/SocialNetworks'

export default function HomePage() {
    return (
        <>
            <HeroImage/>

            <Promo/>
            <AboutSection/>
            <IdealsSection/>
            <TipsSection/>
            <FaqSection/>

            <SocialNetworks/>

            <GallerySection/>
            <PriceSection/>
        </>
    )
}

