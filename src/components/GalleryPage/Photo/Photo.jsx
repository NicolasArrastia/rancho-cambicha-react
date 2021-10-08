import React from 'react'

export default function Photo(props) {
    const {src,alt,date,description,title} = props.data;
    return (
        <div title={title}>
            <div>{title} {date}</div>
            <img src={src} alt={alt} />
            <div>{description}</div>
        </div>
    )
}
