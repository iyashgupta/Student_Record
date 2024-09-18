import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Main from '../Main/Main'
import Login from "../Main/Authentication/login";
import SignUp from "../Main/Authentication/Signup";

const AppRoutes = () => {
  return (
           <Routes>
               <Route exact path="/dashboard" element={<Main />} />
               <Route exact path="/logIn"     element={<Login />} />
               <Route exact path="/"          element={<Login />} />
               <Route exact path="/signUp"    element={<SignUp />} />
           </Routes>
  )
}

export default AppRoutes