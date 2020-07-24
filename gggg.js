//     <div>
        
    

// {
//     props.dancetypes.map(dance => {
//         return (
//            <div className = "row" >
//                 <div class="card col-md-3" style = {{width : "18em"}} >
                
                    
//                 <img src= {`http://localhost:3099/${dance.danceImage}`} class="card-img-top" alt="..." />
//                 <div className="card-body">
//                     <h5 class="card-title">{dance.dancestyle}</h5>
//                     <p class="card-text">Dance is a performing art form consisting of purposefully selected sequences of human movement. This movement
//                      has aesthetic and symbolic value, and is acknowledged as dance by performers and observers within a particular culture.</p>
//                      <button onClick={()=>hanldeRemove(dance._id)}> remove</button> 
//                      <Link to={`/danceforms/${dance._id}`}><button>show</button></Link> 
                      
//                      </div>
//                 <br></br>
//                 </div>
                
//                </div>
               
//         )
//     })
// }



// {/* <div class="card" style = {{width : "18em"}} >
//   <img src="..." class="card-img-top" alt="..." />
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

//             <h1>hi</h1>
//             </div>
//  */}


// // </div>


import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
//import DanceForm from '../danceForms/form'
import {startAddDance, startRemoveDance} from '../../actions/dancetypeAction'
import { Button } from 'reactstrap';

function DanceList(props){
    // const handleSubmit = (formData) => {
    //     console.log(formData)
    //     props.dispatch(startAddDance(formData))
    // }
    const hanldeRemove = (id) => {
        props.dispatch(startRemoveDance(id))
    }
    return(

        <div className="container">
                {/* <Link to="/dancetypes/new"><Button color="info">Add</Button></Link> */}

            <div className = "row">
                    
            {
            props.dancetypes && props.dancetypes.map(dance=>{
                return(
                    <div className = " col-md-4" key = {dance._id}>
                        <div className="card" style = {{ width : '18rem'}}>
                            <img src={`http://localhost:3099/${dance.danceImage}`} className="card-img-top" alt="no image"/>
                            <div className="card-body">
                            <h5 className="card-title">{dance.dancestyle}</h5>
                            <p className="card-text">{dance.description}</p>
                            {/* <Link to={`/danceforms/${dance._id}`}><Button color="primary">show</Button></Link> */}
                            <Button color="danger" onClick={hanldeRemove(dance._id)}> remove</Button>
                            <Link to={`/dancetypes/edit/${dance._id}`}><Button color="info">Update</Button></Link>

                                {/* {props.user.role==='admin' &&
                                        <Button color="danger" onClick={()=>hanldeRemove(dance._id)}> remove</Button>
                                } */}
                                </div>
                            </div>
                        </div>
            )
            })
        }
    </div>
</div>

 )
}

const mapStateToProps=(state)=>{
    return {
        dancetypes:state.dancetypes
        //user:state.user
    }
}

export default connect(mapStateToProps)(DanceList)