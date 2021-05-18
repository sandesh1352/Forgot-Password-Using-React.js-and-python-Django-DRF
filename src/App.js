import React from 'react'
import TodoApp from './component/TodoApp'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './component/Login'

export default function App(){
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route path='/todoApp/:name' component={TodoApp}/>
        <Route path='/' component={Login}/>
      </Switch>
      </BrowserRouter>
    </div>
  )
}
