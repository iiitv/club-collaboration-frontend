import React,{Component} from 'react'
import {Link,NavLink} from 'react-router-dom'
import './navbar.css'
import menu from './menu.png'
import dot from './3-dot.png'

class Navbar extends Component{
    render(){
        const  myFunction = () => {
            var x = document.getElementById('center-link');
            var y = document.getElementsByClassName('navbar-center-link')[0];
            var body = document.getElementsByTagName('body')[0];
            if(x.className === 'responsive-menu'){
                x.className+=' center-link';
                y.className+= ' left-menu';
                document.getElementsByClassName('left-menu')[0].style.height = '1000px';
                body.style.overflow='hidden';
                body.addEventListener('click',handleMenu)
            }
            else{
             document.getElementsByTagName('body')[0].style.overflow='auto';
                x.className = 'responsive-menu';
                y.className = 'navbar-centr-link'
            }
         }
     
         const handleMenu = ()=>{
             var x = document.getElementById('center-link');
             x.className = 'responsive-menu';
             document.getElementsByTagName('body')[0].style.overflow='auto';
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
                        <ul className='navbar-center-link'>
                            <h1>Club</h1>
                            <h4>Collaboration</h4>
                            <NavLink exact activeClassName="current" to='/' onClick={handleMenu}><li>Home</li></NavLink>
                            <NavLink exact activeClassName="current" to='/Events' onClick={handleMenu}><li>Events</li></NavLink>
                            <NavLink exact activeClassName="current" to='/Announcement' onClick={handleMenu}><li>Announcement</li></NavLink>
                            <NavLink exact activeClassName="current" to='/Login' onClick={handleMenu}><li>Login</li></NavLink>
                            <NavLink exact activeClassName="current" to='/Clubs' onClick={handleMenu}><li>Our Clubs</li></NavLink>
                        </ul>
                    </div>
                    <div >
                  <Link to='/menu'><img className='slide-menu-icon' alt='menu' src ={menu}></img></Link>
                    </div>
                </div>
             </div>
    )
    }
}

export default Navbar 