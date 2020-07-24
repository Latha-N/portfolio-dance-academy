import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'
import {Provider} from 'react-redux'
import configureStore from '../src/store/configureStore'
import { setUser } from '../src/actions/userAction'
//import {startGetDancetypes} from '../src/actions/dancetypeAction'
import 'bootstrap/dist/css/bootstrap.min.css';
import { startGetCoachers } from './actions/coachersAction';
import { startGetBatches } from './actions/batches'
import { startGetDancetypes } from './actions/dancetypeAction'



const store = configureStore()
store.subscribe(() => {
//console.log('latha',store.getState())
})

// store.dispatch(startGetUsers())

if(localStorage.getItem('authToken')){
    // store.dispatch(startGetCategories())
    // store.dispatch(startGetNotes())
    axios.get('/users/account',{
    headers: {
            'x-auth': localStorage.getItem('authToken')
    }
})
.then(response=>{
//console.log('response',response.data)
    const user = response.data
    store.dispatch(setUser(user))
   store.dispatch(startGetDancetypes())
    store.dispatch(startGetCoachers())
    store.dispatch(startGetBatches())
        
    
})             
}

//console.log(store.getState())

const ele = (
<Provider store ={store}>
<App/>
</Provider>
)
ReactDOM.render(ele,document.getElementById('root'))