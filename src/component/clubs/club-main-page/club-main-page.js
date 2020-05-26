import React,{Component} from 'react'
import Clubleft from '../club-left-part/club-left-part'
import Clubright from '../club-right-part/club-right'
import './club-main-page.css'
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom"
import Request from "../club-middle-part/request"
class Clubmainpage extends Component{
    render(){
        const clubname = this.props.match.params.clubname;
        return(
            <div className='club-page'>
                <Router>
               <div className='left-part'>
                  <Clubleft />
               </div>
               <div className='center-part'>
                    <Switch>
                    <Route exact path='/SendRequest' component={Request} />
                    </Switch> 
               </div>
               <div className='right-part'>
                    <Clubright clubname={clubname}/>
                   
               </div>
               </Router>
            </div>
        )
    }
}

export default Clubmainpage