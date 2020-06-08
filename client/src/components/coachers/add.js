import React from 'react'
//import Form from './
import {connect} from 'react-redux'
import CoacherForm from './form'
import {startAddCoachers} from '../../actions/coachersAction'

class CoacherAdd extends React.Component{
    handleSubmit=(formData)=>{
       const redirect=()=>this.props.history.push("/coachers")
        this.props.dispatch(startAddCoachers(formData,redirect))
    }
    render(){
        return(
            <div>
                <CoacherForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }

}
export default connect()(CoacherAdd)