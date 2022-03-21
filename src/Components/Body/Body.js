import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserPage from './Account/UserPage';
import AdminPage from './Admin/AdminPage';
import LoginContainer from './Login/LoginContainer';
import MainPage from './MainPage/MainPage';
import RegisterContainer from './Register/RegisterContainer';


const Body = (props) => {
    return (
        <Routes>
            <Route path='/login' element={<LoginContainer />} />
            <Route path='/register' element={<RegisterContainer />} />
            <Route path='/adminpage' element={<AdminPage />} />
            <Route path='/userpage' element={<UserPage />} />
            <Route path='/main' element={<MainPage />} />
        </Routes>

    );
};

export default Body;
