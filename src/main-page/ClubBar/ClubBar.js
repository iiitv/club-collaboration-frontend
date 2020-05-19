import React from 'react';
import {connect} from 'react-redux';
import './ClubBar.css'

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
                {clubImages.map((index)=><div>
                        <img  className='club-logo' src={index.image}></img>
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
