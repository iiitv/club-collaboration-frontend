import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import './navbar.css'
import menu from './menu.png'
import dot from './3-dot.png'

const Navbar = ()=>{

    const  myFunction = ()=>{
       var x = document.getElementById('center-link');
       if(x.className === 'responsive-menu'){
           x.className+=' center-link';
           console.log(x.className)
       }
       else{
           x.className = 'responsive-menu';
       }
    }

    const handleMenu = ()=>{
        var x = document.getElementById('center-link');
        x.className = 'responsive-menu';
    }

    const overflowFn = ()=>{
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }

    return(
            <div className='all-navbar'>
                <div className='three-dot'>
                    <button onClick={myFunction}><img src={dot} alt='main-menu'></img></button>
                </div>
                <div className='navbar-all-links'>
                    <div className='logo'>
                        <h1>Club</h1>
                        <h4>Collaboration</h4>
                    </div>
                    <div className='responsive-menu' id='center-link'>
                        <ul className='navbar-center-link'  >
                            <li><NavLink exact activeClassName="current" to='/' onClick={handleMenu}>Home</NavLink></li>
                            <li><NavLink exact activeClassName="current" to='/Events' onClick={handleMenu}>Events</NavLink></li>
                            <li><NavLink exact activeClassName="current" to='/Announcement' onClick={handleMenu}>Announcement</NavLink></li>
                            <li><NavLink exact activeClassName="current" to='/Login' onClick={handleMenu}>Login</NavLink></li>
                            <li><NavLink exact activeClassName="current" to='/Clubs' onClick={handleMenu}>Our Clubs</NavLink></li>
                        </ul>
                    </div>
                    <div >
                        <button className='problem-wala-btn' onClick={overflowFn}><Link to='/menu'><img className='slide-menu-icon' alt='menu' src ={menu}></img></Link></button>
                    </div>
                </div>
             </div>
    )
    
}

export default Navbar 