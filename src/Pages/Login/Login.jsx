import React, { useEffect } from 'react';
import { Container, Paper, TextField, Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch,useSelector } from 'react-redux';
import { LoginCreate } from '../../Slice/Login_Slice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLogin = useSelector((state)=>state.login)
    console.log(isLogin)
 const initialValues={
     email:'',
     password:''
 }
    const {errors,values,handleChange,handleSubmit}=useFormik({
        initialValues:initialValues,
        onSubmit:(values)=>{
          toast[isLogin.isAuth ? 'success':'error'](isLogin.isAuth ? 'Login successful' : isLogin?.error, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
              console.log(values)
              dispatch(LoginCreate(values))
        }
    })
    useEffect(() => {
        if (isLogin.isAuth) {
          navigate('/');
        } else {
          navigate('/login');
        }
      }, [isLogin.isAuth, navigate]);
  return (
    <>
      <ToastContainer />

    <Container component="main" maxWidth="xs" >
      <Paper elevation={3} >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="email"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
            value={values.password}
            
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
         
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </Container>
    </>

  );
};

export default Login;
