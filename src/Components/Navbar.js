import React from 'react'
import GithubLogo from './GithubLogo'
import './css/Navbar.css'
import InstagramLogo from './InstragramLogo'
import TwitterLogo from './TwitterLogo'
const Navbar = () => {
    return (
        <div class="Navbar">
            <h1>Rohan Musk</h1>
            <ul>
                <li><a href="https://github.com/rohan-musk" target="_blank"><GithubLogo /></a></li>
                <li><a href="https://www.instagram.com/rohanmusk/" target="_blank"><InstagramLogo /></a></li>
                <li><a href="https://twitter.com/MuskawadRohan" target="_blank"><TwitterLogo /></a></li>
            </ul>
        </div>
    )
}

export default Navbar
