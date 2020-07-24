import React from 'react'

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact'

//import validator from 'validator'
import {startLoginUser} from  '../../actions/userAction'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const imageStyle = {
backgroundImage: `url("https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60")`,
backgroundRepeat: 'no-repeat',
backgroundSize: 'cover',
backgroundPosition: 'center center',
height : "95vh"

}


class Login extends React.Component{
constructor(){
    super()
    this.state={
        email:'',
        password:''
    }
}

handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
        email : this.state.email,
        password : this.state.password
    }
    const redirect = () => this.props.history.push('/home')
    this.props.dispatch(startLoginUser(formData, redirect))
    // this.props.dispatch(startLoginUser(formData, this.props))
   // console.log(formData)
    
}

render(){
    return(
    //   {{ <div className = "container" style = {imageStyle}>
    //         <h1>Login</h1>
    //         <form onSubmit = { this.handleSubmit }>
    //             <div className = "form-group">
    //                 <input type = "text" className = "form-control" placeholder = "email" name = "email" 
    //                 value = { this.state.email } onChange = { this.handleChange } />
    //             </div>

    //             <div className = "form-group">
    //                 <input type = "text" className = "form-control" placeholder = "password" name = "password"
    //                  value = { this.state.password } onChange = { this.handleChange } />
    //             </div>
                
                
    //             <button type ="submit">Submit</button>
    //         </form>
    //     </div>

    <div style={imageStyle}>
        <MDBContainer><br/><br/>
            <h1 className="display-4 text-center" ><span style={{color:"white"}}>Login Form</span></h1><br/>
            <MDBRow>
                <MDBCol md="3">
                        </MDBCol>
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody className="mx-4">
                            <MDBInput label="enter proper email" type="email"   name="email"  value={this.state.email} onChange={this.handleChange} ></MDBInput>
                            <MDBInput label="enter proper password" type="password" name ="password" value = {this.state.password} onChange = {this.handleChange}/>
                            
                            <br/>
                        <div className="text-center mb-3">
                        <MDBBtn type="button" gradient="blue" rounded className="btn-block z-depth-1a" onClick = {this.handleSubmit} color="info" >Login</MDBBtn>
                        </div>
                        </MDBCardBody>
                        <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end" style={{color:"red"}}>
                Not a Registered?
                
                <Link to = "/users/register" >Register</Link>
                

                
                
                </p>
            </MDBModalFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    </div>

    )
}
}

// const mapStateToProps=(state)=>{

// }
// mapStateToProps=(state,props)=>{
//     return{
//         user:state.user
//     }
// }
export default connect()(Login)

