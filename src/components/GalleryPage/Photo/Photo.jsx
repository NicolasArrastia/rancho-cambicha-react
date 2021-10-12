import React from 'react'

// Styled
import { Dark, Img, ImgCont, PhotoCont } from './styled';

export default function Photo(props) {
    const {src,alt, /*date, description,*/title} = props.data;
    return (
        <PhotoCont title={title}>
            <ImgCont>
                <Img loading="lazy" src={src} alt={alt} />
            </ImgCont>
            <Dark></Dark>
        </PhotoCont>
    )
}