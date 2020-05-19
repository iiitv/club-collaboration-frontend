import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import './navbar.css'
import menu from './menu.png'
import dot from './3-dot.png'

const Navbar = ()=>{
    return(
            <div className='all-navbar'>
                <div className='three-dot'>
                    <img src={dot} alt='main-menu'></img>
                </div>
                <div className='navbar-all-links'>
                    <div className='logo'>
                        <h1>Club</h1>
                        <h4>Collaboration</h4>
                    </div>
                    <div className='responsive-menu'>
                        <ul className='navbar-center-link'>
                            <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
                            <li><NavLink exact activeClassName="current" to='/Events'>Events</NavLink></li>
                            <li><NavLink exact activeClassName="current" to='/Announcement'>Announcement</NavLink></li>
                            <li><NavLink exact activeClassName="current" to='/Login'>Login</NavLink></li>
                            <li><NavLink exact activeClassName="current" to='/Clubs'>Our Clubs</NavLink></li>
                        </ul>
                    </div>
                    <div >
                        <Link to='/menu'><img className='slide-menu-icon' alt='menu' src ={menu}></img></Link>
                    </div>
                </div>
             </div>
    )
}

export default Navbar 