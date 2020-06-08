import React from 'react'
import { BrowserRouter,Route,Link,Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

//import {startRemoveUser} from '../src/actions/userAction'
import Home from '../src/components/home/Home'
import Login from '../src/components/login/Login'
import Register from '../src/components/register/Register'

import DanceList from '../src/components/dancetypes/list'
import New from '../src/components/dancetypes/new'
import DanceEdit from '../src/components/dancetypes/edit'

import CoacherList from '../src/components/coachers/list'
import CoacherAdd from '../src/components/coachers/add'
import CoacherShow from '../src/components/coachers/show'
import CoacherEdit from '../src/components/coachers/edit'

import BatchList from '../src/components/batches/list'
//import BatchShow from '../src/components/batches/show'


function App(props){
    // const handleLogout=()=>{
    //     props.dispatch(startRemoveUser())
    // }
    const handleLogout=()=>{
        localStorage.removeItem('authToken')
        window.location.href='/users/login'
    }
    return(
        <div>
            <BrowserRouter>
                    
                {
                    localStorage.getItem('authToken')?(
                        <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
                     <a className="navbar-brand" href="/home">Home</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/dancetypes">DanceTypes<span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link active" href="/coachers">CoacherDetails<span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link active" href="/batches">Batches<span className="sr-only">(current)</span></a>

                     <a className="nav-item nav-link active text-right" href="/users/logout" onClick={handleLogout}>Logout<span className="sr-only">(current)</span></a>
                </div>
                </div>
                </nav>
                            {/* <Link to="/home">home</Link>
                            <Link to="/dancetypes">Dancetypes</Link>
                            <Link to="/coachers">Coachers</Link>
                            <Link to="/users/logout" onClick={handleLogout}>Logout</Link>
 */}
                        </div>
                    ):(
                 <div>
                     <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
                     <a className="navbar-brand" href="">Danceacademy</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/users/register">Create new account<span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link active" href="/users/login">login<span className="sr-only">(current)</span></a>
                    
                </div>
                </div>
                </nav>
                <h1 className="text-center">Welcome To The Danceacademy</h1>
                {/* <Link to="/users/login">login</Link>
                <Link to="/users/register">register</Link> */}
                </div>
                    )
                }
    


                <Switch>
                <Route path="/home" component={Home} exact={true}/>
                <Route path="/users/register" component={Register}/>
                <Route path="/users/login" component={Login}/>
                <Route path="/dancetypes" component={DanceList}exact={true} />
                <Route path="/dancetypes/new" component={New} exact={true}/>
                <Route path="/dancetypes/edit/:id" component={DanceEdit} exact={true}/>

                <Route path="/coachers" component={CoacherList} exact={true}/>
                <Route path="/coachers/new" component={CoacherAdd}/>
                <Route path="/coachers/:id" component={CoacherShow} exact={true}/>
                <Route path="/coachers/edit/:id" component={CoacherEdit}/>

                <Route path="/batches" component={BatchList} exact={true}/>
                {/* <Route path="/batches/new" component={BatchShow} exact={true}/> */}
                </Switch>
            </BrowserRouter>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.users,
        dancetytpes:state.dancetypes
        }
    }
    
    export default connect(mapStateToProps)(App)
    