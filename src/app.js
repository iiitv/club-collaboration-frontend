import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import Navbar from './main-page/navbar/main navbar/navbar'
import './index.css'
import Home from "./main-page/home";
import Clubmainpage from './component/clubs/club-main-page/club-main-page'
const App = ()=>{
    return(
        <HashRouter>
            <div>
               <Navbar />
               <Switch>
                   <Route exact path='/' component={Home} />
                   <Route path='/club/:clubname' component={Clubmainpage} />
               </Switch>
            </div>
        </HashRouter>
    )
}

export default App