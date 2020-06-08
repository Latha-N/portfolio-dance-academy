import axios from '../config/axios'

export const setBatches=(batches)=>{
    return{
        type:"SET_BATCHES",
        payload:batches
    }
}

export const startGetBatches=()=>{
    return(dispatch)=>{
        axios.get('/batches',{
            headers:{'x-auth':localStorage.getItem('authToken')}
        })
        .then(response=>{
            if(response.data.message){
                alert(response.data.message)
            }else{
                dispatch(setBatches(response.data))
                console.log('khvkjvlj..........',response.data)
            }
        })
    }
}