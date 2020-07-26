import React ,{useState} from 'react'
import {connect} from 'react-redux'
import { startRemovedance } from '../../actions/dancetypeAction'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';



function DanceList(props){
    const [count, setCount] = useState(0);
    // Similar to componentDidMount and componentDidUpdate:
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     document.title = `List Dance types`;
    //     // console.log('eff')
    //     // if(props.dancetypes){
    //     //     return props.dancetypes
    //     // }
    // },[props.dancetypes]);
    // const dataSet = [...props.dancetypes]
  
      const pageSize = props.dancetypes.length;
      const pagesCount = props.dancetypes.length;
      const handleClick = (e, index) => {

        e.preventDefault();
        if(index > props.dancetypes.length-1 ){
            index = 0
        }
        setCount(
            index
        );
    
      }
    

   const handleRemove=(id)=>{
        props.dispatch(startRemovedance(id))
    }
    return(
            <div className="container">
                 <Link to="/dancetypes/new">Add Dancestyle</Link>
                 <Pagination aria-label="Page navigation example">
                    <PaginationItem>
                        <PaginationLink first href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous href="#" />
                    </PaginationItem>
                    { props.dancetypes && props.dancetypes.map((dance,index)=>{
                        return <>
                            <PaginationItem>
                                <PaginationLink onClick={e => handleClick(e, index)} href="#">
                                {index+1}
                                </PaginationLink>
                            </PaginationItem>
                        </>
                    }) } 
                    <PaginationItem>
                        <PaginationLink next href="#" onClick={e => handleClick(e, count+1)} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last href="#" />
                    </PaginationItem>
                    </Pagination>
 
                <div className="row">

                {
                   props.dancetypes &&  props.dancetypes
                        .slice(
                            count * 1,
                          (count + 1)
                        )
                        .map((dance, i) => {

                         return <div className="data-slice" key={i}>
                            <div className = " col-md-4" key = {dance._id}>
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
                          </div>
                        }
                        )
        }   

                </div>
               


            </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        dancetypes:state.dancetypes

    }
}

export default connect(mapStateToProps)(DanceList)