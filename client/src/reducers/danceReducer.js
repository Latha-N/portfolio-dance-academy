const danceInitialState=[]

const danceReducer=(state=danceInitialState,action)=>{
    switch(action.type){
        case 'SET_DANCERS':{
            return [...action.payload]
        }

       case 'REMOVE_DANCE':{
           return state.filter(dance=>dance._id!==action.payload)
       }

       case 'ADD_DANCE':{
           return [...state]
       }

        case 'EDIT_DANCE':{
            return state.map(dance=>{
                if(dance._id==action.payload_id){
                    return {...action.payload}
                }else{
                    return {...dance}
                }
            })
        }
        
        default:{
            return [...state]
        }
    }
}

export default danceReducer