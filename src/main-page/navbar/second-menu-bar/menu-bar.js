import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './menu-bar.css'
import cross from './cross.png'

class Menubar extends Component{
    render(){
    return(
        <div className='menu-2'>
            <div className='bada-flex'>
            </div>
            <div className='chota-flex'>
                <button className='cross-img' onClick={()=>this.props.history.go(-1)}><img alt='go-back' src={cross}></img></button>
                <ul>
                    <h2 className='menu-list'><NavLink to='/Blogs'>Blogs</NavLink></h2>
                    <h2 className='menu-list'><NavLink to='/Gallery'>Gallery</NavLink></h2>
                    <h2 className='menu-list'><NavLink to='/Contact'>Contact</NavLink></h2>
                    <li className='menu-list'><NavLink to='/Posts'>Posts</NavLink></li>
                    <li className='menu-list'><NavLink to='/News'>News</NavLink></li>
                    <li className='menu-list'><NavLink to='/Members'>Members</NavLink></li>
                    <li className='menu-list'><NavLink to='/About'>About Us</NavLink></li>
                </ul>
            </div>
        </div>
    )}
}

export default Menubar