import React, {useState, useEffect} from 'react';
import LoginForm from './components/Form';
import {useDispatch, useSelector} from 'react-redux';
import MotherSignup from './components/MotherSignup'
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import WhoAmI from './components/WhoAmI';
import UserSignup from './components/UserSignup';
import HomePage from './components/HomePage';
import DriverInfoForm from './components/DriverForms/DriverInfoForm';
import VehicleInfo from './components/DriverForms/VehicleInfo';
import axios from 'axios';

function App() {
  // set up a function to grab the user to see if theyre logged in or now.
  // Will use react to fetch the state at a global level.

  const state = useSelector(state => state);
  const isLogged = useSelector(state => state.root.isLoggedIn);

  // useEffect( () => {
  //   Axios.get('/login')
  //   .then( response => {
  //     console.log(response);
  //   })
  //   .catch( error => {
  //     console.log(error);
  //   })
  // }, []); 
  const [isMother, setIsMother] = useState(false);

  const onUserType = event => event.target.textContent === 'Mother' ? setIsMother(true) : setIsMother(false)


  const getUserType = () => isMother ? 'mother' : 'driver';

  const handleUserFormSubmit = data => {
    // Handle submit User form data
  }
  return (

    <div className="App">
      <AppBar isLogged={isLogged} />
      <Switch>
        <Route exact path="/" render={props => <HomePage history={props.history} />} />
        <Route exact path="/sign-in" render={LoginForm} />
        <Route exact path="/signup" render={props => <UserSignup history={props.history} handleUserFormSubmit={handleUserFormSubmit}  userType={getUserType()} />} />
        <Route path="/signup/whoami" render={props => <WhoAmI history={props.history} onUserType={onUserType} />} />
        <Route path="/signup/mother" render={props => <MotherSignup handleUserFormSubmit={handleUserFormSubmit} />} />
        <Route exact path="/signup/driver/step/1" render={props => <DriverInfoForm history={props.history} handleUserFormSubmit={handleUserFormSubmit} />} />
        <Route path="/signup/driver/step/2" render={props => <VehicleInfo handleUserFormSubmit={handleUserFormSubmit} />} />
       </Switch>
      <Footer />
    </div>
  );
}

export default App;
