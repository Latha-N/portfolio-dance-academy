const coacherInitialState=[]

const coacherReducer=(state=coacherInitialState,action)=>{
    switch(action.type){
        case 'SET_COACHERS':{
            return [...action.payload]
        }
        case 'ADD_COACHERS':{
            return [...state,action.payload]
        }
        case 'REMOVE_COACHER':{
            return state.filter(coacher=>coacher._id!==action.payload)
        }
        case 'EDIT_COACHER':{
            return state.map(coacher=>{
                if(coacher._id==action.payload._id){
                    return{...action.payload}
                }else{
                    return  {...coacher}
                }
            })
        }
        
        default:{

            return [...state]
        }
    }
}

export default coacherReducer