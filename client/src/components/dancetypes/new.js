import React from 'react'
import DanceForm from '../dancetypes/form'

import {connect} from 'react-redux'
import { startAddDance } from '../../actions/dancetypeAction'

class New extends React.Component{
    handleSubmit=(dance)=>{
        const redirect=()=>this.props.history.push("/dancetypes")
        this.props.dispatch(startAddDance(dance,redirect))
    }
    render(){
        return(
            <div>
                <h1>Add</h1>
                <DanceForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
export default connect()(New)