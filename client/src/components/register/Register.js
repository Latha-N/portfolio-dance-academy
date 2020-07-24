import React from 'react'

import {Link} from 'react-router-dom'
//import validator from 'validator'
import {startRegisterUser} from '../../actions/userAction'
import {connect} from 'react-redux'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact'


const imageStyle = {
    backgroundImage: `url("https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height : "95vh"
    
    }
    

class Register extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            username:'',
            mobile:'',
            
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
            password : this.state.password,
            username : this.state.username,
            mobile : this.state.mobile,
            
        }
        const redirect = () => this.props.history.push('/users/login')
        this.props.dispatch(startRegisterUser(formData, redirect))
        //console.log(formData)
        
    }

    render(){
        return(
            // {<div className = "container">
            //     <h1>Register</h1>
            //     <form onSubmit = { this.handleSubmit }>
            //         <div className = "form-group">
            //             <input type = "text" className = "form-control" placeholder = "username" name = "username" 
            //             value = { this.state.username } onChange = { this.handleChange } />
            //         </div>

            //         <div className = "form-group">
            //             <input type = "text" className = "form-control" placeholder = "email" name = "email"
            //              value = { this.state.email } onChange = { this.handleChange } />
            //         </div>
                    
            //         <div className = "form-group">
            //             <input type = "text" className = "form-control" placeholder = "password" name = "password" value = { this.state.password } onChange = { this.handleChange } />
            //         </div>
            //         <div className = "form-group">
            //             <input type = "text" className = "form-control" placeholder = "mobile" name = "mobile" 
            //             value = { this.state.mobile } onChange = { this.handleChange } />
            //         </div>
            //         <button type ="submit" className = "btn btn-primary">Submit</button>
            //     </form>
            // </div>}
      <div  style = {imageStyle}>
      <MDBContainer >
          <br></br>
          <br></br>
      <h1 className="display-4 text-center"><strong style={{color:"white"}}>Registration Form</strong></h1><br/>
<MDBRow>
<MDBCol md="3">
    </MDBCol>
  <MDBCol md="6">
    <MDBCard>
      <MDBCardBody className="mx-4">
      <MDBInput label="Enter Username" value = {this.state.username} type="text"name = "username" onChange = {this.handleChange} />
      <MDBInput label="Enter Email" value = {this.state.email} type="email" name = "email" onChange = {this.handleChange} />
      <MDBInput  label="Enter Mobile"value = {this.state.mobile} type="text" name = "mobile" onChange = {this.handleChange} />
      <MDBInput label="Enter Password" type="password" name = "password" value = {this.state.password} onChange = {this.handleChange} />
  <br/>

{/* <div>
<ul>
  {
    this.state.role.map(rl=>{
      return <li ><input type="radio" name="role" value={rl} onChange={this.handleChange} />{rl}</li>

    })
  }
  </ul>
  
</div> */}
{/* <div class="custom-control custom-radio">
<ul>
  {
    this.state.role.map(rl=>{
      return <li>    <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios"/>
      {rl}</li>

    })
  }
  </ul>

  <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios"/>
  <label class="custom-control-label" for="defaultUnchecked">Default unchecked</label>
</div> */}

  
  <div className="text-center mb-3">
          <MDBBtn type="button" gradient="blue"rounded className="btn-block z-depth-1a" onClick = {this.handleSubmit} color="info">submit</MDBBtn>
</div>

</MDBCardBody>
      <MDBModalFooter className="mx-5 pt-3 mb-1">
        <p style={{color:"red"}} >
          Already Registered?
          <a  className="blue-text ml-1">

            <Link to = "/users/login" >Login</Link>
          </a>
        </p>
      </MDBModalFooter>
    </MDBCard>
  </MDBCol>
  <MDBCol md="3">
    </MDBCol>
</MDBRow>
</MDBContainer>
  </div>

  )
}
    
}

const mapStateToProps=(state,props)=>{
 // console.log('users//////',props)
      return{
          user:state.user
      }
   }
export default connect(mapStateToProps)(Register)
