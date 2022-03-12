import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MDBContainer } from 'mdb-react-ui-kit';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Body from './Components/Body/Body';

const App = (props) => {
    return (
        <BrowserRouter >
            <MDBContainer fluid>
                <Header />
                <Body />
                <Footer />
            </MDBContainer>
        </BrowserRouter>
    );
};

export default App;
