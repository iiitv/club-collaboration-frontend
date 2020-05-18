import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import menu from './menu.png'


const Navbar = ()=>{
    return(
            <div className='navbar-all-links'>
                <div>
                    <h1>Club</h1>
                    <h4>Collaboration</h4>
                </div>
                <div>
                    <ul className='navbar-center-link'>
                        <li>Home</li>
                        <li>Events</li>
                        <li>Announcement</li>
                        <li>Login</li>
                        <li>Our Clubs</li>
                    </ul>
                </div>
                <div >
                    <Link to='/menu'><img className='slide-menu-icon' alt='menu' src ={menu}></img></Link>
                </div>
             </div>
    )
}

export default Navbar 