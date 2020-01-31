import React, {useState} from 'react';
//import LoginForm from './components/Form';
import MotherSignup from './components/MotherSignup'
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import WhoAmI from './components/WhoAmI';
import UserSignup from './components/UserSignup';

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
        <Route exact path="/signup" component={props => <UserSignup history={props.history} handleUserFormSubmit={handleUserFormSubmit}  userType={getUserType()} />} />
        <Route path="/signup/whoami" component={props => <WhoAmI history={props.history} onUserType={onUserType} />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
