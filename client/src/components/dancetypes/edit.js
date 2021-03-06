import React from 'react'
import {connect} from 'react-redux'
import DanceForm from './form'
import { startEditDance } from '../../actions/dancetypeAction'

function DanceEdit(props){
    const id=props.match.params.id
    // console.log(window.location.href)
    // if(props.dancetype){

    //     // console.log("founf id  is",props.dancetype.danceImage)
    // }
    const handleSubmit=(formData)=>{
       //console.log("edit form data",form)
        const id=props.match.params.id
        const redirect=()=>{
            props.history.push('/dancetypes')
            // window.location.href(window.location.host+'/dancetypes')
        }
        props.dispatch(startEditDance(id,formData,redirect))
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
