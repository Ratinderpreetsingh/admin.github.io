import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddUser from './AddUser';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Delete_User, getAll_User } from '../../Slice/User_Slice';
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



export default function User() {
  const[open,setOpen]=React.useState(false)
  const dispatch =useDispatch()
  const state = useSelector((state)=>state.user)
  console.log(state)
useEffect(()=>{
  dispatch(getAll_User())
},[dispatch])
  const handleModal=()=>{
    setOpen(true)
  }
  const handleClose=()=>{
    setOpen(false)
  }
  const handleDelete =(id)=>{

    dispatch(Delete_User(id))
  }
  return (
  <>
      <TableContainer sx={{marginTop:'65px'}} component={Paper}>
    <button style={{color:'white'}}
    onClick={()=>handleModal()}>Add User</button>
      <Table sx={{ minWidth: 1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">User Name</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>

      
          </TableRow>
        </TableHead>
        <TableBody>
    {
      state.user.map((items,index)=>{
        return  <StyledTableRow key={index}>
        <StyledTableCell align="center">{items?.name}</StyledTableCell>
        <StyledTableCell align="center">{items?.gender}</StyledTableCell>
        
        <StyledTableCell align="center">
          <button style={{color:'white'}}
          onClick={()=>handleDelete(items._id)}
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
      })
    }
     
  


    
         
        </TableBody>
      </Table>
    </TableContainer>
 <AddUser open={open}  handleClose={handleClose}/>
  </>
  );
}