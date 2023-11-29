import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GetAll_orders, delete_order_By_id } from '../../Slice/Order_Slice';
import Loading from '../../Loading/Loading';
import { useNavigate } from 'react-router-dom';

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



export default function Order() {

const dispatch = useDispatch()
const navigate =useNavigate()
const state =useSelector((state)=>state.order)
console.log(state)
useEffect(()=>{
    dispatch(GetAll_orders())  
},[dispatch])

const handleView =(id)=>{
  navigate(`/order_view/${id}`)
}
const handleDelete =(id)=>{
  dispatch(delete_order_By_id(id))
}

  return (
  <>
  {

   state.loading ?

    <Loading/>  : ( <TableContainer sx={{marginTop:'65px'}} component={Paper}>
    <button style={{color:'white'}}
    // onClick={()=>handleModal()}
    >Add Product</button>
      <Table sx={{ minWidth: 1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Order No.</StyledTableCell>
            <StyledTableCell align="center">User Name</StyledTableCell>
            <StyledTableCell align="center">No. of Products</StyledTableCell>
            <StyledTableCell align="center">Total Amount</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
{
  state.orders && state.orders.map((items,index)=>{
    return <StyledTableRow key={index} >
    <StyledTableCell align="center">{index+1}</StyledTableCell>
    <StyledTableCell align="center">{items?.user?.name}</StyledTableCell>
    <StyledTableCell align="center">{items?.orderItems?.length}</StyledTableCell>
    <StyledTableCell align="center">{items?.totalAmount}</StyledTableCell>
    <StyledTableCell align="center">{items?.status}</StyledTableCell>

    <StyledTableCell align="center">
      <button style={{color:'white'}}
      onClick={()=>handleDelete(items._id)}
      >
        Delete
      </button>
      <button style={{color:'white'}}
      onClick={()=>handleView(items._id)}
      >
        View
      </button>
    </StyledTableCell>
  </StyledTableRow>
  })
}
      
 
    


    
         
        </TableBody>
      </Table>
    </TableContainer>)
  }
     
   
  </>
  );
}