import React,{useState} from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import {Route,Link,Switch,BrowserRouter as Router} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

import firebase from "firebase/app"
import "firebase/auth"

import Home from "./pages/Home"
import SignIn from "./pages/Signin"
import SignUp from "./pages/Signup"
import PageNotFound from "./pages/Pagenotfound"
import {UserContext} from "./context/UserContext"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import firebaseConfig from "./config/firebaseConfig"

//init firebase(always in the starting of the app before any components loads!)
firebase.initializeApp(firebaseConfig);

const App = () => {

 const [user,setUser] = useState(null); 

  return (
    <Router>
    <ToastContainer/>
    <UserContext.Provider value={{user,setUser}}>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="*" component={PageNotFound}/>
      </Switch>
      <Footer/>
    </UserContext.Provider>
    </Router>
  )
}

export default App