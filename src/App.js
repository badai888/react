import React from 'react'
import {Route,Switch,Redirect } from 'react-router-dom'
import routes from './routes'
import Fracb from './view/Frams'
import Login from './view/Login'
const App = ()=>{ 
  return (
    <div>
      <>
   <Switch>
     <Route path="/login" component={Login}></Route>
     <Route path='/404' component={Fracb}></Route>
     {
       routes.map((route)=>{
         return (
           <Route
           key={route.path}
           path={route.path}
           render={()=>{
             return (
                 <div>
                   {
                     (function(){
                       if(route.meta.needlogin){
                         let lod=localStorage.getItem('sks')
                         if(lod){
                           return (
                             <route.component></route.component>
                           )
                         }else{
                           return(
                             <Redirect to="/login"></Redirect>
                           )
                         }
                       }else{
                         return(
                           <route.component></route.component>
                         )
                       }
                     }())
                   }
                 </div>
             )
           }}></Route>
         
         )
       })
     }
    {/* {
      routes.map((route)=>{
        return (
          <Route
          key={route.path}
          path={route.path}
          render={()=>{
            return (
              <div>
                {
                  (function(){
                    if(route.meta.needlogin){
                      let logf = localStorage.getItem('sks')
                      if(logf){
                        return(
                          <route.component></route.component>
                        )
                      }else{
                        return (
                          <Redirect to="/login" ></Redirect>
                        )
                      }
                    }else{
                      return(
                        <route.component></route.component>
                      )
                    }
                  }())
                }
              </div>
            )
          }}
          ></Route>
        )
      })
    } */}

   </Switch>
    </>
    </div>
  )
}
export default App