import styled from 'styled-components'

export const GalleryCont = styled.main`
    background-color: #aaa;
    padding: 20px 5%;

    /* Masonry Container */
    column-count: 4;
    column-gap: 20px;
    @media (max-width: 576px){
        column-count: 2;
    }
`;