import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  IconButton,
  Container,Paper
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);

  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
   
      <div className="w-full md:py-20 mr-4">
        <ToastContainer />
   
          <Grid container spacing={2}>
            {/* left column start */}
            <Grid item md={6}>
            <Container maxWidth="lg" className="sticky top-50">
  <Paper elevation={3}>
    <Carousel
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      thumbWidth={60}
      className="productCarousel"
    >
      <div>
        <img
          className="w-24"
          src="https://images.bewakoof.com/t1080/men-s-black-pirate-hunter-zoro-graphic-printed-oversized-t-shirt-620131-1694500350-1.jpg"
          alt="Image 1"
        />
      </div>
      <div>
        <img
          src="https://images.bewakoof.com/t1080/men-s-black-pirate-hunter-zoro-graphic-printed-oversized-t-shirt-620131-1694500350-1.jpg"
          alt="Image 2"
        />
      </div>
      <div>
        <img
          src="https://images.bewakoof.com/t1080/men-s-black-pirate-hunter-zoro-graphic-printed-oversized-t-shirt-620131-1694500350-1.jpg"
          alt="Image 3"
        />
      </div>
      <div>
        <img
          src="https://images.bewakoof.com/t1080/men-s-black-pirate-hunter-zoro-graphic-printed-oversized-t-shirt-620131-1694500350-1.jpg"
          alt="Image 4"
        />
      </div>
      <div>
        <img
          src="https://images.bewakoof.com/t1080/men-s-black-pirate-hunter-zoro-graphic-printed-oversized-t-shirt-620131-1694500350-1.jpg"
          alt="Image 5"
        />
      </div>
      <div>
        <img
          src="https://images.bewakoof.com/t1080/men-s-black-pirate-hunter-zoro-graphic-printed-oversized-t-shirt-620131-1694500350-1.jpg"
          alt="Image 6"
        />
      </div>
    </Carousel>
  </Paper>
</Container>
            </Grid>
            {/* left column end */}

            {/* right column start */}
            <Grid item md={6} xs={12}>
    

              <Card>
                <CardContent>
                  {/* PRODUCT TITLE */}
                  <Typography variant="h4" gutterBottom>
                    Product Name
                  </Typography>

                  {/* PRODUCT SUBTITLE */}
                  <Typography variant="h6" gutterBottom>
                    Product Subtitle
                  </Typography>

                  {/* PRODUCT PRICE */}
                  <div className="flex items-center">
                    <Typography variant="h5" className="mr-2">
                      MRP: ₹7
                    </Typography>
                    <Typography variant="body1" className="text-secondary">
                      ₹6
                    </Typography>
                    <Typography
                      variant="body1"
                      className="ml-auto text-green-500"
                    >
                      12% off
                    </Typography>
                  </div>

                  <Typography variant="body1" className="text-secondary">
                    incl. of taxes
                  </Typography>
                  <Typography variant="body1" className="text-secondary mb-2">
                    (Also includes all applicable duties)
                  </Typography>

                  {/* PRODUCT SIZE RANGE START */}
                  <div className="mb-10">
                    {/* HEADING START */}
                    <div className="flex justify-between mb-2">
                      <Typography variant="body1" className="font-semibold">
                        Select Size
                      </Typography>
                      <Typography
                        variant="body1"
                        className="text-secondary cursor-pointer"
                      >
                        Select Guide
                      </Typography>
                    </div>
                    {/* HEADING END */}

                    {/* SIZE START */}
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Button
                          variant="outlined"
                          fullWidth
                          className={`rounded-md text-center font-medium ${
                            true
                              ? "hover:border-black cursor-pointer"
                              : "cursor-not-allowed bg-black/[0.1] opacity-50"
                          } ${
                            selectedSize === true ? "border-black" : ""
                          }`}
                          onClick={() => {
                            // setSelectedSize(item.size);
                            setShowError(false);
                          }}
                        >
                          8
                        </Button>
                      </Grid>
                    </Grid>
                    {/* SIZE END */}

                    {/* SHOW ERROR START */}
                    {showError && (
                      <Typography variant="body1" className="text-red-600 mt-1">
                        Size selection is required
                      </Typography>
                    )}
                    {/* SHOW ERROR END */}
                  </div>
                  {/* PRODUCT SIZE RANGE END */}

                  {/* ADD TO CART BUTTON START */}
                  <Button
                    variant="contained"
                    color="warning"
                    fullWidth
                    size="large"
                    className="mb-3"
                    // onClick={() => {
                    //     if (!selectedSize) {
                    //         setShowError(true);
                    //         document
                    //             .getElementById("sizesGrid")
                    //             .scrollIntoView({
                    //                 block: "center",
                    //                 behavior: "smooth",
                    //             });
                    //     } else {
                    //         dispatch(
                    //             addToCart({
                    //                 ...product?.data?.[0],
                    //                 selectedSize,
                    //                 oneQuantityPrice: p.price,
                    //             })
                    //         );
                    //         notify();
                    //     }
                    // }}
                  >
                    Add to Cart
                  </Button>
                  {/* ADD TO CART BUTTON END */}

                  {/* WISHLIST BUTTON START */}
                  <Button
                    variant="outlined"
                    fullWidth
                    size="large"
                    className="mb-10"
                    startIcon={<IoMdHeartEmpty size={20} />}
                  >
                    Wishlist
                  </Button>
                  {/* WISHLIST BUTTON END */}

                  <div>
                    <Typography variant="h6" className="font-bold mb-5">
                      Product Details
                    </Typography>
                    <div className="markdown text-md mb-5">
                      tkldfdlk dfnlkdfn dflkn
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/* right column end */}
          </Grid>

      </div>

    </>
  );
};

export default ProductDetails;
