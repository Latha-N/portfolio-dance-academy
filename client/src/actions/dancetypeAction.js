import axios from 'axios'
import Swal from 'sweetalert2'


export const setDanceforms=(danceforms)=>{
    return {
        type:"SET_DANCEFORMS",
        payload:danceforms
    }
}

export const startGetDanceforms=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3099/dancetypes',{
            headers:{'x-auth':localStorage.getItem('authToken')}
        })
        .then(response=>{
            console.log('dance forms...',response.data)
            if(response.data.message){
                alert(response.data.message)
            }else{
                dispatch(setDanceforms(response.data))
            }
        })
        .catch(err=>{
            alert(err)
        })
    }
}

// export const adddanceforms = (danceforms) => {
//     return {
//         type : 'ADD_DANCE',
//         payload : danceforms
//     }
// }

// export const startAddDance = (formData) => {
//     return (dispatch) => {
//         axios.post('http://localhost:3088/danceforms', formData, {
//             headers : {'x-auth' : localStorage.getItem('authToken')}
//         })
//             .then(response => {
//                 if(response.data.errors){
//                     alert(response.data.message)
//                 } else {
//                     dispatch(adddanceforms(response.data))
//                 }
//                 // const danceforms=response.data
//                 // dispatch(adddanceforms(danceforms))
//                 // history.pushState('/home')
//             })

//     }
// }

const addDance=(dance)=>{
    return {type:"ADD_DANCE",payload:dance}
}

export const startAddDance = (formData, redirect) => {
    return (dispatch) => {
        axios.post('http://localhost:3099/dancetypes/new', formData,{
        headers : {'x-auth' : localStorage.getItem('authToken')}
            })
                .then(response => {
                    if(response.data.hasOwnProperty('errors')){
                        Swal.fire('Ooops!!','there was an error submitting the form')
 
                    }else{
                        const dance= response.data
                console.log('dance.............',dance)
                dispatch(addDance(dance))
                redirect()

                //history.push('/home')
                    }
                    Swal.fire('Good job','succesfully added department','success')
                    })
            .catch(err => {
                console.log(' err', err)
            })
    }
}


export const removeDance = (id) => {
    return {
        type : "REMOVE_DANCE",
        payload : id
    }
}

export const startRemoveDance = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3099/dancetypes/${id}`, {
            headers : {
                'x-auth' : localStorage.getItem('authToken')}
        })
        .then(response => {
            dispatch(removeDance(id,response.data))
             })
    }
}

const editdance = (dance) => {
    return {type: 'EDIT_DANCE', payload: dance} 
}


export const startEditDance = (id, formData,redirect) => {
    return (dispatch) => {
        axios.put(`http://localhost:3099/dancetypes/edit/${id}`, formData,{
            headers : {
                'x-auth' : localStorage.getItem('authToken')}
        })
            .then(response=>{
                const dance = response.data
                //const id = dance._id
                dispatch(editdance(dance))
                redirect()
            })
    }
}


