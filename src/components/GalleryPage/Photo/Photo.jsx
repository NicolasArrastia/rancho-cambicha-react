import React from 'react'

// Styled
import { Img, ImgCont, PhotoCont } from './styled';

export default function Photo(props) {
    const {src,alt, /*date, description,*/title} = props.data;
    return (
        <PhotoCont title={title}>
            {/* <div>{title} {date}</div> */}
            
            <ImgCont>
                <Img loading="lazy" src={src} alt={alt} />
            </ImgCont>
            {/* <div>{description}</div> */}
        </PhotoCont>
    )
}