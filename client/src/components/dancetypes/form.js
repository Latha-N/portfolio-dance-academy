import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Col, Row } from 'reactstrap';
import {connect} from 'react-redux'




class DanceForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            dancestyle:this.props.dancestyle ? this.props.dancestyle : '',
            description:this.props.description ? this.props.description : '',
            danceImage:null
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
         })
        }

     handleFileChange=(e)=>{
         //console.log('danceimage',e.target.files[0])
         this.setState({
             danceImage:e.target.files[0]
         })
     }   
    
     handleSubmit=(e)=>{
            e.preventDefault()
            const formData={
                dancestyle:this.state.dancestyle,
                description:this.state.description,
                //danceImage:this.state.danceImage
            }
            console.log("getting two data",formData,this.state.danceImage)
            const form=new FormData()
            form.append('danceImage',this.state.danceImage)
            for (let key in formData){
                form.append(key,formData[key])
            }

            
            console.log("in form data",form)
            this.props.handleSubmit(form)
     }
    
    render(){
        
        return(
            
            <Form onSubmit={this.handleSubmit}>
                <Col md={2}>
                <FormGroup>
                    <Label for="dancestyle">DanceStyle</Label>
                    <Input type="dancestyle" name="dancestyle" id="dancestyle" defaultValue={this.state.dancestyle} placeholder="enter the style of dance" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="description" name="description" id="description" defaultValue={this.state.description} placeholder="enter the description" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="danceImage">File</Label>
                    <Input type="file" onChange={this.handleFileChange} defaultValue={this.state.danceImage} encType="multipart/form-data"/>
                    <FormText color="muted">select the file</FormText>
                    </FormGroup>
                    <Button>Submit</Button>
                    </Col>
            </Form>
        
        )
    }
}

const mapSytateToProps=(state,props)=>{
    return{
        dancetypes:state.dancetypes
    }
}
export default connect(mapSytateToProps)(DanceForm)
