import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAll_User } from "../../Slice/User_Slice";
import { getAllProducts } from "../../Slice/Product_Slice";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const OrderAdd = ({ open, handleClose }) => {
  const dispatch =useDispatch()
  const [selectUser,setSelectUset]=useState('')
  const [selectProduct,setSelectProduct]=useState('')

  useEffect(()=>{
     dispatch(getAll_User())
     dispatch(getAllProducts())

  },[dispatch])
  const state = useSelector((state)=>state.user)
  const product = useSelector((state)=>state.product)
  console.log(product)
const handleUser =(e)=>{
setSelectUset(e.target.value)
}
const handleProduct =(e)=>{
  setSelectProduct(e.target.value)
  }

  const initialValues = {
    category: "",
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
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
          Add Order
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="category"
            name="category"
            label="Category Name"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={values.category}
          />
           <TextField
            id="category"
            name="category"
            label="Category Name"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={values.category}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">User</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectUser}
              label="User"
              onChange={handleUser}
            >{
              state?.user?.map((items,index)=>{
                return <MenuItem key={index} value={items?.name}>{items?.name}</MenuItem>
              })
            }
              
              
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Products</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectProduct}
              label="Products"
              onChange={handleProduct}
            >{
              product?.Products?.map((items,index)=>{
                return <MenuItem key={index} value={items?.productname}>{items?.productname}</MenuItem>
              })
            }
              
              
            </Select>
          </FormControl>
         
          <Button type="submit" variant="contained" color="primary">
            Add Order
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default OrderAdd;
