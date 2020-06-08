import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


function BatchShow(props){
    console.log('ggggggggg',props.batches)
    return(
        <div className="container">
            <h3>Batches</h3>
            
            
            {
                props.batches.map((ele)=>
                <div>
                <ul>
                    {ele.batch.map((sub)=>
                        <span>{sub.timing}</span>
                        )}
                </ul>
                </div>
                
                )
            }
            
         </div>
    )}
    //     <div className="container">
    //         <table className = "table table-striped">
    //                 <thead className="thead-red">
    //                     <tr>
    //                         <th>batches</th>
    //                         <th>Timing</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
                       
    //                 {
    //                     props.batches.map(ele=>
    //                          <div>
    //                         {
    //                                 ele.batch.map(sub=>
    //                                     <tr>
    //                                         <td>{sub.name}</td>
                                    
    //                                     </tr>
    //                                 )
    //                             }
    //                     </div>
                            
    //                     )
    //                 }
    //                 </tbody>
    //             </table>
    
    //     </div>
    // )}


const mapStateToProps=(state)=>{
    return{
        batches:state.batches
    }
}

export default connect(mapStateToProps)(BatchShow)