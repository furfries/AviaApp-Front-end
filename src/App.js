import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Header from './Components/Header';
import Authorisation from './Components/Authorisation';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
        <Header />
        <Authorisation />
        <Footer />
    </div>
  );
}

export default App;
