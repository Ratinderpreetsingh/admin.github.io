import axios from "axios";



export const CreateProduct = async (data) => {                              // create  product------------->
    try {
        
        const response = await axios.post("http://localhost:8080/api/products/create", data);
        console.log(response.status);
      
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const addProductImages = async (images, id) => {
  try {
    const formData = new FormData();
     
    // Append each image with a distinct key
    images.forEach((image, index) => {
      formData.append(`image${index + 1}`, image);
    });

    const response = await fetch(`http://localhost:8080/api/products/productimages/${id}`, {
      method: 'POST',
      headers: {
        // No need to set Content-Type; it will be set automatically for FormData
      },
      body: formData,
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('Images uploaded successfully:', responseData);
    } else {
      const errorData = await response.json();
      console.error('Error uploading images:', errorData);
    }
  } catch (error) {
    console.error('Error uploading images:', error);
  }
};



export const getAllProduct_api = async () => {
    try {
        const response =await axios.get("http://localhost:8080/api/products/get")
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error);
    }
}


// export const deleteProduct_api = async (id)=>{
//     try {
//         const response = await axios.delete(`http://localhost:8080/api/products/delete/${id}`)
//         return response.data
//     } catch (error) {
//         console.error(error);
//     }
// }
export const deleteProduct_api = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/products/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  