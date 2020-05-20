import React from 'react';
import {connect} from 'react-redux';
import './ClubBar.css'
import {NavLink} from 'react-router-dom'

const Clubs = (props) => {
    let clubImages=[];
    props.club.map(club=>{
    return(
         clubImages = [...clubImages,club]
    )
    });
    return (
        <div className="club-area">
            <h2 className="clubs">Our Clubs</h2>
            <div className="club-bar"> 
                {clubImages.map((index)=>
                    <div  key={index.id}>
                        <NavLink exact to={'/club/'+ index.club}> 
                            <abbr title={index.club}  tabIndex="0">
                                <img  className='club-logo' src={index.image} alt={index.club}></img>
                            </abbr>
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        club : state.clubs.club
    }
}
export default connect(mapStateToProps)(Clubs)
