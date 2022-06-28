import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserpageContainer from './Account/UserpageContainer';
import AdminpageContainer from './Admin/AdminpageContainer';
import LoginContainer from './Login/LoginContainer';
import MainPage from './MainPage/MainPage';
import RegisterContainer from './Register/RegisterContainer';


const Body = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginContainer />} />
            <Route path='/register' element={<RegisterContainer />} />
            <Route path='/adminpage' element={<AdminpageContainer />} />
            <Route path='/userpage' element={<UserpageContainer />} />
            <Route path='/' element={<MainPage />} />
        </Routes>
    );
};

export default Body;