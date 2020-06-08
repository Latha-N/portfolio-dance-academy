import React from 'react'
import {connect} from 'react-redux'
import DanceForm from './form'
import { startEditDance } from '../../actions/dancetypeAction'

function DanceEdit(props){
    const id=props.match.params.id
    console.log("founf id  is",id)
    const handleSubmit=(form)=>{
        console.log("edit form data",form)
        const id=props.id
        const redirect=()=>this.props.history.push("/dancetypes")
        props.dispatch(startEditDance(id,form,redirect))
    }
   
    return(
        
        <div>
            <h1>Edit DanceType</h1>
            {props.dancetype && <DanceForm {...props.dancetype} handleSubmit={handleSubmit}/>}
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    return{
        //dancetypes:state.dancetypes,
      dancetype: state.dancetypes.find(dance=>dance._id==props.match.params.id)
    }
}

export default connect(mapStateToProps)(DanceEdit)