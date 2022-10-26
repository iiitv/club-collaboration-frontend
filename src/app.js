import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './main-page/Navbar/MainNavbar/Navbar'
import './index.css'
import Home from "./main-page/home";
import Clubmainpage from './component/clubs/club-main-page/club-main-page'
import Eventss from './Eventss';
// import Events from './main-page/Events/Events';
const App = ()=>{
    return(
        <BrowserRouter>
            <div>
               <Navbar />
               <Switch>
                   <Route exact path='/' component={Home}  />
                   <Route exact path='/Eventss' component={Eventss} />
                   {/* <Route exact path='/Events' component={Events} /> */}
                   <Route path='/club/:clubname' component={Clubmainpage} />
               </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App