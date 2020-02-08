import React, {useState, useEffect} from 'react';
import LoginForm from './components/LoginForm';
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
import RiderDashboardPage from './components/profile_page/rider_page_components/RiderDashboardPage';
import {ProtectedRoute} from './ProtectedRoute';
import SearchPage from './components/SearchPage';
import DriverCard from './components/profile_page/rider_page_components/DriverCard';
import axios from 'axios';
import DriverInfo from './components/DriverForms/DriverInfoForm';

function App() {
  // set up a function to grab the user to see if theyre logged in or now.
  // Will use react to fetch the state at a global level.

  const state = useSelector(state => state);
  const isLogged = useSelector(state => state.root.isLoggedIn);
  const [newUserInfo, setNewUserInfo] = useState({})

  // useEffect( () => {
  //   axios.get('/login')
  //   .then( response => {
  //     console.log(response);
  //   })
  //   .catch( error => {
  //     console.log(error);
  //   })
  // }, []);

  const [isMother, setIsMother] = useState(false);

  const onUserType = event => event.target.textContent === 'Mother' ? setIsMother(true) : setIsMother(false);


  const getUserType = () => isMother ? 'mother' : 'driver';


  const handleUserFormSubmit = data => {
    // setNewUserInfo(data.data);
  }
  
  console.log(state);
  return (

    <div className="App">
      <AppBar isLogged={isLogged} />
      <Switch>
        <ProtectedRoute exact path="/profile" component={RiderDashboardPage} />
        <ProtectedRoute exact path="/search" component={SearchPage} />
        <Route exact path="/" render={props => <HomePage history={props.history} />} />
        <Route exact path="/signup" render={props => <UserSignup history={props.history} handleUserFormSubmit={handleUserFormSubmit}  userType={getUserType()} />} />
        <Route path="/signup/whoami" render={props => <WhoAmI history={props.history} onUserType={onUserType} />} />
        <Route path="/signup/mother" render={props => <MotherSignup {...props} handleUserFormSubmit={handleUserFormSubmit} />} />
        <Route exact path="/sign-in" component={LoginForm} />
        <Route exact path="/signup" render={props => <UserSignup history={props.history} handleUserFormSubmit={handleUserFormSubmit}  userType={getUserType()} />} />
        <Route path="/signup/whoami" render={props => <WhoAmI history={props.history} onUserType={onUserType} />} />
        <Route path="/signup/mother" render={props => <MotherSignup handleUserFormSubmit={handleUserFormSubmit} />} />
        <Route exact path="/signup/driver/step/1" render={props => <DriverInfoForm {...props} handleUserFormSubmit={handleUserFormSubmit} />} />
        <Route path="/signup/driver/step/2" render={props => <VehicleInfo {...props} handleUserFormSubmit={handleUserFormSubmit} />} />
       </Switch>
      <Footer />
    </div>
  );
}

export default App;
