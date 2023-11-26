import React, { useEffect } from 'react';
import { Box, Table, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { Get_order_By_id } from '../../Slice/Order_Slice';
import Loading from '../../Loading/Loading';
const OrderView = () => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const dispatch =useDispatch()
const {id}=useParams()
console.log(id)
const state = useSelector((state)=>state.order)
console.log(state)
useEffect(()=>{
  dispatch(Get_order_By_id(id))
},[dispatch,id])
const shippingAddress=state.currentOrder.order

console.log(shippingAddress)

  return (
    <>
    {
      true? <Loading/> :

      (<Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* Order Details Heading */}
      <Typography variant="h4">Order Details</Typography>

      {/* Shipping and Payment Information Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Shipping Info */}
        <Box sx={{ minWidth: 275 }}>
          <Typography variant="h5">Shipping Info</Typography>
          <Typography>Order Date: {orderDate}</Typography>
        <Typography>Status: {status}</Typography>
          <Typography>
          Shipping Address: {`${shippingAddress.street}, ${shippingAddress.city}, ${shippingAddress.state}, ${shippingAddress.country}, ${shippingAddress.postalCode}`}
        </Typography>
        </Box>

        {/* Payment Info */}
        <Box sx={{ minWidth: 275 }}>
          <Typography variant="h5">Payment Info</Typography>
          <Typography>Order Date:</Typography>
          <Typography>Status: </Typography>
          <Typography>Shipping Address: </Typography>
          {/* Add payment information here if available */}
        </Box>
      </Box>

      {/* Product Details Section */}
      <Box>
        <Typography variant="h5">Product Details</Typography>
        <TableContainer sx={{marginTop:'65px'}} >
    
      <Table sx={{ minWidth: 1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Product Name</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
     
      <StyledTableRow>
        <StyledTableCell align="center">sd</StyledTableCell>
        <StyledTableCell align="center">this is shirt</StyledTableCell>
        <StyledTableCell align="center">sd</StyledTableCell>
        <StyledTableCell align="center">450</StyledTableCell>
        <StyledTableCell align="center">
          <button style={{color:'white'}}
          
        //   onClick={()=>handleDelete(items._id)}
          >
            Delete
          </button>
          <button style={{color:'white'}}
        //   onClick={()=>handleView(items._id)}
          >
            View
          </button>
        </StyledTableCell>
      </StyledTableRow>



    
         
        </TableBody>
      </Table>
    </TableContainer>
      </Box>

      {/* Total Amount Section */}
      <Box>
        <Typography variant="h5">Total Amount:{totalAmount}</Typography>
      </Box>
    </Box>)
    }
  
    </>
  
  );
};

export default OrderView;
