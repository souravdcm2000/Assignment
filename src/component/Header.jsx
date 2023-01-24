import React from 'react'
import './Header.css';
function Header() {
    return (
        <header>
            <div>
                <h2>Get<span>Prepped</span></h2>
            </div>
            <div className='icon'>
                <img className='roundpic' src='./Assets/profilepic.jpeg' alt='profilepic' />
                <div className='arrow'></div>
            </div>
        </header>
    );
}

export default Header