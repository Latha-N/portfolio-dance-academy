import axios from 'axios'

export const setCoachers=(coachers)=>{
    return{
        type:"SET_COACHERS",
        payload:coachers
    }
}

export const startGetCoachers=()=>{
    return(dispatch)=>{
        axios.get('http://localhost:3099/coachers',{
            headers:{'x-auth':localStorage.getItem('authToken')}
        })
        .then(response=>{
            console.log('coachers....',response.data)
            if(response.data.message){
                alert(response.data.message)
            }else{
                dispatch(setCoachers(response.data))
            }
        })
    }
}



export const addCoacher=(coacher)=>{
    return {
        type:"ADD_COACHERS",
        payload:coacher
    }
}

export const startAddCoachers=(formData,redirect)=>{
    return (dispatch)=>{
        axios.post('http://localhost:3099/coachers/new',formData,{
            headers:{'x-auth':localStorage.getItem('authToken')}
        })
        .then(response=>{
            if(response.data.errors){
                alert(response.data.message)
            }else{
            const coacher=response.data
            dispatch(addCoacher(coacher))
            redirect()
            }
            })
        .catch(err=>{
            console.log('err',err)
        })
    }
}

export const removeCoacher=(id)=>{
    return{
        type:"REMOVE_COACHER",
        payload:id
    }
}

export const startRemovecoacher=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://localhost:3099/coachers/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            dispatch(removeCoacher(id,response.data))
        })
    }
}

export const editCoacher=(coacher)=>{
    return {type:'EDIT_COACHER',payload:coacher}
}

export const startEditCoach=(id,formData,redirect)=>{
    return (dispatch)=>{
        axios.put(`http:/localhost:3099/coachers/edit/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const coacher=response.data
            dispatch(editCoacher(coacher))
            redirect()
        })
    }
}