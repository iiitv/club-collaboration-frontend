import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './main-page/Navbar/MainNavbar/Navbar'
import './index.css'
import Home from "./main-page/home";
import Clubmainpage from './component/clubs/club-main-page/club-main-page'
import Eventss from './Eventss';
import LoginM from './LoginM';
import { Announcement } from './Announcement';
import ContactUs from './ContactUs';
import { Blogs } from './Blogs';
import { Signup} from  './main-page/Signup'
// import Events from './main-page/Events/Events';
const App = ()=>{
    return(
        <BrowserRouter>
            <div>
               <Navbar />
               <Switch>
                   <Route exact path='/' component={Home}  />
                   <Route exact path='/Events' component={Eventss} />
                   <Route exact path='/Login' component={LoginM} />
                   <Route exact path='/Announcement' component={Announcement} />
                   <Route exact path='/ContactUs' component={ContactUs} />
                   <Route exact path='/Blogs' component={Blogs} />
                    <Route exact path='/signUp' component={Signup} />
                   {/* <Route exact path='/Events' component={Events} /> */}
                   <Route path='/club/:clubname' component={Clubmainpage} />
               </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App