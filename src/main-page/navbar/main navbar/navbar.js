import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import './navbar.css'

class Navbar extends Component{
    render(){
        const  myFunction = () => {
            var x = document.getElementById('center-link');
            var body = document.getElementsByTagName('body')[0];
            var y = document.getElementsByClassName('our-club')[0]
            if(x.className === 'responsive-menu'){
                x.className+=' center-link';
                body.addEventListener('click',function(){var x = document.getElementById('center-link');
                x.className = 'responsive-menu';},false);
                x.addEventListener('click',function(ev){ev.stopPropagation();},false)
                y.addEventListener('click',function(ev){
                    var dropdown = document.getElementsByClassName('drop-menu')[0];
                    if(dropdown.className==='drop-menu'){
                    dropdown.className += ' show-drop-menu';}
                    else{
                    dropdown.className = 'drop-menu'
                    }
                    ev.stopPropagation();
                },false)
            }
            else{
                x.className = 'responsive-menu';
            }
         }
     
         function handleMenu(){
             var x = document.getElementById('center-link');
             x.className = 'responsive-menu';
         }

         function handleSidemenu(){
             var sidemenu = document.getElementsByClassName('menu-2')[0];
             if(sidemenu.className==='menu-2')
             {
                 sidemenu.className+=' side-menu';
             }
             else{
                 sidemenu.className = 'menu-2';
             }
         }
        
         function onMouseOver(){
            var dropdown = document.getElementsByClassName('drop-menu')[0];
            if(dropdown.className==='drop-menu'){
            dropdown.className += ' show-drop-menu';}
         }
         function onMouseOut(){
            var dropdown = document.getElementsByClassName('drop-menu')[0];
             dropdown.className = 'drop-menu'
         }
         var clubs = this.props.club;
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
                        <h1>Club</h1>
                        <h4>Collaboration</h4>
                        <NavLink exact activeClassName="current" to='/' onClick={handleMenu}>Home</NavLink>
                        <NavLink exact activeClassName="current" to='/Events' onClick={handleMenu}>Events</NavLink>
                        <NavLink exact activeClassName="current" to='/Announcement' onClick={handleMenu}>Announcement</NavLink>
                        <NavLink exact activeClassName="current" to='/Login' onClick={handleMenu}>Login</NavLink>
                        <span  className='our-club'>Our Clubs</span><br></br>
                        <div className='drop-menu'  onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                            {clubs.map((index)=>
                                <div key={index.id}>
                                    <NavLink exact activeClassName='active-drop-down' to={'/club/' + index.club}>
                                       {index.club}
                                    </NavLink> 
                                </div>
                            )}
                        </div>
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

const mapStateToProps = (state)=>{
    return{
        club:state.clubs.club
    }
}

export default connect(mapStateToProps)(Navbar) 