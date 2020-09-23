import React from 'react'
import {Route,Switch,Redirect, NavLink } from 'react-router-dom'
import Home from './view/Home'
import About from './view/About'
import Index from './view/index'
import Fracb from './view/Frams'
import Login from './view/Login'
const App = ()=>{
  return (
    <div>
      <>
      <NavLink to='/home' activeClassName="current" activeStyle={{color:"red"}}>home</NavLink>
      <NavLink to='/About' activeStyle={{color:"orange"}}>about</NavLink>
      <NavLink to='/Index' activeStyle={{color:"pink"}}>index</NavLink>
      <Switch>
        <Route path="/home" render={(newsprops)=>{
           return (
             <div>
                 {
              localStorage.getItem('sks')
              ?
                <Home {...newsprops} ></Home>
              :
              <Redirect to={{pathname:'/login',state:{from:'/home'}}}></Redirect>
            }
             </div>
           )
        }}>
       
        </Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Index" component={Index}></Route>
        <Route path="/404" component={Fracb}></Route>
        <Route path="/login" component={Login}></Route>
        <Redirect to="/home" from="/" exact></Redirect>
        <Redirect to="/404" ></Redirect>
      </Switch>
    </>
    </div>
  )
}
export default App