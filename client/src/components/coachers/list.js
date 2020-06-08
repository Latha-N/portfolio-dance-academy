import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap';
import {startRemovecoacher} from '../../actions/coachersAction'


function CoacherList(props){

    const handleRemove=(id)=>{
        props.dispatch(startRemovecoacher(id))
    }
    
    return(
        <div className="container">
            {/* <h1>coachers-{props.coachers && props.coachers.length}</h1>
            {
                props.coachers && (
                    <ul className="list-group">
                        {
                            props.coachers.map(coacher=>{
                            return <li className="list-group-item" key={coacher._id}>{coacher.name}  <Link to={`/coachers/${coacher._id}`}>show</Link>
                            <Button color="danger" onClick={()=>handleRemove(coacher._id)}> remove</Button>
                        </li>
                            })
                        }
                    </ul>
                )
            } */}
    <table className = "table table-striped">
                    <thead className="thead-red">
                        <tr>
                            <th>Name Of The Coachers</th>
                            <th>Details</th>
                            <th>Remove Coacher</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.coachers.map(coacher => {
                                return <tr key= { coacher._id } >
                                        <td>{ coacher.name}</td>
                                         <td><Link to ={`/coachers/${ coacher._id }`}><Button color="info">Show</Button></Link></td>
                                        <td><Button color="danger" onClick={()=>handleRemove(coacher._id)}> remove</Button></td>
                                    </tr>
                            })
                        }
                    </tbody>
                </table>
                   
            <Link to="/coachers/new"><Button color="primary">Add Coacher</Button></Link>
            </div>


        
    )
}

const mapStateToProps=(state,props)=>{
    return {
        coachers:state.coachers
    }
}

export default connect(mapStateToProps)(CoacherList)