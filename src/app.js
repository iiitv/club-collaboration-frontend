import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './main-page/Navbar/MainNavbar/Navbar'
import './index.css'
import Home from "./main-page/Home";
import Clubmainpage from './component/clubs/club-main-page/club-main-page'
const App = ()=>{
    return(
        <BrowserRouter>
            <div>
               <Navbar />
               <Switch>
                   <Route exact path='/' component={Home} />
                   <Route path='/club/:clubname' component={Clubmainpage} />
               </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App