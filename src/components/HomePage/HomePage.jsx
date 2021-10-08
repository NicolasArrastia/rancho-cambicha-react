import React from 'react'

// Components
import HeroImage from './HeroImage/HeroImage'
import PriceSection from './PriceSection/PriceSection'
import Promo from './Promo/Promo'

export default function HomePage() {
    return (
        <div>
            Home
            <HeroImage/>
            <Promo/>
            <PriceSection/>
        </div>
    )
}
