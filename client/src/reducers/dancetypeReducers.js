const danceFormInitialState=[]

const dancetypeReducers=(state=danceFormInitialState,action)=>{
    switch(action.type){
        case 'SET_DANCEFORMS':{
            return [...action.payload]
        }
        case 'ADD_DANCE' : {
            return [...state, action.payload]
        }
        case 'REMOVE_DANCE':{
            return state.filter(dance=>dance._id !== action.payload)
        }
        case 'EDIT_DANCE': {
            return state.map(dance=> {
                if (dance._id == action.payload._id) {
                    return {...action.payload}
                } else {
                    return {...dance}
                }
            })
        }

        default:{
            
            return [...state]
        }
    }
    
}
export default  dancetypeReducers