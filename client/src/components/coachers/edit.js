import React from 'react'
import {connect} from 'react-redux'
import CoacherForm from './form'
import { startEditCoach } from '../../actions/coachersAction'
//import {withRouter} from 'react-router-dom'
function CoacherEdit(props){
    console.log("found id  is",props)
    const handleSubmit=(form)=>{
        const id=props.match.params.id
        const redirect=()=>props.history.push("/coachers")
        props.dispatch(startEditCoach(id,form,redirect))
    }
   
    return(
        
        <div>
            <h1>Edit Coachers</h1>
            {props.coacher && <CoacherForm {...props.coacher} handleSubmit={handleSubmit}/>}
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    return{
        //dancetypes:state.dancetypes,
      coacher: state.coachers.find(coacher=>coacher._id==props.match.params.id)
    }
}

export default connect(mapStateToProps)(CoacherEdit)