import React from 'react'

class RegisterList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            formdate:localStorage.getItem('formData') ? JSON.parse(localStorage.getItem('formData')) : {},
        }
    }
    render(){
        const formdata=this.state.formdata
        console.log('registeed', formdata)

        return(
            <div>
                <h1>hello</h1>

            </div>
        )
    }
}
export default RegisterList