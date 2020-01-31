import React, {useEffect}  from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import LoginForm from './components/Form';
import MotherSignup from './components/MotherSignup'
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import Axios from 'axios';

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

  return (
    <div className="App">
      <AppBar  isLogged={isLogged} />
      <Switch>
        <Route exact path="/sign-in" component={LoginForm} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
