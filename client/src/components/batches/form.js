import React from 'react'



class RegiserForm extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            mobile:'',
            email:'',
            address:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=()=>{
        const formData={
            name:this.state.name,
            mobile:this.state.mobile,
            email:this.state.email,
            address:this.state.address
        }
        localStorage.setItem('formData',JSON.stringify(formData))
        this.props.history.push('/batches')
    }

    render(){
        return(
            <div>
                <h1>Registration Form</h1>
<form onSubmit={this.handleSubmit}>

<label>Name</label>
<input type="text"  name="name"value={this.state.name} onChange={this.handleChange}/><br/>
<label>mobile</label>
<input type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange}/><br/>
<label>email</label>
<input type="email"  name="email"value={this.state.email} onChange={this.handleChange}/><br/>
<label>address</label>
<input type="text" name="address"value={this.state.adress} onChange={this.handleChange}/>
<button>Submit</button>
</form>

    </div>
           
        )
    }
}

export default RegiserForm