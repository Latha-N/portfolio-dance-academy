import {createStore,combineReducers,applyMiddleware} from 'redux'
import usersReducers from '../reducers/userReducer'
//import dancetypeReducers from '../reducers/dancetypeReducers'
import thunk from 'redux-thunk'
import coacherReducer from '../reducers/coacherReducers'
import batchReducer from '../reducers/batches'
import danceReducer from '../reducers/danceReducer'

const configureStore=()=>{
    const store=createStore(combineReducers({
        user:usersReducers,
        coachers:coacherReducer,
        batches:batchReducer,
        dancetypes:danceReducer
       
    }),applyMiddleware(thunk))

    return store
}

export default configureStore