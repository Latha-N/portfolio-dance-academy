import React from 'react'
import DanceForm from '../dancetypes/form'

import {connect} from 'react-redux'
import { startAdddance } from '../../actions/dancetypeAction'

class DanceAdd extends React.Component{
    handleSubmit=(dance)=>{
        const redirect=()=>this.props.history.push("/dancetypes")
        this.props.dispatch(startAdddance(dance,redirect))
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
export default connect()(DanceAdd)