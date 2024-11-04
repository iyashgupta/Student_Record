import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../Main/Authentication/login";
import SignUp from "../Main/Authentication/Signup";
import BlogRegistrationForm from "../Main/Components/BlogRegistration/BlogRegistrationForm";
import Layout from "../Main/Components/sidebar/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/logIn" element={<Login />} />
      <Route exact path="/" element={<Login />} />
      <Route exact path="/signUp" element={<SignUp />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Main />} />
        <Route path="/blog/register" element={<BlogRegistrationForm />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
