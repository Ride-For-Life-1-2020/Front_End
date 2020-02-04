import React, {useState} from 'react';
//import LoginForm from './components/Form';
import MotherSignup from './components/MotherSignup'
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import WhoAmI from './components/WhoAmI';
import UserSignup from './components/UserSignup';
import HomePage from './components/HomePage';
import DriverInfoForm from './components/DriverForms/DriverInfoForm';
import VehicleInfo from './components/DriverForms/VehicleInfo';

function App() {
  const [isMother, setIsMother] = useState(false);

  const onUserType = event => {
    if (event.target.textContent === 'Mother') {
      setIsMother(true)
    } else {
      setIsMother(false)
    }
  }

  const getUserType = () => {
   return isMother ? 'mother' : 'driver';
  }

  const handleUserFormSubmit = data => {
    // Handle submit User form data
  }

  return (
    <div className="App">
      <AppBar />
      <Switch>
        <Route exact path="/" render={props => <HomePage history={props.history} />} />
        <Route exact path="/signup" render={props => <UserSignup history={props.history} handleUserFormSubmit={handleUserFormSubmit}  userType={getUserType()} />} />
        <Route path="/signup/whoami" render={props => <WhoAmI history={props.history} onUserType={onUserType} />} />
        <Route path="/signup/mother" render={props => <MotherSignup handleUserFormSubmit={handleUserFormSubmit} />} />
        <Route exact path="/signup/driver/step/1" component={props => <DriverInfoForm history={props.history} handleUserFormSubmit={handleUserFormSubmit} />} />
        <Route path="/signup/driver/step/2" component={props => <VehicleInfo handleUserFormSubmit={handleUserFormSubmit} />} />
       </Switch>
      <Footer />
    </div>
  );
}

export default App;
