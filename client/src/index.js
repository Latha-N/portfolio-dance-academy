import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'
import {Provider} from 'react-redux'
import configureStore from '../src/store/configureStore'
import { setUser } from '../src/actions/userAction'
import {startGetDanceforms} from '../src/actions/dancetypeAction'
import 'bootstrap/dist/css/bootstrap.min.css';
import { startGetCoachers } from './actions/coachersAction';
import { startGetBatches } from './actions/batches'



const store = configureStore()
store.subscribe(() => {
console.log('latha',store.getState())
})

// store.dispatch(startGetUsers())

if(localStorage.getItem('authToken')){
    // store.dispatch(startGetCategories())
    // store.dispatch(startGetNotes())
    axios.get('http://localhost:3099/users/account',{
    headers: {
            'x-auth': localStorage.getItem('authToken')
    }
})
.then(response=>{
console.log('response',response.data)
    const user = response.data
    store.dispatch(setUser(user))
    store.dispatch(startGetDanceforms())
    store.dispatch(startGetCoachers())
    store.dispatch(startGetBatches())
        
    
})             
}

console.log(store.getState())

const ele = (
<Provider store = {store}>
<App/>
</Provider>
)
ReactDOM.render(ele,document.getElementById('root'))