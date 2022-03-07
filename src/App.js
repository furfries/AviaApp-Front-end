import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MDBContainer } from 'mdb-react-ui-kit';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import UserPage from './Components/Account/UserPage';
import AdminPage from './Components/Admin/AdminPage';

const App = () => {
  return (
    <BrowserRouter >
        <MDBContainer fluid>
            <Header />
            <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/adminpage' element={<AdminPage />} />
            <Route path='/userpage' element={<UserPage />} />
            </Routes>
            <Footer />
        </MDBContainer>
    </BrowserRouter>
  );
}

export default App;
