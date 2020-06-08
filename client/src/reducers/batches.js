const batchInitialReducer=[]

const batchReducer=(state=batchInitialReducer,action)=>{
    switch(action.type){
        case 'SET_BATCHES':{
            return [...action.payload]
        }
        default:{
            return[...state]
        }
    }
}

export default batchReducer