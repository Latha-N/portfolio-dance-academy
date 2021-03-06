import axios from '../config/axios'
//import Swal  from 'sweetalert2'

export const setUser = (user) => {
return {
    type : "SET_USERS",
    payload : user
}
}

export const removeUser = () => {
return {type : "REMOVE_USER"}
}

export const startLoginUser = (formData, redirect) => {
return (dispatch) => {
    axios.post('/users/login', formData)
        .then(response => {
            
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.errors)
            } else {
                localStorage.setItem('authToken', response.data.token)
                //console.log('localStorage', localStorage)
                dispatch(setUser(response.data.user))
                redirect()
                // props.history.push('/home')
            }
        })
    .catch(err => alert(err))
    }
}

export const startRegisterUser = (formData, redirect) => {
return (dispatch) => {
    axios.post('/users/register', formData)
        .then(response => {
            
            if(response.data.hasOwnProperty('errors') || response.data.hasOwnProperty('driver')){
                if(response.data.hasOwnProperty('errors') ){
                    alert(response.data.errors)
                } else {
                    alert(response.data.errmsg)
                }
            } else {
                redirect()
                dispatch(setUser(response.data))
            }
        })
        .catch(err => window.alert(err))
        }
}

export const startRemoveUser = () => {
return (dispatch) => {
    axios.delete('/users/logout', {
        headers : {'x-auth' : localStorage.getItem('authToken')}
    })
        .then(response => {
            if(response.data.errors){
                alert(response.data.errors)
            } else {
                localStorage.clear()
                dispatch(removeUser())
                
            }
        })
}
} 
