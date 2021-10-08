import React from 'react'

export default function Header() {
    return (
        <header>
            <a href="/">
                <img style={{width:'60px'}} src="./img/logo.svg" alt="Rancho Cambicha logo" />
                <span>Rancho Cambicha</span>
            </a>
            <nav>
                <ul>
                    <li><a href="/galeria">Galería</a></li>
                    <li><a href="/rancho-deli">Rancho Deli</a></li>
                    <li><a href="/asd">404?</a></li>
                </ul>
            </nav>
        </header>
    )
}
