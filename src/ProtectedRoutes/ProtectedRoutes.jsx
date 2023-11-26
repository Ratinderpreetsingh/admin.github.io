import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Route,Routes } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
    const isLogin= useSelector((state)=>state.login)
    console.log(isLogin)
  return isLogin?.isAuth ? children  :<Navigate to='/login' replace/>
}

export default ProtectedRoutes
