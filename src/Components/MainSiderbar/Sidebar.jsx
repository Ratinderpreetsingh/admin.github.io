import { Box, CssBaseline, Drawer, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import Menu from '../../Menu';
import RoutesSidebar from '../../Routes';
import { BrowserRouter as Router } from 'react-router-dom';


const Sidebar = () => {
    const theme =useTheme()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible,setSideBarVisible]=useState(false)

    const drawer=(
        <Box
         sx={{
            overflow:"auto",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between"
         }}
         >
          { isLargeScreen &&<Toolbar/> }
            <Menu/>


        </Box>
       
    )
  return (
    <Router>

    <div>
      <div className='flex h-[100vh]'>
        <CssBaseline/>
        
<div className='w-[15%] h-full border border-r-gray-300'>

            {drawer}
</div>
           
      
       
        {/* <Box className='adminContainer' component={'main'} sx={{flexGrow:1}}/> */}
        <div className='w-[85%]'>

        <RoutesSidebar/>
        </div>
      </div>

    </div>
    </Router>

  )
}

export default Sidebar
