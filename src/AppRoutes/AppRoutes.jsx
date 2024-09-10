import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from '../Main/Main'
import Form from '../Main/Components/Form/Signup';
import Login from '../Main/Components/Form/login';

const AppRoutes = () => {
  return (
    <Router>
           <Routes>
               <Route exact path="/dashboard" element={<Main />} />
               <Route exact path="/" element={<Main />} />
               <Route exact path="/signUp" element={<Form />} />
               <Route exact path="/logIn" element={<Login />} />
           </Routes>

    </Router>
  )
}

export default AppRoutes