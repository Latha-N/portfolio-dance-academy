import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



class BatchList extends React.Component{
    constructor(){
        super()
        this.state={
            formdata:localStorage.getItem('formData') ? JSON.parse(localStorage.getItem('formData')) : {},
            listOn:false,
            list:localStorage.getItem('formData') ? JSON.parse(localStorage.getItem('formData')) : {}
        }
    }

    listClick = e =>{
        e.preventDefault()
        this.setState({
            list : localStorage.getItem('formData') ? JSON.parse(localStorage.getItem('formData')) : {},
            listOn: true
        })
    }
    render(){
        const formdata=this.state.formdata
        console.log('register list',formdata)
        return(
            <div className="container">
            <h3>Available Batches</h3>
            
            
            {
                this.props.batches.map((ele)=>
                <div>
                <ul>
                    {ele.batch.map((sub)=>
                        <span><Link to="/batches/new">{sub.name}</Link></span>
                        )}
                </ul>
                </div>
                
                )
            }
            
            <button onClick={this.listClick} style={{color:"blue"}}> Registered List</button><br></br><br></br>

            {
                this.state.listOn && Object.keys(formdata).map((li,index)=>{
                return <div key={index}>{li}</div>
                })
            }

    </div>
            
        )
    }
}
    
const mapStateToProps=(state)=>{
    return{
        batches:state.batches
    }
}

export default connect(mapStateToProps)(BatchList)