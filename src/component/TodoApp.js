import React from 'react'
import {createStore} from 'redux'
import { Provider } from "react-redux";
import Header from './Header'
import TodoReducer from '../reducers/TodoReducer'
import AddTodo from './AddTodo'
import VisibilityFilter from './VisibilityFilter'

const state={
    tuborg:[]
}
export default function TodoApp(props){
    const store=createStore(TodoReducer,state)
return(
    <div>
        <Header name={props.match.params.name}/>
        <Provider store={store}>
            <AddTodo/>
            <VisibilityFilter/>
        </Provider>
    </div>
)
}
