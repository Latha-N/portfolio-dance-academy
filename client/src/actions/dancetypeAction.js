import axios from '../config/axios'

export const setDancetypes=(dancetypes)=>{
    return{
        type:"SET_DANCERS",
        payload:dancetypes
    }
}



export const startGetDancetypes=()=>{
    return(dispatch)=>{
        axios.get(`/dancetypes`,{
            headers:{'x-auth':localStorage.getItem('authToken')}
        })
        .then(response=>{
            //console.log('listing',response.data)
            if(response.data.message){
                console.log(response.data.message)
            }else{
                dispatch(setDancetypes(response.data))
            }
        })
    }
}


export const removeDance=(id)=>{
    return{
        type:'REMOVE_DANCE',
        payload:id
    }
}

export const startRemovedance = (id) => {
    return dispatch => {
        axios.delete(`/dancetypes/${id}`, {
            headers : {
                'x-auth' : localStorage.getItem('authToken'),
            }
        })
        .then(response => {
            //const id=response.data._id
        
            dispatch(removeDance(id,response.data))
        })
    }
}

export const addDance=(dance)=>{
    return {
        type:'ADD_DANCE',
        payload:dance
    }
}

export const startAdddance=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/dancetypes/new',formData,{
            headers:{'x-auth':localStorage.getItem('authToken')}
        })
        .then(response=>{
            dispatch(addDance(response.data))
            redirect()
        })
    }
}


const editDance=(dance)=>{
    return {
        type:"EDIT_DANCE",
        payload:dance
    }
}


export const startEditDance=(id,formData,redirect)=>{
    return (dispatch)=>{
        axios.put(`/edit/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const dance=response.data
            dispatch(editDance(dance))
            redirect()
        })
    }
}