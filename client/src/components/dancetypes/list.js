import React from 'react'
import {connect} from 'react-redux'
import { startRemovedance } from '../../actions/dancetypeAction'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'


function DanceList(props){

   const handleRemove=(id)=>{
        props.dispatch(startRemovedance(id))
    }
    return(
            <div className="container">
                <div className="row">

                {
            props.dancetypes && props.dancetypes.map(dance=>{
                return <div className = " col-md-4" key = {dance._id}>
                        <div className="card" style = {{ width : '18rem'}}>
                            <img src={`http://localhost:3099/${dance.danceImage}`} className="card-img-top" alt="no image" width="200" height="300"/>
                            <div className="card-body">
                            <h5 className="card-title">{dance.dancestyle}</h5>
                            <p className="card-text">{dance.description}</p>
                            <Button color="danger" onClick={()=>handleRemove(dance._id)}> remove</Button>
                            {/* <Link to={`/danceforms/${dance._id}`}><Button color="primary">show</Button></Link> */}
                            <Link to={`/dancetypes/edit/${dance._id}`}><Button color="info">Edit</Button></Link>

                                {/* {props.user.role==='admin' &&
                                        <Button color="danger" onClick={()=>hanldeRemove(dance._id)}> remove</Button>
                                } */}
                                </div>
                            </div>
                        </div>
            
            })
        }   

                </div>
                <Link to="/dancetypes/new">Add Dancestyle</Link>


            </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        dancetypes:state.dancetypes

    }
}

export default connect(mapStateToProps)(DanceList)