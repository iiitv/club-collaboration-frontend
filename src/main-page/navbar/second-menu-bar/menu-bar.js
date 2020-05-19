import React,{Component} from 'react'
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
                    <h2 className='menu-list'>Blogs</h2>
                    <h2 className='menu-list'>Gallery</h2>
                    <h2 className='menu-list'>Contact</h2>
                    <li className='menu-list'>Posts</li>
                    <li className='menu-list'>News</li>
                    <li className='menu-list'>Members</li>
                    <li className='menu-list'>About Us</li>
                </ul>
            </div>
        </div>
    )}
}

export default Menubar