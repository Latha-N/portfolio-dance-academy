import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';

class CoacherForm extends React.Component{
constructor(props){
        super()
        this.state = {
            name :props.coacher?props.coacher.name :'',
            mobile:props.coacher?props.coacher.mobile:'',
            coachImage:null
        }
    }

    handleChamge = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleFileChange=(e)=>{
        console.log('coachImage',e.target.files[0])
        this.setState({
            coachImage:e.target.files[0]
        })
    }   

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name : this.state.name,
            mobile:this.state.mobile
        }
        const form=new FormData()
        form.append('coachImage',this.state.coachImage)
        for (let key in formData){
            form.append(key,formData[key])
        }
        console.log(formData)
        this.props.handleSubmit(formData)
    }

    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit} className="container">
                    <h1>Add The Coachers Details</h1>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" value = {this.state.name} onChange = {this.handleChamge} placeholder="" style = {{width : "200px"}} />
                 <br></br>
                 <Label for="mobile">Mobile</Label>
                 <Input type="text" name="mobile" value={this.state.mobile} onChange={this.handleChamge} placeholder="" style = {{width : "200px"}}/><br/>
                 <Label for="danceImage">File</Label>
                    <Input type="file" onChange={this.handleFileChange} defaultValue={this.state.danceImage} encType="multipart/form-data"/>
                    <FormText color="muted">select the file</FormText>
 
                <Button color="primary" >submit</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        coachers : state.coachers.find(cat => cat._id == props.id)
    }
}

export default connect(mapStateToProps)(CoacherForm)