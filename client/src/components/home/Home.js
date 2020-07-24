import React from 'react'

const imageStyle = {
    backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400/919c6321214757.5656107c524fc.jpg")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height : "95vh"
    
    }

class Home extends React.Component{
    render(){
        //console.log('localStorage',localStorage.getItem('authToken'))
        return(
            <div style={imageStyle}>
                <h1>welcom to DANCE ACADEMY</h1>

            </div>
        )
    }
}

export default Home
