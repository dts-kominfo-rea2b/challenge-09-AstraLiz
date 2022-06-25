import React from 'react';
// Kalian bisa menambahkan CSS di src/components/Header.css
import './Header.css'

const Header = () => {
    return (
        <div className='head'>
            <h1 className='title'>Call A Friend</h1>
            <h3 className='sub-title'>"your friendly contact app"</h3>
            <p class='dots'>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </p>
        </div>
    )
}

export default Header;