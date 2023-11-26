import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddProductModal from './AddProductModal';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteProduct, getAllProducts } from '../../Slice/Product_Slice';
import DeleteProduct from './DeleteProduct';
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



export default function Product() {
  const[open,setOpen]=React.useState(false)
  const[deleteOpen,setDeleteOpen]=React.useState(false)
  const [deleteId,setDeleteId]=React.useState('')
  const navigate = useNavigate()
  const dispatch =useDispatch()
  const data = useSelector((state)=>state.product)
  const handleModal=()=>{
    setOpen(true)
  }
  const handleClose=()=>{
    setOpen(false)
  }

  const handleDelete =(id)=>{
    console.log(id)
    setDeleteOpen(true)
    setDeleteId(id)
  }
  const handleView =(id)=>{
    navigate(`/product-view/${id}`)
  }
  const handleCloseDelete= ()=>{
    setDeleteOpen(false)
  }
  useEffect(()=>{
    dispatch(getAllProducts())
  },[dispatch])
  return (
  <>
      <TableContainer sx={{marginTop:'65px'}} component={Paper}>
    <button style={{color:'white'}}onClick={()=>handleModal()}>Add Product</button>
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
        {
          data.Products &&  data.Products.map((items,index)=> {
    return (
      <StyledTableRow key={index}>
        <StyledTableCell align="center">{items?.productname}</StyledTableCell>
        <StyledTableCell align="center">this is shirt</StyledTableCell>
        <StyledTableCell align="center">{items?.category?.category}</StyledTableCell>
        <StyledTableCell align="center">450</StyledTableCell>
        <StyledTableCell align="center">
          <button style={{color:'white'}}onClick={()=>handleDelete(items._id)}>
            Delete
          </button>
          <button style={{color:'white'}}onClick={()=>handleView(items._id)}>
            View
          </button>
        </StyledTableCell>
      </StyledTableRow>
    );
  })
  
}


    
         
        </TableBody>
      </Table>
    </TableContainer>
    <DeleteProduct open={deleteOpen} handleClose={handleCloseDelete} deleteId={deleteId}/>
  {open &&  <AddProductModal open={open} handleClose={handleClose}/>}
  </>
  );
}