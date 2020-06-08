import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'


function CoacherShow(props){
    return(
        <div className="container">
            <h1>Show Page</h1>
            
            {props.coacher&&<h2>{props.coacher.name}</h2>}<br/>
            {props.coacher&&<h3>{props.coacher.mobile}</h3>}
            <Link to="/coachers"><Button>back</Button></Link>
           <Link to={`/coachers/edit/${props.match.params.id}`}><Button color="info">update</Button></Link>

           {/* {props.coacher&& <img src={props.coacher.coachImage}  alt="no image"/>}<br/> */}
           {props.coacher ? <img src={`http://localhost:3099/${props.coacher.coachImage}`} alt="no image" style={{width:400}}/> : ''}<br/>

           
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    console.log('show..........',state)
    return{
        coacher:state.coachers.find(coacher=>coacher._id==props.match.params.id)
    }
}

export default connect(mapStateToProps)(CoacherShow)