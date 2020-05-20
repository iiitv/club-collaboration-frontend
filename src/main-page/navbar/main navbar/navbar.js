import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './navbar.css'


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
                body.addEventListener('click',handleMenu,true);
            }
            else{
             document.getElementsByTagName('body')[0].style.overflow='auto';
                x.className = 'responsive-menu';
                y.className = 'navbar-centr-link'
            }
         }
     
         function handleMenu(){
             var x = document.getElementById('center-link');
             x.className = 'responsive-menu';
             document.getElementsByTagName('body')[0].style.overflow='auto';
         }

         function handleSidemenu(){
             var sidemenu = document.getElementsByClassName('menu-2')[0];
             if(sidemenu.className==='menu-2')
             {
                 sidemenu.className+=' side-menu';
                 document.getElementsByTagName('body')[0].style.overflow='auto';
             }
             else{
                 sidemenu.className = 'menu-2';
                 document.getElementsByTagName('body')[0].style.overflow='hidden';
             }
         }
    return(
            <div className='all-navbar'>
                <div className='three-dot'>
                    <button onClick={myFunction}><img src='../images/navbar-image/3-dot.png' alt='main-menu'></img></button>
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
                        <img className='slide-menu-icon' onClick={handleSidemenu} alt='menu' src ='../images/navbar-image/menu.png'></img>
                    </div>
                </div>
                <div className='menu-2 side-menu'>
                    <div className='bada-flex' onClick={handleSidemenu}>
                    </div>
                    <div className='chota-flex'>
                        <button className='cross-img' onClick={handleSidemenu}><img alt='go-back' src='../images/navbar-image/cross.png'></img></button>
                        <ul>
                            <h2 className='menu-list'><NavLink to='/Blogs'>Blogs</NavLink></h2>
                            <h2 className='menu-list'><NavLink to='/Gallery'>Gallery</NavLink></h2>
                            <h2 className='menu-list'><NavLink to='/Contact'>Contact</NavLink></h2>
                            <li className='menu-list'><NavLink to='/Posts'>Posts</NavLink></li>
                            <li className='menu-list'><NavLink to='/News'>News</NavLink></li>
                            <li className='menu-list'><NavLink to='/Members'>Members</NavLink></li>
                            <li className='menu-list'><NavLink to='/About'>About Us</NavLink></li>
                        </ul>
                        <div className='border'></div>
                     </div>
                </div>
             </div>
    )
    }
}

export default Navbar 