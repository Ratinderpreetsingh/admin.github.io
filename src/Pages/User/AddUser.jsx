import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { createUser } from '../../Slice/User_Slice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddUser = ({ open, handleClose }) => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    gender:''
  };

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
    console.log(values);
    dispatch(createUser(values))
      handleClose();
    },
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add User
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="name"
            name="name"
            label="user Name"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={values.name}
          />
           <TextField
            id="gender"
            name="gender"
            label="gender"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={values.gender}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Add User
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddUser;
