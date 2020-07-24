import React from 'react'
import { connect } from 'react-redux'
//import { Link } from 'react-router-dom'


function DanceShow(props){
    return(
        <div className="container">
            {props.dancetype && <h2>{props.dancetype.dancestyle}</h2>}

        </div>
    )
    }

const mapStateToProps=(state,props)=>{
    return{
        dancetype:state.dancetypes.find(dance=>dance._id==props.match,params.id)
    }
}

export default connect(mapStateToProps)(DanceShow)