import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, getAllProducts } from "../../Slice/Product_Slice";
import { getAllCategory } from "../../Slice/Category_Slice";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

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


const AddProductModal = ({ open, handleClose }) => {
  const [images, setImages] = useState([]);
  const [selectCategory,setSelectCategory]=useState()
  const dispatch = useDispatch();
  const state = useSelector((state)=> state.category)
  console.log(state.category)
  useEffect(()=>{
   dispatch(getAllCategory())
  },[dispatch])

  const initialValues = {
    productname: "",
    description: "",
    price: "",
    sizes: [],
    
  };

  const handleImageChange = (e) => {
    setImages([...images, ...e.target.files]);
  };
  
  
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue, // This function is used to set form field values in Formik
  } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values)
      console.log(images);
      // console.log({ ...values, images: images });
      // console.log(images)
      const modify = { ...values, images: images,category:selectCategory };
      console.log(modify);
      try {
        dispatch(createProduct(values));
        handleClose();

      } catch (error) {
        
      }finally{
        // dispatch(getAllProducts())

           
      }
      // You can perform any additional logic here and send the data to your backend API
    },
  });

  const handleSizeChange = (event) => {
    const selectedSizes = event.target.value;
    setFieldValue("sizes", selectedSizes); // Set the 'sizes' field in Formik with the selected values
  };

  const handlesetCategory =(e)=>{
    console.log(e.target.value)
    setSelectCategory(e.target.value)
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
          Add Product
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="productname"
            name="productname"
            label="Product Name"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={values.productname}
          />
          <TextField
            id="description"
            name="description"
            label="Product Description"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={values.description}
          />
          <TextField
            id="price"
            name="price"
            label="Product Price"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={values.price}
          />
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel id="sizes">Sizes</InputLabel>
            <Select
              labelId="sizes"
              id="sizes"
              name="sizes"
              label="Sizes"
              multiple
              onChange={handleSizeChange}
              value={values.sizes}
              renderValue={(selected) => (
                <div>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              <MenuItem value="small">Small</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="large">Large</MenuItem>
              {/* Add more size options here */}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectCategory}
              label="Age"
              onChange={handlesetCategory}
            >
            {
              state.category && state.category.map((items,index)=>{
                return  <MenuItem key={index} value={items._id}>{items.category}</MenuItem>
                
              })
            }
              {/* <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="image-upload"
            multiple
            type="file"
            onChange={(e) => handleImageChange(e)}
          />
          <label htmlFor="image-upload">
            <Button
              component="span"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload files
            </Button>
          </label>
          <div>

            {images.map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt={`Image ${index}`}
                style={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                  margin: "5px",  
                }}
              />
            ))}
          </div>
          <Button type="submit" variant="contained" color="primary">
            Add Product
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddProductModal;
