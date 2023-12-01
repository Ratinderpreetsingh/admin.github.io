import * as React from 'react';
import { useState,useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddCategory from './AddCategory';
import DeleteCategory from './DeleteCategory';
import { useDispatch,useSelector } from 'react-redux';
import { getAllCategory } from '../../Slice/Category_Slice';
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



export default function Category() {
  const[open,setOpen]=useState(false)
  const[deleteOpen,setDeleteOpen]=useState(false)
  const dispatch = useDispatch()
  const items = useSelector((state)=>state.category)
  console.log(items.category)
  useEffect(()=>{
    dispatch(getAllCategory())
  },[])
 const handleAddModal =()=>{
  setOpen(true)
 } 
    const handleClose=()=>{
    setOpen(false)
  }
const handleDelete =(id)=>{
  console.log(id)
  setDeleteOpen(true)
}
const handleCloseDelete= ()=>{
  setDeleteOpen(false)
}
  return (
  <>
      <TableContainer sx={{marginTop:'65px'}} component={Paper}>
    <button onClick={()=>handleAddModal()} >Add Category</button>
      <Table sx={{minWidth:1000}} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="center">#</StyledTableCell>

            <StyledTableCell align="center">Category Name</StyledTableCell>
            <StyledTableCell align="center">No.of Products</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>

           

          </TableRow>
        </TableHead>
        <TableBody>
  {
    items.category.map((items,index)=>{
      return   <StyledTableRow key={index} >
      <StyledTableCell align="center">{index+1}</StyledTableCell>

        <StyledTableCell align="center">{items.category}</StyledTableCell>
        <StyledTableCell align="center">{items.products.length}</StyledTableCell>
        
        <StyledTableCell align="center">
          <button onClick={()=>handleDelete()} >
            Delete
          </button>
        </StyledTableCell>
      </StyledTableRow>
    })
  }
    
  
  


    
         
        </TableBody>
      </Table>
    </TableContainer>

  <AddCategory open={open} handleClose={handleClose}/>
  <DeleteCategory open={deleteOpen} handleClose={handleCloseDelete}/>
  </>
  );
}