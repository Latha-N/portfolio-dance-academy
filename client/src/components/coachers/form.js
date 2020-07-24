import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';


class CoacherForm extends React.Component{
constructor(props){
        super(props)
        this.state = {
            name :this.props.name ? this.props.name :'',
            mobile:this.props.mobile  ?this.props.mobile:'',
            coachImage:null
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleFileChange=(e)=>{
       // console.log('coachImage',e.target.files[0])
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
        this.props.handleSubmit(form)
    }

    render(){
        return(
            <div>

                <Form onSubmit={this.handleSubmit}>
                <Col md={2}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" defaultValue={this.state.name} placeholder="enter the name" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="mobile">Mobile</Label>
                    <Input type="text" name="mobile" id="mobile" defaultValue={this.state.mobile} placeholder="enter the mobile" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="coacherImage">File</Label>
                    <Input type="file" onChange={this.handleFileChange} defaultValue={this.state.coacherImage} encType="multipart/form-data"/>
                    <FormText color="muted">select the file</FormText>
                    </FormGroup>
                    <Button>Submit</Button>
                    </Col>
            </Form>


                {/* <Form onSubmit={this.handleSubmit} >
                
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" defaultValue = {this.state.name} onChange = {this.handleChamge} placeholder="" style = {{width : "200px"}} />
                 <br></br>
                 <Label for="mobile">Mobile</Label>
                 <Input type="text" name="mobile" defaultValue={this.state.mobile} onChange={this.handleChamge} placeholder="" style = {{width : "200px"}}/><br/>
                 <Label for="danceImage">File</Label>
                    <Input type="file" onChange={this.handleFileChange} defaultValue={this.state.danceImage} encType="multipart/form-data"/>
                    <FormText color="muted">select the file</FormText>
 
                <Button color="primary" >submit</Button>
                </Form> */}
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