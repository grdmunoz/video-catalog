import React from 'react'
import ReactDOM from 'react-dom'
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/index'
import Login from './components/login'
import Register from './components/register'
import AddVideo from './components/AddVideo'
import Forgot from './components/forgot'
import Reset from './components/reset'
//import 'bootstrap/dist/css/bootstrap.min.css'

import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'


ReactDOM.render(
	<Router>
	    <Switch>
	    <Route exact path='/' component={Index}/>
	    <Route path='/login' component={Login}/>
	    <Route path='/register' component={Register}/>
	    <Route path='/addvideo' component={AddVideo}/>
	    <Route path='/forgotpassword' component={Forgot}/>
	    <Route path='/password/reset/:token' component={Reset}/>
	</Switch>
	</Router>,
    document.getElementById('app')
);