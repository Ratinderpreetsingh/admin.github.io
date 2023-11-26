import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { deleteProduct, getAllProducts } from '../../Slice/Product_Slice';
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

const DeleteProduct = ({ open, handleClose, handleDelete,deleteId }) => {
const dispatch=useDispatch()
  const handleConfirmDelete = (id) => {
    console.log(id)
    try {
    dispatch(deleteProduct(id))
        
    } catch (error) {
        
    }finally{
  
        dispatch(getAllProducts())
        handleClose()
    }
    // Add code here to actually delete the product
    // You can call the handleDelete function with the necessary parameters
    // For example: handleDelete(productId);
    // Close the modal after deletion
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Confirm Delete
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Are you sure you want to delete this product?
        </Typography>
        <Button onClick={()=>handleConfirmDelete(deleteId)} variant="contained" color="error" sx={{ mt: 2 }}>
          Delete
        </Button>
        <Button onClick={handleClose} variant="outlined" sx={{ mt: 2, ml: 2 }}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default DeleteProduct;
