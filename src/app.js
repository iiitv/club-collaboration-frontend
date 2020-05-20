import React from 'react'
import {BrowserRouter,Route,Switch, Router} from 'react-router-dom'
import Navbar from './main-page/navbar/main navbar/navbar'
import Menubar from './main-page/navbar/second-menu-bar/menu-bar'
import './index.css'
import Home from "./main-page/home";
import Login from "./main-page/login/login"
const App = ()=>{
    return(
        <BrowserRouter>
            <div>
               <Navbar />
               <Switch>
                   <Route path='/menu' component={Menubar} exact/>
                   <Route path="/login" component={Login} exact/>
                   <Route path="/" component={Home} exact />
               </Switch>
               
            </div>
        </BrowserRouter>
    )
}

export default App