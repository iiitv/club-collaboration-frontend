import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './main-page/navbar/main navbar/navbar'
import Menubar from './main-page/navbar/second-menu-bar/menu-bar'
import './index.css'
const App = ()=>{
    return(
        <BrowserRouter>
            <div>
               <Navbar />
               <Switch>
                   <Route path='/menu' component={Menubar}/>
               </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App