import React from 'react';
import MotherSignup from './components/MotherSignup'
import AppBar from './components/AppBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <AppBar />
      <h1>Front end</h1>
      <h2>Yup</h2>
      <MotherSignup />
      <Footer />
    </div>
  );
}

export default App;
